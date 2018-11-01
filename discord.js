const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});





client.on ("guildMemberAdd", member => {

   var role = member.guild.roles.find ("name", "• OmEGa » Member");
   member.addRole (role);

})

client.on ("guildMemberRemove", member => {

})
