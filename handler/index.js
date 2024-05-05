const { readdir } = require("fs/promises");
const { ConnectToMongo } = require("../db/mongoose");

async function NoPage(req, res, next) {
    res.json({
        error: "Page Not Found!"
    });
    next();
}

async function Check(req, res, next) {
    const { success, error } = await ConnectToMongo();

    if (error) {
        console.log(error);
        return res.json({
            error: error.message ?? "Unable to connect to db"
        });
    }

    next();
}

async function Error(req, res, error) {
    return res.json({
        error: error ?? null
    });
}

module.exports = { NoPage, Error, Check };
