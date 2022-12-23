const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits, InteractionResponse } = require('discord.js');
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
	if(!interaction.isButton()) return;
	// chain conditionals here for different contracts
	if(interaction.customId === 'nft-auction'){
		/**
		* This runs the NFT Auction program.
		*/
		await interaction.reply('Starting NFT Auction...');//add exception handling here
		const backend = await import('./reachf/build/index.main.mjs');
		const accA = await stdlib.newAccountFromMnemonic('profit cherry reflect dinner warfare lawn imitate prevent gun force trust brain trophy foil cheese ankle snow time valid churn captain bird busy able tide');
		const ctcA = accA.contract(backend);
		let number = 0;
		const theNFT = await stdlib.launchToken(accA, "bumple", "NFT", { supply: 1});
		const nftId = theNFT.id;
		const minBid = stdlib.parseCurrency(1);
		const lenInBlocks = 10;
		const params = {nftId, minBid, lenInBlocks};
		const bidders = [];
		//const wallet = interaction.fields.getTextInputValue('address');
		const startBidders = async () => {
			let bid = minBid;
			const sbal = stdlib.parseCurrency(5);
			const runBidder = async(who) => {
				const inc = stdlib.parseCurrency(Math.random() * 3);
				bid = bid.add(inc);
				const acc = await stdlib.createAccount();
				await stdlib.transfer(accA, acc, sbal);
				await acc.tokenAccept(nftId);
				bidders.push([who, acc]);
				const ctc = acc.contract(backend, ctcA.getInfo());
				const getBal = async () => stdlib.formatCurrency(await stdlib.balanceOf(acc));
				interaction.channel.send(`${who} decides to bid ${stdlib.formatCurrency(bid)}.`);
				interaction.channel.send(`${who} balance before is ${await getBal()}`);
				try{
					const [lastBidder, lastBid] = await ctc.apis.Bidder.bid(bid);
					interaction.channel.send(`${who} out bid ${lastBidder} who bid ${stdlib.formatCurrency(lastBid)}.`);
				} catch (e) {
					interaction.channel.send(`${who} failed to bid, because the auction is over`);
				}
				interaction.channel.send(`${who} balance after is ${await getBal()}`);
			};
			await runBidder('Alice');
			await runBidder('Bob');
			await runBidder('Claire');
		}
		await ctcA.p.Creator({
			getSale: () => {
				interaction.channel.send(`Creator sets parameters of sale: `, params);
				return params;
			},
			auctionReady: () => {
				startBidders();
			},
			seeBid: (who, amt) => {
				interaction.channel.send(`Creator saw that ${stdlib.formatAddress(who)} bid ${stdlib.formatCurrency(amt)}.`);
			},
			showOutcome: (winner, amt) => {
				interaction.channel.send(`Creator saw that ${stdlib.formatAddress(winner)} won with ${stdlib.formatCurrency(amt)}`);
			},
		});
		interaction.channel.send(`Auction complete!`);
		};
});
/**
 * This checks, given a users wallet address, if they have
 * at least 1 Reach Thank You Token. If yes, gives them a role
 * 'reach-thanks'
 */
client.on('interactionCreate', async interaction => {
	if(!interaction.isModalSubmit()) return;
	const ROLE = '1052276254407147580';
	const REACH_THANKU = '545293434';
	const MIN = 1;
	let result = false;
	const wallet = interaction.fields.getTextInputValue('address');

	try {
		stdlib.protect(stdlib.T_Address, wallet);
		const balance = await stdlib.balanceOf(wallet, REACH_THANKU);
		if(balance >= MIN){
			interaction.member.roles.add(ROLE).catch(console.error);
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
});



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