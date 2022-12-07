const {ModalBuilder, SlashCommandBuilder, ActionRowBuilder, TextInputBuilder} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('tokencheck')
    .setDescription('Register your token'),
  async execute(interaction, client) {
    const modal = new ModalBuilder()
      .setCustomId('register')
      .setTitle('myModal');
    const addrInput = new TextInputBuilder()
      .setCustomId('address')
      .setLabel('Enter your Algorand wallet Address')
      .setStyle("Short")
      .setMaxLength(24)
      .setMinLength(24)
      .setPlaceholder('Enter wallet address here')
      .setRequired(true);
    const firstActionRow = new ActionRowBuilder().addComponents(addrInput);
    modal.addComponents(firstActionRow);
    await interaction.showModal(modal);
  }
}