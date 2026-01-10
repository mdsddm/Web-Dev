const express = require("express")
const app = express();

// this middleware to check token
app.use("/api", (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    } else {
        throw new Error("ACCESS DENIED!");
    }
})
// this function works as middleware and we can pass on route
const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    } else {
        res.send("ACCESS DENIED");
    }
}


app.get("/api", checkToken, (req, res) => {
    res.send("Data");
})
// // custom middleware

// // creating utility middleware
// app.use("/random/:id", (req, res, next) => {
//     req.date = new Date(Date.now()).toDateString();
//     console.log(req.method, req.hostname, req.path, req.date);
//     next();
// });
// //middleware for random route 
// app.use("/random", (req, res, next) => {
//     console.log('you are in random middleware');
//     next();
// })

// app.get("/", (req, res) => {
//     res.send("Home Directory")
// })
// app.get("/random", (req, res) => {
//     res.send('This is random page');
// })
app.listen(8080, () => {
    console.log('app is listening to port 8080');

})