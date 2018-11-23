const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    

    let msgping1 = new Date();

    let clientping = new Date() - message.createdAt;


    let pingembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField('Ping da API : ', Math.floor(client.ping) + 'ms')
        .addField('Ping do bot : ', Math.floor(clientping) + 'ms')
        .setTimestamp(new Date())
        .setThumbnail(client.user.displayAvatarURL  )
        .setFooter(`Requisitado por : ${message.author.tag}`, message.author.avatarURL);

        
    return message.channel.send(pingembed);
        

};

module.exports.help = {
    name: "ping"
};