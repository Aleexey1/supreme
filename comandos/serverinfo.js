const Discord = require("discord.js");
const moment = require('moment')
moment.locale('pt-BR');

exports.run = (bot,message,args) => {
    let gAvatar = message.guild.iconURL;
    let embed = new Discord.RichEmbed()

    .setTimestamp()
    .setTitle(`${message.guild.name}`)
    .setThumbnail(gAvatar)
    .setColor("RANDOM")
    .setDescription(`Algumas informações do servidor`)
    .addField(`ID do servidor`, message.guild.id, true)
    .addField(`Fundador do servidor`, message.guild.owner, true)
    .addField(`Região do servidor`, message.guild.region, true)
    .addField(`Total de canais`, message.guild.size, true)
    .addField(`Criado em`, moment(message.guild.createdAt).format('LLLL'))
    .addField(`Você entrou aqui em`, moment(message.member.joinedAt).format('LLLL'))
    .addField(`Entrei aqui em`, moment(bot.user.joinedAt).format('LLLL'))
    .addField(`Total de membros`, message.guild.memberCount);

    message.channel.send(embed);
}

exports.help = {
    name: "serverinfo"
}
