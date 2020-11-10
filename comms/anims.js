module.exports.run = async (bot, message, args) => {
  var imageFolder = './anims/';
  const fs = require('promise-fs')
  fs.readdir(imageFolder, function(err,files) {
    var rf = files[Math.floor(Math.random()*files.length)];
     
    message.channel.send(' ', { files: [`./anims/${rf}`] });
  })
}

module.exports.help = {
    name: "anims"
  }