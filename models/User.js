const mongoose = require ('mongoose')
const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    Email: { type: String },
    Password: { type: String },
    Phone: { type: Number }
})

module.exports = User = mongoose.model("user", userSchema)