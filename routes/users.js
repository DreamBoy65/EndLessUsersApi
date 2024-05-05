const User = require("../db/modals/User");
const _ = require("lodash");

module.exports = async (req, res) => {
    const { query } = req;
    let { limit, page } = query;

    limit = !limit ? 100 : !Number(limit) ? 100 : Number(limit);
    page = !page ? 1 : !Number(page) ? 1 : Number(page);

    let users = await User.find({});

    let chunkUsers = _.chunk(users, 100);

    let returnPage = chunkUsers[page - 1];

    return res.json({
        users: returnPage ? returnPage.slice(0, limit) : null
    });
};
