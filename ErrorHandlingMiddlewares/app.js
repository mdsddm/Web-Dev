const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

app.use("/api", (req, res) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        res.send("data");
    } else {
        throw new ExpressError(401, "ACCESS DENIED");
    }
});

app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access to admin is Forbidden");

})
app.get("/api", (req, res) => {
    let abc = abc;
});

app.use((err, req, res, next) => {
    console.log('----- Error ----');
    let { status = 500, message = "some error occured" } = err;
    res.status(status).send(message);
});
app.use((req, res) => {
    res.send('Page not found !!');
});

app.listen(8080, () => {
    console.log('app is listening on port 8080');
});