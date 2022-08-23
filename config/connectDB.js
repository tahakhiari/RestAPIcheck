const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true, useUnifiedTopology: true
        })
        console.log("DB connected succesfully")
    } catch (error) {
        console.log("connection failed ", error)
    }
}
module.exports = connectDB