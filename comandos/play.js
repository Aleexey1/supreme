const ytdl = require('ytdl-core');

exports.run = async (client, message, args, ops) => {
  message.delete()
  let Canalvoz = message.member.voiceChannel;
  if (!message.member.voiceChannel) return message.channel.send("por favor, conecte-se a um canal de voz");
  if (message.guild.me.voiceChannel) return message.channel.send("Desculpe, o bot já está conectado à guilda");
  if (!args[0]) return message.channel.send("desculpe por favor insira uma url seguindo o comando");
  
  let validate = ytdl.validateURL(args[0]);
  
  if (!validate) return message.channel.send("Desculpe, por favor insira um URL de validação seguindo o comando");
  let info = await ytdl.getInfo(args[0]);
  Canalvoz.join()
    .then(connection => {
        const url = ytdl(args.join(' '), { filter : 'audioonly' });
        const dispatcher = connection.playStream(url);
    
    
        
    }).catch(console.error);
  message.channel.send(`Agora ouvindo: ${info.title}`);
  
 }

exports.help = {
    "name": "play"
}
