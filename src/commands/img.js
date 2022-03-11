const { MessageEmbed } = require('discord.js');
const pedroId = process.env.PEDRO_ID;

module.exports = {
  name: 'h',
  description: 'pedro eu te odeio',
  execute(message) {
    const imgUrl = 'https://cdn.discordapp.com/attachments/942822375286800464/951684420857913364/willsmith.jpg';
    const pedro = `<@${pedroId}>`;
    const embed = new MessageEmbed().setImage(imgUrl)
    
    message.channel.send({ embeds: [embed] });
    message.channel.send(pedro);

  }
};