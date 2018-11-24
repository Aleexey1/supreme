const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first();
    if(!user) return message.channel.send('Você precisa mencionar alguém para beijar!');
    let gifs = ['https://media.giphy.com/media/1BcfiGlOGXzQ5xU4DA/giphy.gif'] 
    let random = Math.round(Math.random() * gifs.length);
    let embed = new Discord.RichEmbed()
        .setTitle(`${message.author.username} deu um beijo no(a) ${user.username}`)
        .setImage(gifs[gifs.length == 1 ? 0 : random == 0 ? random + 1 : random - 1])
        .setColor('#f2f1f2')
        .setTimestamp()
        message.channel.send(embed);
     }

exports.help = {
    name: "beijar"
}