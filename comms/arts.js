module.exports.run = async (bot, message, args) => {
    var chans = './chans/';
    var loli = './loli/';
    var anims = './anims/';
    const fs = require('promise-fs');
    fs.readdir(chans, (err, files) => {
      message.channel.send(`\`\`\`js\nNumber of Anime arts: ${files.length}\n\`\`\``)
    });
    fs.readdir(loli, (err, files) => {
      message.channel.send(`\`\`\`js\nNumber of Loli arts: ${files.length}\n\`\`\``)
    });
    fs.readdir(anims, (err, files) => {
      message.channel.send(`\`\`\`js\nNumber of Animals arts: ${files.length}\n\`\`\``)
    });
  }
  
  module.exports.help = {
      name: "arts"
    }