// Strings

const firstName = 'Enes';
const lastName = "Erdogan";
let hobbies = 'sinema spor kitap yazılım';
const age=25;

let val;

// string concatenation

val = firstName +" "+ lastName;
val = 'Enes';
val +=' Erdogan';

val = 'Benim adım '+firstName+' '+ lastName+ ' ve yaşım ' + age + ' izmir\'te yaşıyorum.';

//string concat
val = firstName.concat(' ',lastName);

// string uppercase - lowercase
val = val.toUpperCase();
val = val.toLowerCase();

// string replace
val = '  '+val.replace('Enes','Alp')+'     ';

// trim
val = val.trim();

// substring 
// val = val.substring(3,8);

// slice
// val = val.slice(6); 

//val = val.indexOf('x');

//val = val[1];

//string length
//val = val.length;

val =hobbies.split(' ')

console.log(val);
console.log(typeof val);
