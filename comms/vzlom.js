module.exports.run = async (bot, message, args) => {
let channel = await bot.channels.fetch(`${args[0]}`);    
channel.send(`начат взлом пиписьки ${args[1]}...`);
    async function dp(arg) {
        channel.send(`взлом пиписьки завершен на 25%.`);
    }
    async function pd(arg) {
        channel.send(`взлом пиписьки завершен на 50%..`);
    }
    async function sp(arg) {
        channel.send(`взлом пиписьки завершен на 75%...`);
    }
    async function st(arg) {
        channel.send(`взлом пиписьки завершен на все 100%!`);
    }
    async function result(arg) {
        channel.send(`результат взлома пиписьки!:`);
        channel.send(`пиписька была успешно взломана и хирургическим путем удалена!`);
    }
    setTimeout(dp, 1000, 'fuckme');
    setTimeout(pd, 3000, 'fuckme');
    setTimeout(sp, 5000, 'fuckme');
    setTimeout(st, 7000, 'fuckme');
    setTimeout(result, 9000, 'fuckme');
}

module.exports.help = {
    name: "vzlom"
  }