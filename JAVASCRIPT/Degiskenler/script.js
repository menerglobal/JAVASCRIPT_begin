// Ders 1 :
// console.log("hello");
// console.log(1234);
// console.log(true);
// console.log([1,2,3]);
// console.error("an error occurred");
// console.warn("a warning has occurred");

// // tek satirlik yorim satiri

// /*

//     yorum satirlari
//     yorum satirlari
// //     yorum satirlari

// // */

// // console.clear();
//************************************

// Ders 2 : Degiskenler

// var age;
// console.log(age);

// age=20;
// console.log(age);

// var fullname='Mener';
// console.log(fullname);

// fullname='Mener Global';
// console.log(fullname);

// // Degisken Tanimlama Kurallari

// //Sayisal ifade ile baslayamaz

// var yas1;
// var _yas2;
// var $yas3;

// // Komut isimleriyle tanimlama yapilamaz
// // Birden fazla kelime

// var ad='Enes';
// var soyad='Erdogan';

// var ad_soyad='Enes Erdogan';
// var adSoyad='Enes Erdogan';

// // Case sensetive (Buyuk kucuk duyarliligi)

// var firstName='Enes';
// var FirstName='Mener';

// console.log(firstName);
// console.log(FirstName);


// // var, let, const

// let city='Izmir';
// console.log(city);

// const email='abc@gmail.com';
// console.log(email);

// email='bcd@gmail.com';
// console.log(email);

// *******************************

// Ders 3 : Degisken Tipleri

// // Privite Types

//     // String
//     let firstName='Mener';

//     //Number
//     let age = 20;
//     let money = 100.5;

//     // Boolean
//     let isActive = false;

//     // null
//     let job = null;

//     // undefined
//     let car;


// // Reference Types - Objects

// // Array

// let names=['Mener','Enes','Mehmet'];

// // Object

// let address = {
//     city: 'Copenhagen',
//     country: 'Denmark'
// }

// // Function

// var calculateAge = function(){
//     return 0;
// };
    

// *******************************

// Ders 4 : Tur Donusumu

let val;

// number to string
val = String(10);

// bool to string

val = String(true);

// date to string
val = String(new Date().getDay());

// array to string
val = String([1,2,3,4]);

// toString()

val = (10).toString();
val = (false).toString();

// String to Number

val = Number('10');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('a');
val = Number([1,2,3,4]);

// parseInt
// parseFloat

val = parseInt('10');
val = parseInt('10.5');
val = parseFloat('10.5');

console.log(val);
console.log(typeof val);
console.log(val.toFixed(4));
