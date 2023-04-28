const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits, InteractionResponse } = require('discord.js');
const { token } = require('./config.json');
const {loadStdlib} = require('@reach-sh/stdlib');
const stdlib = loadStdlib('ALGO');
stdlib.setWalletFallback(stdlib.walletFallback({
	providerEnv: 'TestNet',// change this to MainNet if checking Reach Thank You tokens
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
		const backend = await import('./reachf/build/index.auction.mjs');
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
			const sbal = stdlib.parseCurrency(2);
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
				interaction.channel.send(`Creator sets parameters of sale:\nNFTid: ${params.nftId}\nMIN BID: ${stdlib.formatCurrency(params.minBid)} ${stdlib.standardUnit}\nLength(in blocks): ${params.lenInBlocks}`);
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
		if(interaction.customId === 'daily-lottery'){
			/**
			 * Not really a lottery yet, more of a raffle. How to make it a real lottery?
			 */
			await interaction.reply(`Starting the lottery program...`);
			const backend = await import('./reachf/build/lottery.main.mjs');
			const accA = await stdlib.newAccountFromMnemonic('profit cherry reflect dinner warfare lawn imitate prevent gun force trust brain trophy foil cheese ankle snow time valid churn captain bird busy able tide');
			const ctcA = accA.contract(backend);
			const MAX = 3;
			const fmt = (x) => stdlib.formatCurrency(x, 4);
			const getBalance = async (who) => fmt(await stdlib.balanceOf(who));

			const token = await stdlib.launchToken(accA, "Reach Token", "reachT", {supply: 1});
			
			let users = [];
			const startBuyers = async () => {
				const runBuyer = async (i) => {
					interaction.channel.send(`Starting buyer number: ${i}`);
					const acc = await stdlib.createAccount();
					const ctc = acc.contract(backend, ctcA.getInfo());
					await stdlib.transfer(accA, acc, stdlib.parseCurrency(2));
					await acc.tokenAccept(token.id);
					const beforeBal = await getBalance(acc);
					users.push([acc, ctc, beforeBal]);

					try{
						const cost = await ctc.unsafeViews.cost();
						const left = await ctc.unsafeViews.ticketsLeft();
						interaction.channel.send(`User sees there are ${left} tickets left at ${stdlib.formatCurrency(cost)} ${stdlib.standardUnit}S each`);
						const n = await ctc.apis.Buyer.getTicket(acc.getAddress());
						interaction.channel.send(`Ticket purchased successfully!`);
					} catch (e) {
						interaction.channel.send(`The getTicket call errored with: ${e}`);
					}
				}
				for(let i = 0; i < MAX; i++){
					await runBuyer(i);
				}
			};// end of startBuyers

			const checkTickets = async () => {
				let flag = false;
				for(const [acc, ctc, beforeBal] of users){
					if(!flag){
						try{
							const addr = stdlib.formatAddress(acc.getAddress());
							const [b, total] = await ctc.apis.Buyer.checkTicket(addr);
							interaction.channel.send(`User: ${addr} sees their number matched is: ${b}`);
							flag = b ? true : false;
							if(flag){
								const afterBal = await getBalance(acc);
								interaction.channel.send(`User: ${addr} just won ${stdlib.formatCurrency(total)} ${stdlib.standardUnit}!`);
							} else {
								interaction.channel.send(`Sorry, your ticket didn't match. Prize pool: ${stdlib.formatCurrency(total)} ${stdlib.standardUnit}`);
							}
						} catch (e) {
							interaction.channel.send(`The checkTicket call errored with: ${e}`);
						}
					}
				}
			};// end of checkTickets

			await ctcA.p.Admin({
				params: {
					numTickets: MAX,
					cost: stdlib.parseCurrency(1),
					reachT: token.id,
					day: 20,// in blocks (find real number)
				},
				launched: (c) => {
					interaction.channel.send(`Ready at contract: ${c}`);
					startBuyers();
				},
				winningNum: () => {
					const num = Math.floor(Math.random() * MAX) + 1;
					interaction.channel.send(`The winning number is: ${num}`);
					return num;
				},
				checkWin: async () => {
					interaction.channel.send(`Admin is ready to start checking tickets`);
					await checkTickets();
				},
			})// end of participant interact interface
			interaction.channel.send(`That concludes today's daily lottery game!\nCome back tomorrow to play again!`);
		};// end of daily-lottery
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
			result = true;
			interaction.member.roles.add(ROLE).catch(console.error);
			await interaction.reply({
				content: `You have ${stdlib.bigNumberToNumber(balance)} Reach Thank You tokens.\nYour wallet has been registered is ${result}\nYou have just been assigned a new role!`,
				ephemeral: false,// change this to true
			});
		} else {
			await interaction.reply({
				content: `Sorry, you have not met the minimum balance for entry.`,
				ephemeral: false,// change this to true
			});
		}
	} catch(e) {
		await interaction.reply({
			content: `The Address you supplied:\n'${wallet}'\n seems to be malformed.\n\nPlease try again.`,
			ephemeral: false,// change this to true
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