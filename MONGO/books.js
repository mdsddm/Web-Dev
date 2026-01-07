const mongoose = require("mongoose");
main().then((res) => {
    console.log("connection successful !!");
}).catch(err => console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}
const bookSchema = new mongoose.Schema({
    // this type of Schema is used for more than one constraints
    title: {
        type: String,
        required: true, // required : true => { value not null}
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "Price is too low for selling"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    genre: [String],
    category: {
        type: String,
        enum: ["fiction", "non-fiction"],
    }
});
const Book = mongoose.model("Book", bookSchema);
Book.findByIdAndUpdate("695e21ba2c121c31fd7c2706", { price: 1200 }, { runValidators: true }).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err.errors.price.properties.message);
})

// let book1 = new Book({
//     title: "Spider insertMany",
//     author: "RD Sharma",
//     price: 1200,
//     genre: ["Sci-fi", "comedy", "super Hero"],
//     category: "fiction",

// });
// book1.save().then((res) => {
//     console.log("save successful", res);
// }).catch((err) => {
//     console.log("got error", err);
// });

