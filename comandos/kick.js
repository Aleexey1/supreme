const Discord = require("discord.js");

exports.run = (client, message, args) => {
let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!kUser) return message.channel.send("Não consigo encontrar usuário!");
let kReason = args.join(" ").slice(22);
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Infelizmente você não tem permissão!");
if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Essa pessoa não pode ser chutada!");

let kickEmbed = new Discord.RichEmbed()
.setDescription("KICK")
.setColor("#e56b00")
.addField("Usuário chutado:", `${kUser} ID ${kUser.id}`)
.addField("O staff que chuto:", `<@${message.author.id}> ID ${message.author.id}`)
.addField("Foi chutado pelo canal:", message.channel)
.addField("Time:", message.createdAt)
.addField("Motivo:", kReason);

let kickChannel = message.guild.channels.find(`name`, "😞cantinho-da-vergonha");
if(!kickChannel) return message.channel.send("Não encontrei o canal #😞cantinho-da-vergonha.");

message.guild.member(kUser).kick(kReason);
kickChannel.send(kickEmbed);

return;
}

exports.help = {
    name: "kick"
}
