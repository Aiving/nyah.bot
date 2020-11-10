module.exports.run = async (bot, message, args) => {
    message.channel.send('The new flag of the Slavs (as prettier under Putin)', { files: [`./onet/russiaflag.png`] });
}

module.exports.help = {
    name: "slavsflag"
  }