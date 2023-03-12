#!/usr/bin/env node

const commandLineArgs = require('command-line-args');
const getUsage = require('command-line-usage');
const Random = require("random-js").Random;
const MersenneTwister19937 = require("random-js").MersenneTwister19937;

const optionDefinitions = [
 { name: 'length', alias: 'l', type: Number, description: "Length of password" },
 { name: 'alphanumeric-only', alias: 'a', type: Boolean, description: "Only use alphanumeric characters" },
 { name: 'help', alias: 'h', type: Boolean, description: 'Display this usage guide.'}
];

const usage = getUsage([
  {
    header: 'randpass',
    content: 'Generates a random, password-like string. This uses the MersenneTwister19937 algorithm, re-seeded each time the program runs.'
  },
  {
    header: 'Options',
    optionList: optionDefinitions
  },
  {
    header: 'Examples',
    content: [
        { colA: "Random string", colB: "randpass" },
        { colA: "Random string of length 16", colB: "randpass -l 16" },
        { colA: "Random string of alphanumerics", colB: "randpass -a" }
    ]
  }
]);

const options = commandLineArgs(optionDefinitions);

if (options.help) {
  console.log(usage);
  process.exit(1);
}

var length = options.length || 10;
var charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLKMNOPQRSTUVWXYZ0123456789';
if (! options['alphanumeric-only']) {
  charset += '!@#$%^&*_-';
}

const random = new Random(MersenneTwister19937.autoSeed());
var string = random.string(length, charset); 

console.log(string);
