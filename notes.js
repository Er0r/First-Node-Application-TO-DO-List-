const fs = require('fs');
const chalk = require('chalk');


const getNotes = () =>  'Your  Notes';


const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title);
    const duplicateNote = notes.find((note) => note.title === title);
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('New Note Added'));
    } else {
        console.log(chalk.red.inverse('Note Title taken !'));
    }

    
    // fs.writeFileSync('notes.json',JSON.stringify(notes));

    // console.log(notes);
    // saveNotes(notes);
}


const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your Notes'));
    notes.forEach((note) => {
        console.log(note.title);
    })
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title)

    if(note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('Note Not Found!'));
    }
}

const saveNotes =(notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}


const loadNotes = ()  => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON  = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e) {
        return [];
    } 
}


const removeNote = (title) => {
   const notes = loadNotes();
    const notesToKeep = notes.filter((note) =>{
        return note.title !== title;
    })

    saveNotes(notesToKeep);

    if(notesToKeep.length === notes.length) {
        console.log(chalk.red.inverse('NO NOTES FOUND'));
    } else {
        console.log(chalk.green.inverse('Note Deleted Successfully'));
    }
}



module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}