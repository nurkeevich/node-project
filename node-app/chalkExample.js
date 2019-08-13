const chalk = require('chalk');

console.log(chalk.blue('\n+++++++++++++++++++ STARTING HERE +++++++++++++++++++\n'))

const command = process.argv[2];

console.log(process.argv);

if (command === 'add') {
    console.log('adding note!')
} else if (command === 'remove') {
    console.log('removing notes!')
}


console.log(chalk.blue('\n+++++++++++++++++++++++++++++++++++++++++++++++++++++\n'))
