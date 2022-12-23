const {
  SlashCommandBuilder, 
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('contracts')
    .setDescription('Choose a contract to run'),
  async execute(interaction){
    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('nft-auction')// use this to uniquely identify all of your buttons
          .setLabel('NFT Auction')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('secondary')
          .setLabel('NFT Raffle')
          .setStyle(ButtonStyle.Primary)
          .setDisabled(true),
        new ButtonBuilder()
          .setCustomId('daily-lottery')
          .setLabel('Daily Lottery')
          .setStyle(ButtonStyle.Primary)
          .setDisabled(true),
        new ButtonBuilder()
          .setCustomId('tertiary')
          .setLabel('Daily BlackJack')
          .setStyle(ButtonStyle.Primary)
          .setDisabled(true),
      )
        
    await interaction.reply({
      content: 'Choose a contract to operate',
      components: [row],
      //ephemeral: true,
  });
  }
}