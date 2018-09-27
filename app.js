console.log("Starting app.");

const fs=require('fs');
const _=require('lodash');
const notes=require('./notes.js');
const yargs=require('yargs');

const titleOne={
    describe:'Title of Note',
    demand:true,
    alias:'t'
     };
       
const bodyOne={
    desribe:'body of Note',
    demand:true,
    alias:'b'
    };
const argv=yargs
          .command('add','Add a newnote',{title:titleOne,body:bodyOne})
          .command('list','List all Notes')
          .command('read','Read a note',{titleOne})
          .command('remove','Removes a note',{titleOne})
          .argv;
const command=argv._[0];

if(command==='add'){
    var note=notes.addNotes(argv.title,argv.body);
    console.log(note);
    if(note){
        console.log("Note Created");
        notes.logNote(note);
    }else{
        console.log("Note titile Taken");
    }
}else if(command==='list'){
    var allNotes=notes.getAll();
    console.log(`printing ${allNotes.length} note(s)`);
    allNotes.forEach((note) => notes.logNote(note));
}else if(command==="read"){
    var note=notes.getNote(argv.title);
    if(note){
    console.log("Note to Read");
    notes.logNote(note);
} else{
    console.log("Note not found");
}
    
}else if(command==="remove"){
   var newNote=notes.removeNote(argv.title);
   console.log(newNote);
   var message=newNote ? "Note was removed": "Note not found"
   console.log(message);
}else
{
    console.log('Command not reconized');
}