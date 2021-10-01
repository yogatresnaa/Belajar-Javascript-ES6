
// clousure
// function init(){
//     // let nama = 'puji';
//     return function(nama,kelas){
//         console.log(nama);
//         console.log(kelas);
//     }
 
// }
// let panggilaNama = init();
// panggilaNama('roy', '2 SD');
// panggilaNama('puji', '32 SD');



// Vactori Function = sesuai dengan function yang lain
function ucapkanSalam(time){
    return function(nama){
        console.log(`halo ${time}, Sellamat ${nama}, Semoga senang ya`);

    }
  
}

let selamatPagi = ucapkanSalam('pagi');
let selamatSiang = ucapkanSalam('siang');
let selamatMalam = ucapkanSalam('malam');

selamatPagi('puji');
selamatSiang('tresna');
selamatMalam('puji');

