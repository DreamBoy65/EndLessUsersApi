const Mongoose = require("mongoose");

async function ConnectToMongo() {
    if (Mongoose.connection.readyState === 1) return {
      success: true
    }

    try {
        await Mongoose.connect(process.env.mongouri);
        return {
            success: true
        };
    } catch (e) {
      return {
        error: e
      }
    }
}

module.exports = { ConnectToMongo };
