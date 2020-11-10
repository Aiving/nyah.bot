module.exports.run = async (bot, message, args) => {
    Promise.all([
		message.react('<:what:770376857279266866> ', { timeout: 5000 }),
		message.react('<:verysad:770376859686535172> ', { timeout: 5000 }),
		message.react('<:sad:770376859216248893> ', { timeout: 5000 }),
	])
    message.reactions.removeAll({ timeout: 10000 });
    message.delete({ timeout: 11000 })
};

module.exports.help = {
    name: "pls_react"
  }