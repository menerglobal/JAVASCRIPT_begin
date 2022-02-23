// Demo : Functions

// var bakiye = 2000;
// var adsoyad = 'Enes Erdogan';

var hesapA = {
    ad : 'Enes Erdogan',
    hesapNo : '12345678',
    bakiye : 2000,
    ekHesap : 1000
}

var hesapB= {
    ad : 'Ali Erdogan',
    hesapNo : '12356479',
    bakiye : 3000,
    ekHesap : 2000
}


function paraCek(hesap,miktar){
    console.log(`Merhaba ${hesap.ad}`);

    if(hesap.bakiye >= miktar){
        hesap.bakiye = hesap.bakiye - miktar;
        console.log('paranızı alabilirsiniz');
    }else {
        var toplam = hesap.bakiye + hesap.ekHesap;

        if(toplam>=miktar){
            if(confirm('ek hesabınızı kullanmak ister misiniz')){
                console.log('paranızı alabilirsiniz');
                var bakiye = hesap.bakiye;
                var ekhesap = miktar - bakiye;
                hesap.bakiye = 0;
                hesap.ekhesap = hesap.ekhesap - ekhesap;
            }else{
                console.log(`${hesap.hesapNo} nolu hesabınızda ${miktar} TL bulunmamaktadır.`);
            }
        }else{
            console.log('üzgünüz bakiye yetersiz');
        }
    }

}

paraCek(hesapA,2000);
paraCek(hesapA,1000);
// paraCek(hesapB,2000);
