const Discord = require("discord.js")

exports.run = (client, message, args) => {
var razao = args.slice(1).join(" ")
    var membro = message.mentions.members.first();
    if(!message.member.hasPermissions("KICK_MEMBERS")) return message.reply("Você sabe que não tem pemissão e ficaq tentando ?")
    if(!membro) return message.reply(":thinking: !kick\n \nKickar um membro do servidor discord.\n \n:information_desk_person: Como usar:\n!kick <usuário> [texto]\n \n:book: Exemplo\n!kick @Nitroo#4025 [Algum motivo bastante aleatório]\n \n:name_badge: Permissões\n:information_desk_person: Você precisa ter permissão para kickar membros para utilizar este!")
    if(!membro.kickable) return message.reply("Infelizmente você não pode kickar esse membro, talvez o cargo dele é maior que o meu ou eu não tenho permissão!")
    if(razao.length < 1) return message.reply("Coloque um motivo!")
    membro.kick()
    message.channel.send(`Author:\n${message.author}\n \nUsuário:\n${membro.user}\n \nMotivo:\n${razao}`);
    }

exports.help = {
    "name": "kick"
}