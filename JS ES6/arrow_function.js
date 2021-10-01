// function expresion
//  let sifat = 'senja';
// let tampilNama = () =>{
//     let name = 2222;
//     return (yuuu) =>{
//         console.log (`hai nama saya ${name}, saya adalah ${sifat} ${yuuu}`);
//     }
// }

// let cekNama = tampilNama();
// cekNama ('sunries');


// let sifat = 'senja';
// function ucapkanSalam(time){
//     return function(nama){
//         console.log(`halo ${sifat}, Sellamat ${nama}, Semoga senang ya`);

//     }
  
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatMalam = ucapkanSalam('malam');

// selamatPagi('puji');
// selamatSiang('tresna');
// selamatMalam('puji');


// Arrow Function dengan parameter satu
// const tampilNama = (nama) =>{ return `halo mas ${nama}`;}
// console.log('puji');


// Arrow Function dengan parameter dua
// const tampilNama = (nama, waktu) =>{
//     return `Selamat ${waktu}, mas ${nama}`;
// }
// console.log(tampilNama('puji','pagi'));

// Implisit return
// const tampilNama = nama => `halo mas ${nama}`;
// console.log(tampilNama('puji'));


// let mahasiswa = ['Puji Tresna','Dody hermawan', 'Erik'];
// let jumlahHuruf = mahasiswa.map(nama => ({nama : nama, jmlhrf: nama.length}));
// console.table(jumlahHuruf);

// constructor function

// const Mahasiswa = function(){
//     this.nama = 'Puji tresna';
//     this.umur = 30;
//     this.haiHalo = function (){
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }

// const puji = new Mahasiswa();
// puji.haiHalo();

// arrow fanction

const Mahasiswa = function(){
    this.nama = 'Puji tresna';
    this.umur = 30;
    this.haiHalo = function (){
        console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
    }
}

const puji = new Mahasiswa();
puji.haiHalo();