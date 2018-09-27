// var obj={
//     name:"sasi"
// };

// var stringObj=JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var person='{"name":"sasi","age":27}';

// personObj=JSON.parse(person);
// console.log(personObj);

const fs=require('fs');

var originalNote={
    title:"some title",
    body:"some body"
};
var orignalNoteString=JSON.stringify(originalNote);
fs.writeFileSync('notes.json',orignalNoteString);

var noteString=fs.readFileSync('notes.json');
var note=JSON.parse(noteString);
console.log(typeof note);
console.log(note);