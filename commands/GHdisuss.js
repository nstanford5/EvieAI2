const {SlashCommandBuilder} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ghdiscuss')
    .setDescription('Returns a link to create new GitHub discussion'),
  async execute(interaction){
    await interaction.reply("Follow this link to start a new GitHub Discussion: https://github.com/reach-sh/reach-lang/discussions/new");
  },
};