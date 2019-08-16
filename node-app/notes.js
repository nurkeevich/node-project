const fs = require('fs');
const chalk = require('chalk');

const writeNote = function (title, body) {
    const notes = loadNotes();
    const duplicate = notes.filter(function (note) {
        return note.title === title;
    });

    if (duplicate.length === 0) {
        notes.push({
            title,
            body
        });
        saveNotes(notes);
        console.log(chalk.green.bold('Note has been added!'));
    } else {
        console.log(chalk.red.bold('Title taken!'));
    }
};

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

const removeNote = function (title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title;
    });

    if (notesToKeep.length === notes.length) {
        console.log(chalk.red.bold('No note found!'));
    } else {
        console.log(chalk.green.bold('Note removed'));
    }

    saveNotes(notesToKeep);
};

module.exports = {
    writeNote,
    removeNote
};

