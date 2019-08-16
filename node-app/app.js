const yargs = require('yargs');
const notes = require('./notes');

yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'note title',
            type: 'string',
            demandOption: true
        },
        body: {
            describe: 'note body',
            type: 'string',
            demandOption: true
        }
    },
    handler: function (args) {
        notes.addNote(args.title, args.body);
    }
});

yargs.argv;