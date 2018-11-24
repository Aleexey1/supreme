const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
var razao = args.slice(2).join(" ")
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Não foi possível encontrar o usuário.");
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Infelizmente você não tem permissão!");
  let muterole = message.guild.roles.find(`name`, "Muted");
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let mutetime = args[1];
  if(!mutetime) return message.reply("Você não especificou um tempo!");
  var canal = message.guild.channels.find("name", "😞cantinho-da-vergonha");
  if (!canal) return; canal.send({
embed: { 
description:`:mute: Membro Silenciado.\nUsuário mutado com sucesso!\n \n \n:beginner: Autor:\n<@${message.author.id}>\n \n:bust_in_silhouette:  Usuário:\n<@${tomute.id}>\n \n:clock3: Duração:\n${ms(ms(mutetime))}\n \n:pencil: Motivo:\n ${razao}`, 
color: 0x32242
}
});
  await(tomute.addRole(muterole.id));

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    var canal = message.guild.channels.find("name", "🌌comandos");
    if (!canal) return; canal.send(`Parece que o tempo do <@${tomute.id}>  de mutado acabo, cuidado para não ser mutado de novo.`);
  }, ms(mutetime));
}

module.exports.help = {
  name: "tempmute"
}
