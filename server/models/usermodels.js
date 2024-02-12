

const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

    email: { type: String, reuired: true },
    password: { type: String, required: true },
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product' }]

}, { versionKey: false })

const UserModel = mongoose.model("userData", userSchema)

module.exports = {
    UserModel
}