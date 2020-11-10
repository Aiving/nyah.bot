module.exports.run = async (bot, message, args) => {
    var date = new Date();
    message.channel.send(`\`\`\`js\nHours: ${date.getHours()-4}. Minutes: ${date.getMinutes()}. Seconds: ${date.getSeconds()}\n\`\`\``)
}
    module.exports.help = {
    name: "time"
  }