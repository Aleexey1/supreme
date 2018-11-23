const Discord = require("discord.js");
const moment = require("moment");
moment.locale("pt-BR");

exports.run = (client, message, args) => {
    let online = message.guild.members.filter(a => a.presence.status == "online").size;
    let ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
    let ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
    let offline = message.guild.members.filter(a => a.presence.status == "offline").size;
    let bot = message.guild.members.filter(a => a.user.bot).size;
    let totalmembros = message.guild.memberCount;
    let canaistexto = message.guild.channels.filter(a => a.type === "text").size;
    let canaisvoz = message.guild.channels.filter(a => a.type === "voice").size;
    let cargos = message.guild.roles.map(a => a).join(", ")
        const embed = new Discord.RichEmbed()
        .setTitle(`**Informações do servidor**`)
        .setColor("#FF0000")
        .addField('Dono', `<@${message.guild.owner.id}>`)
        .addField('Criado em:', moment(message.guild.createdAt).format('LLLL'))
        .addField("ID", message.guild.id)
        .addField(`Membros [${totalmembros}]`, `Online: ${online}\nAusente: ${ausente}\n Ocupado: ${ocupado}\n Offline: ${offline}\n Bots: ${bot}`)
        .addField(`Canais [${canaistexto+canaisvoz}]`, `Texto: ${canaistexto}\n Voz: ${canaisvoz}`)
        .addField(`Cargos [${message.guild.roles.size}]`, cargos)
        .setThumbnail(message.guild.iconURL)
        .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
        message.channel.send(embed)
}

exports.help = {
    "name": "serverinfo"
}