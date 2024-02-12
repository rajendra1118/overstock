

const express = require("express")
const bcrypt = require("bcrypt")
const { UserModel } = require("../models/usermodels")
const { auth } = require("../middleware/auth.middleware")
const jwt = require("jsonwebtoken")
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {

    const { email, password } = req.body

    try {
        bcrypt.hash(password, 5, async function (err, hash) {
            console.log(hash)
            if (err) {
                res.send("somthing wend wrong while hasing")
            } else {

                const user = new UserModel({ email, password: hash })
                await user.save()
                // const user = new UserModel({ email, password: hash })
                // await user.save()
                res.send("register succesfully")
                //alert("user register succesfully")
            }
            // Store hash in your password DB.
        });


    } catch (error) {


        res.send("error in registering user")

    }

});


userRouter.post("/login", async (req, res) => {

    const { email, password } = req.body
    try {
        const user = await UserModel.findOne({ email })
        if (user) {
            bcrypt.compare(password, user.password, function (err, result) {
                // result===ture
                if (result) {
                    const token = jwt.sign({ userId: user._id }, 'login');
                    res.send({ "msg": "login succesful", "token": token, userId: user._id })
                } else {
                    res.send("password is wrong")
                }

            })
        } else {
            res.send("user is not register")

        }


    } catch (error) {
        res.send({ "error": error })
    }
})


userRouter.post("/add-to-cart", async (req, res) => {
    console.log(req.body)
    const isUpdate = await UserModel.updateOne({ _id: req.body.userId }, {
        $addToSet: { cart: req.body.productId }
    })


    if (isUpdate) {
        res.send({ "msg": "add to cart succes" })
    } else {
        res.send({ "msg": "server error" })
    }

})


userRouter.post("/getCart", async (req, res) => {

    const userId = req.body.userId

    const Data = await UserModel.findOne({ _id: userId }).populate('cart')

    if (Data) {
        res.send({ "msg": "get cart succes", Data: Data })
    } else {
        res.send({ "msg": "server error" })
    }
})

module.exports = {
    userRouter
}