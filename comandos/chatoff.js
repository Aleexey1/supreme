const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    if(!message.guild.member(message.author.id).hasPermissions("MANAGE_ROLES")) return message.reply("<a:BlobBanHammer:471788559402139668> **|** Você não tem permissão para executar este comando!")
        
    var da = message.guild.roles.find("name","@everyone")
    message.channel.overwritePermissions(da, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: true

      })
    
      message.channel.send(`O canal ${message.channel} foi **BLOQUEADO** pelo ` + message.author)

}

module.exports.help = {
    name: "chatoff"
    }