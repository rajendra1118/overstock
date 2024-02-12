

const express = require("express")


const { connection } = require("./dbConnect");
const { userRouter } = require("./routes/userRoutes");
const dotenv = require("dotenv").config()
const cors = require('cors');
const { dataRouter } = require("./routes/dataRoutes");

const app = express();
const PORT = process.env.PORT

app.use(cors({
    origin: "http://localhost:3000"
}))

app.use(express.json());
app.use("/user", userRouter)
app.use("/data", dataRouter)
app.get("/", (req, res) => {
    res.send("this is homepage")
})






app.listen(PORT, async () => {
    try {
        await connection
        console.log(`server is running on port ${PORT},db also connected`)


    } catch (error) {

    }

})