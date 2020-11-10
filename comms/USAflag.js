module.exports.run = async (bot, message, args) => {
      message.channel.send('National flag of the USA from now on:', { files: [`./onet/USAflag.png`] });
  }
  
  module.exports.help = {
      name: "USAflag"
    }