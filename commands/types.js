const {SlashCommandBuilder} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('types')
    .setDescription('List all available Types in Reach'),
  async execute(interaction){
    await interaction.reply(`These are the available Types in Reach \nNull\nBool - boolean\nUInt - unsigned integer. UInt.max is the largest value allowed\nUInt256 - unsigned integer with 256 bits. UInt256.max is largest value allowed\nInt - signed integer\nFixedPoint - fractional number\nBytes(length) - sequence of bytes of at most length. Bytes of different lengths are not compatible, however shorter bytes may be padded\n\nBytesDyn - sequence of bytes of dynamic length. Bytes of fixed length and bytes of dynamic length are totally incompatible\n\nStringDyn - string of UTF-8 code points of dynamic length. Strings and bytes are totally incompatible, but static bytes can be casted into dynamic strings with StringDyn applied as a function\n\nDigest - denotes a digest\nAddress - denotes an account address\nContract - denotes the identifying information of a contract\nToken - denotes a non-network token\nFun([Domain_0, ..., Domain_N], Range) - denotes a function type, when Domain_i and Range are types\n\nFun(true, Range) - denotes an unconstrained domain function type, when Range is a type. These functions may only appear in participant interact interafaces\nTuple(Field_0, ..., FieldN) -- which denotes a tuple\nObject({key_0: Type_0, ..., key_N: Type_N}) - denotes an object\nStruct([[key_0, Type_0], ..., [keyN, Type_N]]) - denotes a struct\nArray(Type_0, size) - denotes a statically sized array\nData({variant_0: Type_0, ..., variant_N: Type_N}) - denotes a tagged union (or sum type)\nRefine(Type_0, Predicate, ?Message)\n`);
  },
};