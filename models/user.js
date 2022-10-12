const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        required: [true, "Please enter an email"],
    },
    password: String,
    basket: [{type: mongoose.Schema.Types.ObjectId, ref: "Basket"}],
    admin: { type: Boolean, default: false}
})

const User = mongoose.model("User", UserSchema)
module.exports = User