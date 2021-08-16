#!/usr/bin/env node
const program = require('commander');
const clipboardy = require('clipboardy');
const createPassword = require('./utils/createPassword');
const savePassword = require('./utils/savePassword');
const chalk = require('chalk');

const log = console.log;

program.version('1.0.0').description('Simple Password Generator');

program
	.option('-l, --length <number>', 'length of password', '8')
	.option('-t, --title <name>', 'title for what the password is for')
	.option('-s, --save', 'save password to passwords.txt')
	.option('-nn, --no-numbers', 'remove numbers')
	.option('--ns, --no-symbols', 'remove symbols')
	.parse();

const { length, title, save, numbers, symbols } = program.opts();

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols);

// Save to file
if (save) {
	savePassword(generatedPassword, title);
}

// Copy to the clipboard
clipboardy.writeSync(generatedPassword);

// Output generated password
log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword));
log(chalk.yellow('Password copied to clipboard'));
