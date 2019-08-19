const fs = require('fs');
const chalk = require('chalk');

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
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
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notesToKeep.length === notes.length) {
        console.log(chalk.red.bold('No note found!'));
    } else {
        console.log(chalk.green.bold('Note removed'));
    }

    saveNotes(notesToKeep);
};

const listNotes = () => {
    const notes = loadNotes();
    const titles = [];
    notes.filter((note) => {
        titles.push(note.title);
    })

    if (titles.length > 0) {
        console.log(chalk.green('Your notes!'));
        console.log(titles);
    } else {
        console.log(chalk.yellow('No notes found!'));
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => {
        return note.title === title;
    });

    if (!note) {
        console.log(chalk.red('No note found!'));
    } else {
        console.log(chalk.green('Title: ' + note.title));
        console.log(chalk.green('Body: ' + note.body));
    }
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
};

