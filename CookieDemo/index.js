const express = require("express");
const app = express();
const port = 8080;
const cookieParser = require('cookie-parser');

app.use(cookieParser("secretcode"));
app.get("/greet", (req, res) => {
    let { name = "anonymous", greet = "Hey" } = req.cookies;
    res.send(`${greet}, ${name}`);
})
app.get("/getsignedcookies", (req, res) => {
    res.cookie("madeIn", "India", { signed: true });
    res.send("Signed Cookie sent");
})

app.get("/verify", (req, res) => {
    console.log(req.signedCookies);
    res.send("Varified");
})
app.get("/", (req, res) => {
    res.send("Hey, i am root");
})

app.listen(port, () => {
    console.log(`app is listening to port ${port}`);

})