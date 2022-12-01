const { ModalBuilder, SlashCommandBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle, ModalSubmitInteraction } = require('discord.js');

const { loadStdlib } = require('@reach-sh/stdlib');
const stdlib = loadStdlib('ALGO');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('token')
    .setDescription('Register your token for access'),
  async execute(interaction){
    //const target = interaction.options.getUser('target');
    const modal = new ModalBuilder()
			.setCustomId('register')
			.setTitle('Register');
		//await interaction.reply('Pong!');
		
		const addrInput = new TextInputBuilder()
			.setCustomId('addrInput')
			.setLabel("Enter your Algorand wallet address")
			.setStyle(TextInputStyle.Short)
      .setMaxLength(24)
      .setMinLength(24)
      .setPlaceholder('public key here')
      .setRequired(true);

		const firstActionRow = new ActionRowBuilder().addComponents(addrInput);
		modal.addComponents(firstActionRow);
    await interaction.showModal(modal)
    console.log(modal);
    // interaction.awaitModalSubmit({modal, time: 15_000})
    //   .then(interaction => console.log(`${interaction.customId} was submitted`))
    //   .catch(console.error);
		// const filter = (interaction) => interaction.customId === 'myModal';
    // interaction.awaitModalSubmit({filter, time: 15_000})
    //   .then(interaction => console.log(`${interaction.customId} was submitted`))
    //   .catch(console.error);
  },
};