const mongoose = require("mongoose")

try {
    const uri = "mongodb+srv://professor:professor@cluster0.laoxc.mongodb.net/artin"
    mongoose.connect(
        uri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
    )
} catch (err) {
    console.log(err)
}

mongoose.Promise = global.Promise

module.exports = mongoose