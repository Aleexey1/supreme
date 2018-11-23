const Discord = require("discord.js");

exports.run = (bot, message, args) => {
    
    let embed = new Discord.RichEmbed()
    .setTitle('Olá, para adicionar me adicionar em seu grupo discord, basta clicar no **CLICK AQUI** logo abaixo!')
    .addField('<a:a_:515237324381093909> Obrigado por me adicionar em seu grupo discord!',`[CLICK AQUI](https://discordapp.com/oauth2/authorize?=&client_id=514522457919717386&scope=bot&permissions=8)`, true)

    message.channel.send(embed)
}

exports.help = {
    "name": "invite"
}