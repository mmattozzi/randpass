#!/usr/bin/env node

const Random = require("random-js").Random;
const MersenneTwister19937 = require("random-js").MersenneTwister19937;

const random = new Random(MersenneTwister19937.autoSeed());

var string = random.string(10, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLKMNOPQRSTUVWXYZ0123456789!@#$%^&*_-'); 

console.log(string);
