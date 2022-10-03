/**
 * This function will check the users comment for a valid input -- if it finds something
 * that EvieAI knows about, it will answer the question for you. It has been taught most
 * of the common questions that we get in Discord and the goal is to teach it everything.
 * 
 * 
 * Features implemented:
 * Map, Set, Types, Feedback, docs, faucets, parallelReduce, API
 *
 * To be implemented:
 * REACH_ISOLATED_NETWORK, enum
 * 
 * Author: Nick Stanford
 * Date: 2 October 2022
 */

module.exports = {
  name: 'messageCreate',
  async execute(message){
    if(message.author.bot) return;
    if(message.content.includes("map") && (!message.content.includes("value") && (!message.content.includes("iterate")))) {
      await message.reply("A Map is a set of key:value pairs.\n" +
        "On Algorand all maps must have an Address type as their key. This restriction will soon be lifted.\n" +
        "Maps are the only variable sized container in Reach.\n" +
        "They must be created in a consensus step.\n" +
        "The syntax to create a Map is `const pMap = new Map(Address, UInt)` "+
        "If the first argument is left blank it will default to Address type\n" +
        "To add to/update a Map use `pMap[key] = num` if setting in an API call this is typically done with `pMap[this] = num`\n" + 
        "To delete from a Map use `delete pMap[key]`\n" + 
        "You cannot iterate over a Map outside of an invariant\n")
      return;
    } else if (message.content.includes('set')){
      await message.reply("Set is an abstraction of a Map.\n" +
        "It is only useful for tracking addresses.\n" +
        "The syntax to create a Set is `const pSet = new Set()` \n"+
        "To add to a Set use `pSet.insert(Address)` \n" +
        "If storing users from an API call use `pSet.insert(this)` \n")
      return;
    } else if (message.content.includes('type')){
      await message.reply("These are the available Types in Reach \nNull\nBool - boolean\nUInt - unsigned integer." +
        "UInt.max is the largest value allowed\nUInt256 - unsigned integer with 256 bits. UInt256.max is largest value " + 
        "allowed\nInt - signed integer\nFixedPoint - fractional number\nBytes(length) - sequence of bytes of at most length." + 
        "Bytes of different lengths are not compatible, however shorter bytes may be padded\n\nBytesDyn - sequence of bytes " + 
        "of dynamic length. Bytes of fixed length and bytes of dynamic length are totally incompatible\n\nStringDyn - string of " + 
        "UTF-8 code points of dynamic length. Strings and bytes are totally incompatible, but static bytes can be casted into " + 
        "dynamic strings with StringDyn applied as a function\n\nDigest - denotes a digest\nAddress - denotes an account address\n" + 
        "Contract - denotes the identifying information of a contract\nToken - denotes a non-network token\n" + 
        "Fun([Domain_0, ..., Domain_N], Range) - denotes a function type, when Domain_i and Range are types\n\n" +
        "Fun(true, Range) - denotes an unconstrained domain function type, when Range is a type. " + 
        "These functions may only appear in participant interact interafaces\n" + 
        "Tuple(Field_0, ..., FieldN) -- which denotes a tuple\n" + 
        "Object({key_0: Type_0, ..., key_N: Type_N}) - denotes an object\nStruct([[key_0, Type_0], ..., [keyN, Type_N]]) - denotes a struct\n" + 
        "Array(Type_0, size) - denotes a statically sized array\n" + 
        "Data({variant_0: Type_0, ..., variant_N: Type_N}) - denotes a tagged union (or sum type)\nRefine(Type_0, Predicate, ?Message)\n" + 
        "Link to Documentation on Types: https://docs.reach.sh/rsh/compute/#ref-programs-types \n" +
        "Link to Documentation on Type differences in frontend: https://docs.reach.sh/frontend/#ref-frontends-js-types");
      return;
      } else if (message.content.includes("map") && message.content.includes("value")){
        await message.reply("Map values are a special type in Reach. Because a Map is variably sized, a value may exist\n" + 
        "or it may not -- this means that Map values are Maybe types. You need to provide 2 cases, one if the value is there, another if the value is not.\n" +
        "the syntax to read a maybe value is typically two pronged:\n 1. Create a function to consume the maybe value.\n 2. Call that function and pass in your Maybe value\n" + 
        "`const myFromMaybe = (m) => fromMaybe(m, (() => 0), ((x) => x))`\n" + 
        "`const val = myFromMaybe(pMap[key])`\n" +
        " if the Maybe value does not exist, it will be assigned a zero -- if it does exist, let it be its current value\n" +
        "Link to documentation on Maybe: https://docs.reach.sh/rsh/compute/#maybe" +
        "If you are instead looking for information about Set, type `set`");
      return;
    } else if (message.content.includes('iterate') && (message.content.includes('map') || message.content.includes('maps') || message.content.includes('Map')) || message.content.includes('Maps')){
      await message.reply("You cannot iterate over a Map outside of an `invariant`" +
        "The reason for this is that Maps are variably sized -- they could theoretically hold one entry "+
        "for every account on the network. If we allowed you iterate through this variably sized container " +
        "you could exceed network computation limits.\n" +
        "The fix here is to do what you need incrementally. If you need to iterate through the Map to pay everyone, "+
        "you would instead create a function where each user could claim payouts individually");
      return;
    } else if (message.content.includes('help') && message.content.includes('error')){
      await message.reply("If you type one of the keywords you are having trouble with, I can share more information");
      return;
    } else if (message.content.includes('ApplicationCreate txn')){
      await message.reply("Did you fund this account with testnet tokens?\n" +
        "Get Algorand Test tokens here: https://bank.testnet.algorand.network/" +
        "If you use the `/faucets` command right here I will return a link to retrieve TestNet tokens for all networks compatible with Reach");
      return;
    } else if (message.content.includes('bytes') || message.content.includes('Bytes')){
      await message.reply("`Bytes(length)` is the type in Reach for strings, it takes one argument for the length. You must fix the length and when matching bytes constants, their lengths must match\n" +
        "You can pad Bytes to desired length: https://docs.reach.sh/rsh/compute/#padding \n" +
        "You can use `BytesDyn` to denote a dynamically sized collection of bytes, but this is imcompatible with static Bytes types \n" +
        "Link to Docs on Bytes type: https://docs.reach.sh/rsh/compute/#p_62");
      return;
    // feeback collection
    } else if (message.content.includes('could be better') || message.content.includes('feedback')) {
      await message.reply("Thanks for the feedback. Please submit in detail here: [link to feedback form]\n" + 
        "We value your feedback and it helps the Reach language grow.\n" +
        "If your feedback is specifically about the documentation. Please submit in detail here: [link to doc feedback form]\n");
      return;
    } else if (message.content.includes('deploy()')){
      await message.reply("`deploy()` has been deprecated in favor of `init()`\n" +
        "Please use `init()` instead");
      return;
    } else if (message.content.includes('ParticipantClass')){
      await message.reply("`ParticipantClass` has been deprecated in favor of `API`");
      return;
    } else if (message.content.includes('faucets') || message.content.includes('faucet') || message.content.includes('where') && (message.content.includes('test tokens') || message.content.includes('tokens'))) {
      await message.reply("Please use the command `/faucets` to return links for all testnet faucets compatible with Reach");
      return;
    } else if (message.content.includes('parallel reduce') || message.content.includes('parallelReduce') || message.content.includes('parallel reduce') || message.content.includes('Parallel Reduce') || message.content.includes('ParallelReduce')){
      await message.reply("Parallel Reduce is an abbreviation of a while loop. Use it to allow any number of participants to update some set of values uniquely.\n" + 
        "`const [x, y] = parallelReduce([0, 1])` starts a parallel reduce with variables x, y set to 0, 1 respectively\n" +
        "`.invariant(x < y)` is like an invariant for a while loop. Must be true before, during and after\n" +
        "`.while(x < 4)` is a typical loop condition. Runs until the condition breaks\n" +
        "`.api` || `.api_` is the definition of an API member function\n" +
        "`.case` is like the corresponding case of a `fork` statement\n" +
        "`.timeout` is a like a standard timeout from the Rock, Paper, Scissors Tutorial")
      return;
    } else if (message.content.includes("views")) {
      await message.reply("Views are read-only functions in Reach. They allow you to set some view as a window into the consensus state\n" +
        "Views save space in Reach programs, where blockchain storage is expensive.\n" +
        "Views can be called by other contracts or off-chain\n" +
        "Link to Docs on Views: https://docs.reach.sh/rsh/appinit/#rsh_View \n");
      return;
    } else if ((message.content.includes("api") || message.content.includes("API")) && message.content.includes("deploy")){
      await message.reply("API members cannot deploy an application. You must have at least 1 Participant for this functionality.\n" +
        "Typically, this Participant is the Admin and provides some information to the Smart Contract before allowing API members to interact with it.");
      return;
    } else if (message.content.includes('beard') && message.content.includes('mustache')) {
      await message.reply("Evie can't get in the middle of this one. Both Chris' beard and Nick's mustache are legendary.");
      return;
    } else if ((message.content.includes('Bytes') || message.content.includes('bytes')) && (message.content.includes('max') || message.content.includes('maximum'))){
      await message.reply("The maximum allowed for `Bytes(length) = Bytes(256)`");
      return;
    } else if(message.content.includes('nftMami') || message.content.includes('NFTmami') || message.content.includes('NFTMami') || message.content.includes('NFTMAMI')) {
      await message.reply("Yes, I know the infamous NFTMami!\n" +
        "Twitter: @NFTMami\n" +
        "Discord: Thuglif3#8365\n");
    } else if(message.content.includes('install Reach') || message.content.includes('install reach') || message.content.includes('installing Reach')) {
      await message.reply("Here is some information about installing Reach\n" +
        "Docs: https://docs.reach.sh/quickstart/ \n" +
        "YouTube MacOS: https://youtu.be/jF5r_V1aN0E \n" +
        "YouTube WindowsOS: https://youtu.be/mmu6ExmsQVE \n\n" +
        "Make sure to follow instructions carefully! There are a few key points that can cause trouble (i.e. 'Run as Administrator')");
      return;
    } else if(message.content.includes("jpmiller") || message.content.includes('jp miller')){
        await message.reply("Oh, yea -- I know JP!\n" +
          "Twitter: @therealjpmiller\n" +
          "Discord: JP Miller#8084\n");
      return;
    } else if ((message.content.includes("API") || message.content.includes('api')) && message.content.includes('member') || message.content.includes('interaction')){
      await message.reply("APIs are functions that can be called by other contracts as well as off chain.\n" +
        "They allow us to repeat the functionality of a specific user an unknown amount of times.\n" +
        "API members cannot deploy an application.\n These functions are accessible in the frontend via `ctc.apis.apiName.function` object.\n");
      return;
    } else if (message.content.includes('Enum') || message.content.includes('enum') || message.content.includes('enumeration') || message.content.includes('makeEnum')) {
      await message.reply("Enumerations are not exclusive to Reach. An enumeration allows you to specify a custom data type and its values.\n" +
        "For example: `const [isHand, ROCK, PAPER, SCISSORS] = makeEnum(3)` creates a new data type called `isHand` with the allowed values of `ROCK, PAPER, SCISSORS`\n" +
        "More information about enumerations in Reach: https://docs.reach.sh/rsh/compute/#makeenum \n" +
        "More information about enumerations in general: https://www.ibm.com/docs/en/zos/2.3.0?topic=types-enumerations \n");
      return;
    } else if (message.content.includes('docker') || message.content.includes('Docker')) {
      await message.reply("Docker creates containerized environments for development. It allows us to create local blockchains for testing in devnet environments.\n" +
        "Docker docs: https://docs.docker.com/ \n");
      return;
    } else if (message.content.includes('how') && (message.content.includes('txn costs') || message.content.includes('debug'))) {
      await message.reply("You can use the `REACH_DEBUG` feature to output useful information about your application.\n" +
        "To turn on the debug once use `REACH_DEBUG=Y ./reach compile`" +
        "Or you can `export REACH_DEBUG=Y` to export it as an environment variable\n");
      return;
    } else {
      // could add a return here to not respond to messages without triggers
      //await message.reply("Sorry, I haven't learned about that one yet. But I've logged it for Nick to teach me -- I want to learn everything about Reach!");
      return;
    }   
  }
};
