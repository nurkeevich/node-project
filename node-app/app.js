const yargs = require('yargs');
const notes = require('./notes');

// Goal: Refactor all functions
// 1. If function is a method, use ES6 method function definition syntax
// 2. Otherwise, use most concise arrow function possible
// 3. Test your work!

yargs.command({
    command: 'add',
    describe: 'Add a note.',
    builder: {
        title: {
            describe: 'Note title',
            type: 'string',
            demandOption: true
        },
        body: {
            describe: 'Note body',
            type: 'string',
            demandOption: true
        },
    },
    handler: function (args) {
        notes.writeNote(args.title, args.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Removing notes',
    builder: {
        title: {
            describe: 'Note title',
            type: 'string',
            demandOption: true
        }
    },
    handler: function (args) {
        notes.removeNote(args.title);
    }
})

yargs.argv;