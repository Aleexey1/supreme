const Discord = require("discord.js");

exports.run = (bot,message,args) => {
        if(!message.guild.member(message.author.id).hasPermissions("BAN_MEMBERS")) return message.reply("Você não tem permissão de usar esse comando")
    message.delete();
    message.channel.send(args.join(" "))
}

exports.help = {
    name: "say"
}
