const Discord = require("discord.js");

exports.run = (bot,message,args) => {
        if(!message.guild.member(message.author.id).hasPermissions("BAN_MEMBERS")) return message.reply("Você não tem permissão de usar esse comando")
    message.delete();
    message.channel.send('@everyone | @here')
    let embed = new Discord.RichEmbed()
        .setTitle(`<a:RingingBell:508676600532041731> SlimeMC | Aviso`)
        .setDescription(args.join(" "))
        .setColor('#07D03C')
        .setTimestamp("")
        .setFooter(`SlimeMC | Todos os direitos reservados.`, bot.user.displayAvatarURL);

        message.channel.send(embed);
     }

exports.help = {
    name: "aviso"
}
