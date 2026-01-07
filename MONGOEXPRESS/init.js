const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then((res) => {
    console.log('Successfully connected to mongo', res);

}).catch((err) => {
    console.log(err);
})
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let chats = [
    {
        from: "neha",
        to: "priya",
        msg: "send me your exam sheets",
        created_at: new Date(),
    },
    {
        from: "sonu",
        to: "monu",
        msg: "roses are red ",
        created_at: new Date(),
    },
    {
        from: "geeta",
        to: "seeta",
        msg: "Shabash Beta ",
        created_at: new Date(),
    },
    {
        from: "Munna Bhaiya",
        to: "Bablu",
        msg: "Le ye goli kha !",
        created_at: new Date(),
    },
    {
        from: "Guddu",
        to: "Munna Bhaiya",
        msg: "Bole the na goli jarur marege tumko",
        created_at: new Date(),
    },
    {
        from: "vibhuti",
        to: "anguri",
        msg: "Aur bhabhi jee kya haal hai aapke!",
        created_at: new Date(),
    },
    {
        from: "anguri",
        to: "Manmohan Tiwari",
        msg: "Laddu ke papa ! sahi pakde hai",
        created_at: new Date(),
    },
    {
        from: "amit",
        to: "sumit",
        msg: "all the best!",
        created_at: new Date(),
    },
    {
        from: "rohit",
        to: "mohit",
        msg: "Patak ke marege sale",
        created_at: new Date(),
    },
    {
        from: "anita",
        to: "ramesh",
        msg: "brings me some food",
        created_at: new Date(),
    },
]

Chat.insertMany(chats).then(() => {
    console.log("database got it !!");
}).catch((err) => {
    console.log("database did not get your data");
})