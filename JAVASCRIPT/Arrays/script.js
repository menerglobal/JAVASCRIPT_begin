// Arrays

let names = ['mustafa','mehmet','ekrem','ayse'];
let years = [2017,1970,1990,1998];
let mix = ['enes','erdogan',1983,null,undefined,['cinema','book']];

// // get array item
// console.log(names[0])
// console.log(names[3])

// // set array item
// names[names.length]='erkan';

// // add item
// years.push(1996);
// years.unshift(1996);

// // remove item
// years.pop();
// years.shift();

// //indexof
// let index = names.indexOf('mehmet');
// console.log(' index : '+index);

// // reverse
// names.reverse();

// // sort
// years.sort();

// //concat
// let val = years.concat(names);
// console.log(val);

// splice
// console.log(names);
// names.splice(0,1);

function over18(year){
    let age = 2018 - year;
    return age>=18;
}

// find
// let val = years.find(over18);

// filter
let val = years.filter(over18);

console.log(val);

console.log(names);
console.log(names.length);
console.log(typeof names);

// console.log(years);
// console.log(mix);
