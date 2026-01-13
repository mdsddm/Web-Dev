// handling deleting in relationship

const mongoose = require("mongoose");
const { Schema } = mongoose;


main()
    .then(() => console.log("connection successful"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema = new Schema({
    item: String,
    price: Number,
});

const Order = mongoose.model("Order", orderSchema);

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ],
});

// Add middleware BEFORE creating the model
customerSchema.post("findOneAndDelete", async (customer) => {
    if (customer.orders.length) {
        let res = await Order.deleteMany({ _id: { $in: customer.orders } });
        console.log(res);
    }
})

const Customer = mongoose.model("Customer", customerSchema);

// adding cutsomer
const adCust = async () => {
    let newCust = new Customer({
        name: "Karan Arjun",
    });
    let newOrder = new Order({
        item: "Lassi",
        price: 250,
    });
    newCust.orders.push(newOrder);
    await newOrder.save();
    await newCust.save();
    console.log("Added new customer");
}
// deleting customer
const delCust = async () => {
    let data = await Customer.findByIdAndDelete('69665f0af85d222e538e758b');
    console.log(data);
}

delCust();
//adCust();