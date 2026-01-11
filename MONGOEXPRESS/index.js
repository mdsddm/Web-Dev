const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError")


app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }))
main().then(() => {
    console.log('Successfully connected to mongo');

}).catch((err) => {
    console.log(err);
})
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.set("view engine", "ejs");

// index route
app.get("/chats", asyncWrap(async (req, res) => {
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
}));
// New Route
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});
app.post("/chats", asyncWrap(async (req, res, next) => {
    const { from, to, msg } = req.body;
    const newChat = new Chat({
        from,
        to,
        msg,
        created_at: new Date(),
    });
    await newChat.save();
    res.redirect("/chats");

}));

// to remove try catch
function asyncWrap(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => {
            next(err);
        })
    }
}
// for async error
//NEW - Show Route
app.get("/chats/:id", asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
}));

// edit route
app.get("/chats/:id/edit", asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
}));
app.put("/chats/:id", asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    await Chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true, new: true });
    res.redirect("/chats");
}));

// destroy route
app.delete("/chats/:id", asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
}));
app.get("/", (req, res) => {
    res.redirect("/chats");
});

// middleware to print error name 
app.use((err, req, res, next) => {
    if (err.name === "ValidationError") {
        console.log("You did not follow Rules !!");

    }
    console.log(err.name);
    next(err);
})

// Error Handling Middleware (must have 4 args)
app.use((err, req, res, next) => {
    const { status = 500, message = "Some Error Occurred" } = err;
    res.status(status).send(message);
});

app.listen(8080, () => {
    console.log("app is listening on port 8080");
})