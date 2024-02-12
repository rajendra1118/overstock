
const jwt = require("jsonwebtoken")


const auth = (req, res, next) => {

    const token = req.headers.authorization?.split(" ")[1];

    if (token) {

        jwt.verify(token, "login", function (err, decoded) {
            if (err) {
                res.send("token is wronf or expried")
            } else {
                console.log("middleware", decoded, req.body)
                req.body.userId = decoded.userId,
                    req.body.user = decoded.user
                next()
            }
        })
    } else {
        res.send({ "msg": "plz login token is missing" })
    }

}

module.exports = {
    auth
}