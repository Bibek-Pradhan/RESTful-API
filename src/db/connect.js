const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/circketBating", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Database connection is sucessfully.");
}).catch((error) => {
    console.log("Database connection fails. Something went wrong");
});