const { Faker, en } = require("@faker-js/faker");
const UserSchema = require("../db/modals/User");

module.exports = async (req, res) => {

    return res.json({
        message: "Its working."
    });
};
