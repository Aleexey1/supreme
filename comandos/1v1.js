const Discord = require("discord.js");

exports.run = (client, message, args) => {
    let user = message.mentions.users.first();
    if (!user) return message.reply('**Você não mencionou o usuario que você quer batalhar!**').catch(console.error);
    const v = "<@" + message.author.id + ">" 
    const v2 =  " <@" + user.id + ">"
    let gifs = ['https://media.giphy.com/media/OqcMrG8CJcZ9K/giphy.gif'] 
    var falas = [" **ganhou** a batalha! "," **se matou** na batalha!  "," **perdeu** a batalha!", " **a internet dele caiu** na batalha! "]
      var embedB = new Discord.RichEmbed()
      .setTitle("| Batalha")
      .setDescription(" O " + v + " e" +  v2 + " **estão disputando uma batalha!**")
      .setImage(gifs[gifs.length == 1 ? 0 : random == 0 ? random + 1 : random - 1])
      .setColor("RANDOM")
      .addField("Sobre a batalha:", "O " + v +  "\n" + falas[Math.round(Math.random() * falas.length)]  + "\n" +  "O " + v2 +  "\n" + falas[Math.round(Math.random() * falas.length)])
      .setTimestamp()
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      message.channel.send(embedB)
      message.delete().catch(O_o=>{});
}

exports.help = {
    "name": "1v1"
}