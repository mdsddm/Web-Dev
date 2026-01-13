// this is used for show one to squillions

const mongoose = require("mongoose");
const { Schema } = mongoose;


main()
    .then(() => console.log("connection successful"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username: String,
    email: String,
});
const postSchema = new Schema({
    content: String,
    Likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);


const addData = async () => {
    let user1 = await User.findOne({ username: "Rahul Kumar" })
    let post1 = new Post({
        content: "Bye Bye",
        likes: 23,
    });
    post1.user = user1;
    await post1.save();
}
addData();
