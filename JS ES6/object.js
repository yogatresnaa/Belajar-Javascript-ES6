// Cara membuat object pada javascript
// 1. Object Literal

// let mhs = {
//     nama : 'Puji Tresna',
//     Kelas : '06TPLM 007',
//     nim : 181011402733,
//     domisili : {
//         jalan : 'Delima RT 04/ RW 04, No 33',
//         Kelurah : 'Curug',
//         Kecamatan : 'Bojongsari',
//         Kota : ' Depok'
//     }
// };



//2. function Declaration
// function Mhs ( nama, energi){
//     let mhs = {};
//     mhs.nama = nama;
//    mhs.energi = energi;
//     mhs.makan = function (porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat makan`);
//     }

//     mhs.main = function (jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat main`);
//     }

//     return mhs;
// };

// let uuu = Mhs('puji',20);
// let bbb = Mhs('uji',20);

// construktor function
function Mhs ( nama, energi){
   this.nama = nama;
   this.energi = energi;
    this.makan = function (porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat makan`);
    }

    this.main = function (jam){
        this.energi -= jam;
        console.log(`Halo ${this.nama}, Selamat main`);
    }
};

let puji = new Mhs ('yoyo', 10);
