const mongoose = require("mongoose");
main().then((res) => {
    console.log("connection successful !!");
}).catch(err => console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");

}
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});
const User = mongoose.model("User", userSchema);

// User.findOne({}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);

// })
// User.updateOne({ name: "Adam" }, { age: 38 }).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });
// User.insertMany([
//     { name: "Tony", email: "tony@abc.com", age: 34 },
//     { name: "Peter", email: "peter@abc.com", age: 30 },
//     { name: "Bruce", email: "bruce@abc.com", age: 34 },
// ]).then((res) => {
//     console.log(res);
// })
// const user2 = new User({
//     name: "Eve",
//     email: "xyz@abc.com",
//     age: 48,

// });
// user2.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);

// })
// findOneandUpdate
// User.findOneAndUpdate({ name: "Eve" }, { age: 39 }, { new: true }).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);

// })
// User.deleteOne({ name: "Peter" }).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })
// similarly there are functions like findByIDAndDelete and findByOneAndDelete 


