const {SlashCommandBuilder} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('docs')
    .setDescription('Returns a link to Reach Docs'),
  async execute(interaction){
    await interaction.reply("Follow this link to the Reach docs: https://docs.reach.sh/");
  },
};