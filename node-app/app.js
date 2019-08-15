const yargs = require("yargs");
const notes = require("./notes");

// customize yargs version
yargs.version("1.1.0");

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing note!");
  }
});

// create read command

yargs.command({
  command: "read",
  describe: "read note",
  handler: function () {
    console.log("Reading a note!");
  }
});

// create list command
yargs.command({
  command: "list",
  describe: "list note",
  handler: function () {
    console.log("Listing a note!");
  }
});

// add, remove, read, list
yargs.parse();
