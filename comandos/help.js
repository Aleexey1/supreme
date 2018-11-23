const Discord = require("discord.js");

exports.run = (client, message, args) => {
avatar = message.author.avatarURL
var embedA = new Discord.RichEmbed()


.setDescription('<a:8657_agooglebell:515565702950682636> | Verifique sua **DM**')
.setColor("RANDOM")
.setTimestamp()
message.react("512478100613758976")
message.channel.send(``).then(message=>{
    message.delete(8000)
    })

message.channel.send(embedA).then(message=>{
    message.delete(8000)
    }).then(() => {

var embedB = new Discord.RichEmbed()

.setColor(0x0000)
.setDescription(' ㅤㅤㅤㅤㅤㅤ 🎗 <@514522457919717386> | Comandos 🎗 ㅤㅤㅤㅤㅤㅤ\n \n \n Os emojis abaixo mostara alguns comandos!\n \nOque os emoji faz ?\n \n \n⬅️ : Ele volta pro para o inicio\n \n \n👔 Social: comandos dos cookies\n \n \n📌 ADM: comandos de punições e etc...\n \n \n🎲 Diversão: comandos para se divertir!')
.setTimestamp()
.setThumbnail(message.client.user.avatarURL)

message.author.send(embedB).then((c) => {
    c.react('🎲').then(() => {
    })
    c.react('📌').then(() => {
    })
    c.react('👔').then(() => {
    })
    c.react('👈').then(() => {
    })

    //Caso for usar algum emoji importado troque o -> r.emoji.name por: r.emoji.id
        let diversãofilter = (r, u) => r.emoji.name === '🎲' && u.id == message.author.id;
        let diversão = c.createReactionCollector(diversãofilter, { time: 60000});

        //Aqui tem que ser igual ao let: Se mudar lá em cima por exemplo: Configuração, mude aqui também
        diversão.on('collect', async _ => {
            var a = new Discord.RichEmbed()
            .setTitle('🎲 | Diversão')
            .setDescription('Lenbrando que a prefix é ( s! ).\n\n1v1\ncry\nship\nmcskin\navatar\nconta')
            .setTimestamp()
            .setColor("RANDOM")
            .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
            c.edit(a)
        })
        let Administraçãofilter = (r, u) => r.emoji.name === '📌' && u.id == message.author.id;
        let Administração = c.createReactionCollector(Administraçãofilter, { time: 60000});

        //Aqui tem que ser igual ao let: Se mudar lá em cima por exemplo: Configuração, mude aqui também
        Administração.on('collect', async _ => {
            var a = new Discord.RichEmbed()
            .setTitle('📌 | Administração')
            .setDescription('Lenbrando que a prefix é ( s! ).\n\nban\nkick\nchatoff\nchaton\napagar ')
            .setTimestamp()
            .setColor("RANDOM")
            .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
            c.edit(a)

        })
        let  Socialfilter = (r, u) => r.emoji.name === '👔' && u.id == message.author.id;
        let  Social = c.createReactionCollector( Socialfilter, { time: 60000});

        //Aqui tem que ser igual ao let: Se mudar lá em cima por exemplo: Configuração, mude aqui também
        Social.on('collect', async _ => {
            var a = new Discord.RichEmbed()
            .setTitle('👔 |  Social')
            .setDescription('Lenbrando que a prefix é ( s! ).\n\nping\nserverinfo\ncry\n1v1\nconvite\ninvite\nmcskin\nship\navatar\nconta')
            .setTimestamp()
            .setColor("RANDOM")
            .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
            c.edit(a)

        })
        let  Iniciofilter = (r, u) => r.emoji.name === '👈' && u.id == message.author.id;
        let  Inicio = c.createReactionCollector( Iniciofilter, { time: 60000});

        //Aqui tem que ser igual ao let: Se mudar lá em cima por exemplo: Configuração, mude aqui também
        Inicio.on('collect', async _ => {
            var a = new Discord.RichEmbed()
            .setColor(0x0010)
            .setDescription(' ㅤㅤㅤㅤㅤㅤ 🎗 <@514522457919717386> | Comandos 🎗 ㅤㅤㅤㅤㅤㅤ\n \n \n Os emojis abaixo mostara alguns comandos!\n \nOque os emoji faz ?\n \n \n👈 : Ele volta pro para o inicio\n \n \n👔 Social: comandos dos cookies\n \n \n📌 ADM: comandos de punições e etc...\n \n \n🎲 Diversão: comandos para se divertir!')
            .setTimestamp()
            .setThumbnail(message.client.user.avatarURL)
            c.edit(a)

        })
    })
})
}




module.exports.help = {
    name: "help"
    }