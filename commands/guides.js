const {SlashCommandBuilder} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('guides')
    .setDescription('Returns a link to Reach Guides'),
  async execute(interaction){
    await interaction.reply("See here for Reach Guides: https://docs.reach.sh/guide/ \n\n" +
      "This is highly recommended reading material.");
  },
};