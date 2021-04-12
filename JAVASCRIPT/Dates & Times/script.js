// Date Object

let d = new Date();
let birthday = new Date(1996,1,5);

// Set Methods

d.setFullYear(2050);
d.setMonth(5);
d.setDate(20);
d.setHours(10);
d.setMinutes(15);
d.setSeconds(45);

// Get Methods

console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMonth());
console.log(d.getMinutes());
console.log(d.getSeconds());

console.log(d.getFullYear() - birthday.getFullYear());
console.log(d.getMonth() - birthday.getMonth());
console.log(d.getDate() - birthday.getDate());

console.log(d);
console.log(typeof d);
