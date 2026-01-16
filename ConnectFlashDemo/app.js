const express = require("express");
const app = express();
const port = 8080;
const session = require("express-session");
const flash = require("connect-flash");

app.set("view engine", "ejs");

const sessionOptions = {
  secret: "My-super-secret-string",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
  res.locals.successMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");
  next();
});

app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  if (name == "anonymous") {
    req.flash("error", "User not registerd");
  } else {
    req.flash("success", "User register Successfully!");
  }
  req.session.name = name;

  res.redirect("/hello");
});
app.get("/hello", (req, res) => {
  res.render("page.ejs", { name: req.session.name });
});

// app.get("/reqcount", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }
//   res.send(`you sent a request ${req.session.count} times`);
// });

app.get("/test", (req, res) => {
  res.send("Test Successful!");
});

app.listen(port, () => {
  console.log(`app is listening to port ${port}`);
});
