const {SlashCommandBuilder} = require('discord.js');
const interactionCreate = require('../events/interactionCreate');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('tutorials')
    .setDescription('Returns a link to Reach tutorials'),
  async execute(interaction){
    await interaction.reply("Follow this link for Reach tutorials: https://docs.reach.sh/tut/#tuts \n\n" +
      "The recommended order for completing these is:\n" +
      "Rock, Paper, Scissors\n" +
      "Wisdom For Sale\n" +
      "Répondez S'il Vous Plaît\n\n" +
      "After completing those you can begin on Reach Workshops\n");
  },
};