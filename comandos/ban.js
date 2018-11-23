const Discord = require ("discord.js");

exports.run = (client, message, args) => {
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`:x: | **${message.author}** sem permissão!`);
    if(!args[0]) return message.reply(":thinking: !ban\n \nBanir um membro do servidor discord.\n \n:information_desk_person: Como usar:\n!ban <usuário> [texto]\n \n:book: Exemplo\n!ban @Nitroo#4025 [Algum motivo bastante aleatório]\n \n:name_badge: Permissões\n:information_desk_person: Você precisa ter permissão para Banir membros para utilizar este!");
    let bUser = message.mentions.users.first() || message.guild.users.get(args[0]);
    if(!bUser) return message.reply(`não foi possível encontrar o usuário ${bUser}.`);
    let reason = args.join(" ").slice(22)
    if(!reason) {
        reason = "A razão não foi informada."
    }
    if(!message.guild.member(bUser.id).bannable) return message.reply("você não pode banir este usuário!");

    message.channel.send(`Você tem certeza de banir o usuário ${bUser} pelo motivo ${reason}? Se sim, clique no emoji ✅ para bani-lo.`).then(msg => {
        msg.react('✅')
        const sure = (reaction, user) => reaction.emoji.name === `✅` && user.id === message.author.id;
    const r1 = msg.createReactionCollector(sure, {time: 60000 });

    r1.on('collect', r => {
        r.remove(message.author.id);
        message.guild.member(bUser).ban(reason);
        message.channel.send(`**Usuário punido com sucesso!**\n \nAuthor:\n${message.author}\n \nUsuário:\n${bUser}\n \nMotivo:\n${reason}`);
    });
  });
}

exports.help = {
    "name": "ban"
}