const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const {loadStdlib} = require('@reach-sh/stdlib');
const stdlib = loadStdlib('ALGO');
stdlib.setWalletFallback(stdlib.walletFallback({
	providerEnv: 'TestNet',
}));

const client = new Client({ intents: [GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent] });
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles){
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);

  // set a new item in the Collection
  // With the key as the command name and the value as the exported module 
  client.commands.set(command.data.name, command);
}

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}
client.on('interactionCreate', async interaction => {
	if(!interaction.isModalSubmit()) return;
	const role = '1052276254407147580';
	const reachThank = '545293434';
	const MIN = 1;
	let result = false;
	const wallet = interaction.fields.getTextInputValue('address');
	try {
		stdlib.protect(stdlib.T_Address, wallet);
		const balance = await stdlib.balanceOf(wallet, reachThank);
		if(balance >= MIN){
			interaction.member.roles.add(role).catch(console.error);
			result = true;
		}
		await interaction.reply({
			content: `You have ${stdlib.bigNumberToNumber(balance)} Reach Thank You tokens.\nYour wallet has been registered is ${result}\nYou have just been assigned a new role!`,
			ephemeral: true,
		});
	} catch(e) {
		await interaction.reply({
			content: `The Address you supplied:\n'${wallet}'\n seems to be malformed.\n\nPlease try again.`,
			ephemeral: true,
		});
	}
})

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) return;
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.login(token);