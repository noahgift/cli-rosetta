#!/usr/bin/env node
"use strict";

/*

Hello World Commandline Tool

node index.js --phrase "hello world" --count 10 

hello world hello world hello world

*/

const program = require('commander');
program
  .version('0.0.1')
  .option('-p, --phrase [value]', 'phrase')
  .option('-c, --count <n>', 'Number of Times To Repeat Phrase', parseInt)
  .parse(process.argv);

/**
 * Multiplies string with additional space.
 * @param {string} phrase The phrase.
 * @param {number} count The number of times to repeat
 * @returns {string} The multiplied string
 */
function phraseGenerator (phrase, count) {

    return phrase.concat(" ").repeat(count);

}

// Check to see both options are used
if (typeof program.phrase === 'undefined' ||
    typeof program.count === 'undefined') {

    console.error('ERROR! --phrase and --count options required');
    program.help();
    process.exit(1);

}

// Print Phrase To Standard Out
console.log(phraseGenerator(
                program.phrase,
                program.count));