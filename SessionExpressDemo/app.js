const express = require("express");
const app = express();
const port = 8080;
const session = require("express-session");

const sessionOptions = {
  secret: "My-super-secret-string",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOptions));
app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  console.log(req.session);
  req.session.name = name;
  console.log(req.session);
  res.send(name);
});
app.get("/hello", (req, res) => {
  res.send(`hello ${req.session.name}`);
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
