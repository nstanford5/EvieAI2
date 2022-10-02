module.exports = {
  name: 'messageCreate',
  async execute(message){
    if(message.author.bot) return
    if(message.content === "map") {await message.reply('Info about maps')}
    else {await message.reply("Sorry, I haven't learned about that one yet")}
    //await message.reply('Information about maps')
    // if(message.content === 'map' || message.content === 'maps'){
    //   await message.reply('Information about Maps')
    // }else{
    //   await message.reply("Sorry, I haven't learned that one yet")
    // }
    // if(message.content === 'map' || message.content === 'maps'){
    //   await message.reply("Maps are key:value pairs.\n" +
    //   "On Algorand all maps must have an Address type as their key. This restriction will soon be lifted.\n" +
    //   "Maps are the only variable sized container in Reach.\n" +
    //   "They must be created in a consensus step.\n" +
    //   "The syntax to create a Map is `const pMap = new Map(Address, UInt)`"+
    //   "If the first argument is left blank it will default to Address type")
    // }
    //else {
    //   await message.reply("Sorry, I haven't learned that one yet.");
    // }
  }
};
