const express = require('express')
const app = express()
const port = 8080;
// This is for Routing 
/*
app.get("/", (req, res) => {
    res.send("<h1>You Are in Root</h1>");
});
app.get("/home", (req, res) => {
    res.send("<h1>You Are in home</h1>");
});
app.get("/contact", (req, res) => {
    res.send("<h1>You Are in contact</h1>");
});
app.get("/apple", (req, res) => {
    res.send("<h1>You Are in apple</h1>");
});
app.get("/banana", (req, res) => {
    res.send("<h1>You Are in banana</h1>");
});
app.post("/", (req, res) => {
    res.send("<h1>You Send Post Request</h1>");
});

// for any instead of below this will response
app.use((req, res) => {
    res.send("!!!!! No ! No ! You Are Smart Bro !!!!!");
});

*/
// Now Come for Path parameter 
app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    let str = `Welcome Mr. ${username} `;
    res.send(str);
});
app.get("/search", (req, res) => {
    let { q } = req.query;
    console.log(req.query);
    if (!q) {
        res.send("<h1>Nothing Search</h1>");
    }
    res.send(`<h1>search result for : ${q}</h1>`);
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});