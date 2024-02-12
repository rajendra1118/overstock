

const express = require("express")

const { DataModel } = require("../models/datamodels")
const { auth } = require("../middleware/auth.middleware")

const dataRouter = express.Router()


// creating a product 

dataRouter.post("/add", async (req, res) => {
    try {


        const product = new DataModel(req.body)
        await product.save()
        res.send("product add succesfully")
    } catch (error) {
        res.send({ "msg": error })
    }
})


dataRouter.get("/get", auth, async (req, res) => {

    try {

        const product = await DataModel.find();
        res.send(product)


    } catch (error) {
        res.send({ "error": error })
    }

    // res.send({ "code": 200, "msg": "fetch product succes", data: data })

})


module.exports = {
    dataRouter
}