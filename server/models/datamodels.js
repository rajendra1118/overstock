

const mongoose = require("mongoose")

const dataSchema = mongoose.Schema({
    Image: { type: String },
    Name: String,
    Category: String,
    Price: String,
    Des: String,
    userId: String,
    user: String
}, { versionKey: false })


const DataModel = mongoose.model("product", dataSchema)

module.exports = {
    DataModel
}