const notes = require('./notes.js');
const yargs = require('yargs');
const chalk = require('chalk');

// console.log(process.argv);

yargs.version('1.1.0');

//Create Add Command

yargs.command({
    command: 'add',
    describe: 'Add a new Note',
    builder: {
        title : {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title,argv.body);
    }
})


// Create Remove Command 

yargs.command({
    command: 'remove',
    describe: 'Remove a Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

// console.log(yargs.argv);


// Create List Command 

yargs.command({
    command: 'list',
    describe: 'Set a List',
    builder: {
        title: {
            describe: 'List Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler() {
       notes.listNotes();
    }   
})

//Create Read Command 

yargs.command({
    command: 'read',
    describe: 'Set a read',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
       notes.readNote(argv.title);
    }   
})

    yargs.parse();

//  console.log(yargs.argv);