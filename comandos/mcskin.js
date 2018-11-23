const Discord = require("discord.js");

exports.run = (client, message, args) => {
    let reason = args.slice(0).join(' ');
      if (reason.length < 1) return message.reply('**Cite um nick de minecraft!**');
      
      let embed = new Discord.RichEmbed()
    
      .setTitle(`<a:MinecraftJump:515232344580423681> pedido por: ${message.author.tag}\n \n Nick :${args[0]}`)
    .setImage(`https://mc-heads.net/body/${args[0]}`)
     .setFooter(message.author.tag,message.author.avatarURL )
      .setTimestamp(new Date())
      .setColor('#00BFFF')
      message.channel.send(embed)
    }

exports.help = {
    "name": "mcskin"
}