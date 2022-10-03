// can you supress embeds?
const {SlashCommandBuilder} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('faucets')
    .setDescription('Returns links to all testnet faucets for networks compatible with Reach'),
  async execute(interaction){
    await interaction.reply("Follow these links to get Testnet tokens on your desired network.\n" +
    "Algorand: https://bank.testnet.algorand.network/ \n" +
    "ETH L1 Ropsten: https://faucet.egorfine.com/ \n" +
    "Telos EVM: https://app.telos.net/testnet/developers \n" +
    "Moonbeam EVM: https://apps.moonbeam.network/moonbase-alpha/faucet/ \n" +
    "Metis EVM: https://faucet.metissafe.tech/ \n" +
    "Findora EVM: Get from Bot in Findora Discord: https://discord.gg/8bdb8KHuaB \n" +
    "BNB Smart Chain EVM: https://testnet.binance.org/faucet-smart \n");
  },
};