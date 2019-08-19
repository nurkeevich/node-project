const yargs = require('yargs');
const notes = require('./notes');

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
    handler(args) {
        notes.addNote(args.title, args.body)
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
    handler(args) { notes.removeNote(args.title) }
});

yargs.command({
    command: 'list',
    describe: 'List of notes!',
    handler: function () {
        notes.listNotes();
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Reading a note!',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (args) {
        notes.readNote(args.title);
    }
})

yargs.argv;