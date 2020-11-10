module.exports.run = async (bot, message, args) => {
    message.channel.send(`testing...`);
    async function dp(arg) {
        message.channel.send(`25%.`);
    }
    async function pd(arg) {
        message.channel.send(`50%..`);
    }
    async function sp(arg) {
        message.channel.send(`75%...`);
    }
    async function st(arg) {
        message.channel.send(`100%!`);
    }
    async function result(arg) {
        message.channel.send(`test result: `, { files: ['./onet/fUzFYo6P4fI.jpg'] });
    }
    setTimeout(dp, 1000, 'fuckme');
    setTimeout(pd, 3000, 'fuckme');
    setTimeout(sp, 5000, 'fuckme');
    setTimeout(st, 7000, 'fuckme');
    setTimeout(result, 9000, 'fuckme');
}

module.exports.help = {
    name: "test"
  }