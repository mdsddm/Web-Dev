const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.urlencoded({ extended: true }))
main().then((res) => {
    console.log('Successfully connected to mongo');

}).catch((err) => {
    console.log(err);
})
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.set("view engine", "ejs");

// index route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
})
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
})
app.post("/chats", (req, res) => {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    });
    newChat.save()
        .then(res => console.log("oo"))
        .catch((err) => {
            console.log("oooo");

        })
    res.redirect("/chats");
})
app.get("/", (req, res) => {
    res.send("<h1>You are in home page</h1>")
})

app.listen(8080, () => {
    console.log("app is listening on port 8080");
})