// Template  Literals

const fullName = 'Enes Erdogan';
const city = 'Izmir';
const yearOfBirth = 1997;

let val;


val = 'my name is '+fullName+
      ' I\'m '+(2022-yearOfBirth)+' years old '+
      ' and I live in '+city;

val = `my name is ${fullName} I'm ${2022-yearOfBirth} years old and I live in ${city}`;
val = `my name is ${fullName} I'm ${(2022-yearOfBirth>=18)?'over 18':'under 18'} and I live in ${city}`;

console.log(val);

