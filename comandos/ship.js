const Discord = require("discord.js")
const Jimp = require("jimp")
const fs = require("fs")
exports.run = async (client,message,args) => {
var porcentagem = 0
var aleatorio = Math.round(Math.random() * 100)
porcentagem = aleatorio
let user1 = message.mentions.users.first() || message.author
let user2 = message.mentions.users.array()[1]
if(!user2) return message.reply("Mencione 2 usuários para poder shipar eles!")
  let richard_lindu = await Jimp.read(user1.avatarURL)
  let richard_dmais = await Jimp.read(user2.avatarURL)
  await richard_lindu.resize(115, 115)
  await richard_dmais.resize(115, 115)
  let eu_amo_o_richard = await Jimp.read("https://cdn.discordapp.com/attachments/486016051851689994/509883077707694100/ships.png")
  await eu_amo_o_richard.composite(richard_lindu, 1, 1)
  await eu_amo_o_richard.composite(richard_dmais, 229, 1)
  .write(`./img/${user1.id}${user2.id}.png`)
let aido = new Array ()
 aido[1] = "Msg 1"
 aido[2] = "Msg 2"
var i = Math.floor(2*Math.random())
var mensagem = porcentagem <= 5 ? `${porcentagem}% ${aido[i]}` : porcentagem <= 10 ? `${porcentagem}% [██--------] Um dia talvez! 🤔` : porcentagem <= 50 ? `${porcentagem}% [███████-----] Eles são perfeitos! 😍 ` : porcentagem <= 70 ? `${porcentagem}% [████████---] Já deveriam estar casados! 💍 ` : porcentagem <= 100 ? `${porcentagem}% [██████████] Casal perfeito, Ninguem os separa! 💍` : `Casal perfeito, Ninguem os separa! 💍`
message.channel.send({
    embed: {
    "fields": [
      {
        "name": `Sera que temos um novo casal aqui ?`,
        "value": `${user1} + ${user2} = ${mensagem}`
      }],
        "color": 111119,
    image: {
         url: 'attachment://file.jpg'
      }
   },
   files: [{
      attachment: "./img/" + user1.id + user2.id + ".png",
      name: 'file.jpg'
   }]
})
                  setTimeout(function() {      
                    fs.unlink(`./img/${user1.id}${user2.id}.png`)
                  }, 2000)
}

exports.help = {
    "name": "ship"
}