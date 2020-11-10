module.exports.run = async (bot, message, args) => {
    let config = require('C:/Users/USER 35/Downloads/bot/config.json');
    if(message.author.id !== config.ownerID) return;
};

    module.exports.help = {
    name: "status"
  }