const Discord = require("discord.js");

exports.run = (client, message, args) => {
let member = message.mentions.users.first() || bot.users.get(args[0]) || message.author;
    let avatar = member.displayAvatarURL;
    if (avatar.endsWith(".gif")) {
        avatar = `${member.displayAvatarURL}?size=2048`
    }
    message.channel.send({
        embed: {
            title: `${member.tag}`,
            description: `[Link Direto](${avatar})`,
            image: {
                url: avatar
            }
        }
    })
}

exports.help = {
    "name": "avatar"
}