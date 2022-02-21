// Functions

function yasHesapla(dogumYili){
    return 2022 - dogumYili;
}

let ageArda = yasHesapla(2012);
let ageEnes = yasHesapla(2010);
let ageAli = yasHesapla(2017);

console.log(ageArda);
console.log(ageEnes);
console.log(ageAli);

function EmekligeKacYilKaldi(dogumYili,isim){
    let yas = yasHesapla(dogumYili);
    let emeklilik = 65 - yas;

    if(emeklilik>0){
        console.log(`${isim} emekli olmana ${emeklilik} yıl kaldı`);
    }else{
        console.log('Zaten emekli oldunuz');
    }
}

EmekligeKacYilKaldi(2012,'Arda');
EmekligeKacYilKaldi(2010,'Enes');
EmekligeKacYilKaldi(1950,'Ali');

