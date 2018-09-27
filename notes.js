

const fs=require('fs');

var fetchNotes=()=>{

    try{
        var noteString=fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    }catch(e){
        notes=[];
    }
};

var saveNotes=(notes)=>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

const addNotes=(title,body)=>{
    var notes=fetchNotes();
    var note={
        title,
        body
    };

   
 var duplicatenotes=notes.filter((note)=>note.title===title);
 if(duplicatenotes.length===0){
    notes.push(note);
    saveNotes(notes);
    return note;
 }  
};

const getAll=()=>{
   return fetchNotes();
};

const getNote=(title)=>{
var notes=fetchNotes();
var readNote=notes.filter((note)=>note.title===title);
return readNote[0];
};

const removeNote=(title)=>{
var notes=fetchNotes();
var newNotes=notes.filter((note)=>title!==note.title);
saveNotes(newNotes);
return notes.length!==newNotes.length;
};

const logNote=(note)=>{ 
          debugger;
          console.log("---");
          console.log(`Title : ${note.title}`);
          console.log(`Body : ${note.body}`);
};

module.exports={
    addNotes,
    getAll,
    getNote,
    removeNote,
    logNote
}