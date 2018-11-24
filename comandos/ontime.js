const Discord = require("discord.js");
const moment = require("moment")
require("moment-duration-format")

exports.run = (client, message, args) => {
    let duration = moment.duration(client.uptime).format('D [d], H [h], m [m], s [s]');
    let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;
    let embed = new Discord.RichEmbed()

    .setTitle("Quanto tempo estou online!")
    .setColor("RANDOM")
    .setDescription(`**${nomeeapelido}**, estou online à: **${duration}**`)
    
    message.channel.send(embed);
}

exports.help = {
    name: "time"
}