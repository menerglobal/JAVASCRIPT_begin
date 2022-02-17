// Object Literals

let val;

let person = {
    firstName : 'Enes',
    lastName : 'Erdogan',
    age : 25,
    hobbies : ['music','game'],
    address : {
        city : 'Istanbul',
        country : 'Turkey'
    },
    getBirthYear : function(){
        return 2022- this.age;
    }
};

val = person;
val = person.firstName;
val = person.lastName;
val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.hobbies.length;
val = person.address;
val = person.address.city;
val = person.address['city'];
val = person.getBirthYear();




let people = [
                {firstName : 'Çınar',lastName:'Turan'},
                {firstName : 'Sena',lastName:'Turan'},
                {firstName : 'Seda',lastName:'Turan'}
             ];


val = people[2];
val = people[2].firstName;

for(let i =0; i<people.length;i++){
    console.log(people[i].firstName);
}

// console.log(val);
// console.log(typeof people);

