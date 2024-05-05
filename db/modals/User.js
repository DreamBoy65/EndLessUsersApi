const { Schema, model } = require("mongoose");

module.exports = model(
    "users",
    new Schema({
        _id: String,
        avatar: String,
        birthday: Date,
        firstName: String,
        lastName: String,
        about: String,
        address: String,
        city: String,
        country: String
    })
);
