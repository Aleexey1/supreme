const Discord = require("discord.js");
const ms = require("ms");

exports.run = (client, message, args) => {
    if (message.channel.type === "dm") return;
    if(!message.guild.member(message.author.id).hasPermissions("BAN_MEMBERS")) return message.reply("Você não tem permissão de usar esse comando")
    {
        if (args.length === 0) {
            return;
        } else if (args.length === 1) {
            message.channel.fetchMessages({
                limit: parseInt(args[0]) + 1
            }).then((messages) => {
                message.channel.bulkDelete(messages);
            });
        } else if (args.length === 2) {
            message.channel.fetchMessages({
                limit: parseInt(args[0]) + 1
            }).then((messages) => {
                let bulkMessages = [];
                messages.forEach((i) => {
                    if (i.author.id === args[1].replace(/@|<|>/g, "")) {
                        bulkMessages.push(i);
                    }
                });
                message.channel.bulkDelete(bulkMessages);
            });
        }
    }
}

exports.help = {
    name: "apagar"
}