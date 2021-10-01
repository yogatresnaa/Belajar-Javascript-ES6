// function minimal(a,b){
//     if ( a < b){
//       return `${a}`;
//     }else if( a > b){
//     return `${b}`;
//     }
//     else{
//      return `${a}`; 
//     }
//   }
  
//   console.log (minimal('3', '7'));
//   console.log (minimal('7', '3'));
//   console.log (minimal('7', '7'));

//   function power(a,b){
//       return (a**b);
//   }

//   console.log (power(7,3));
//   console.log (power(3,7));
//   console.log (power(4,0.5));
  




// function tes (a){
//   for(let i = 1; i<=a; i++){
//     if(i % 3 == 0 && i % 5 == 0 ){
//       console.log('fizzifuzzy');
//     }else if(i % 3 == 0){
//       console.log('fizzy');
//     }else if(i % 5 == 0){
//       console.log('fuzzy');
    
//       }  else{
//       console.log(i);
//     }
//   }
// }

// let hasil = tes(100);
// console.log(hasil);



// function tes (a){
//   for(let i = 1; i<=a; i++){
//     if(i % 5 == 0 && i % 6 == 0){
//       console.log('fivesix');
//     }else if(i % 5 == 0){
//       console.log('five');
//     }else if(i % 6 == 0){
//         console.log('six');
//       }  else{
//       console.log(i);
//     }
//   }
// }


// let hasil = tes(100);
// console.log(hasil);

// Deret fibonaci



// const mail = {
//   from: "pengirim@dicoding.com",
// sendMessage: function(msg, to) {
//   console.log(`you send: ${msg} to ${to} from ${this.from}`);
// } 
// };


// let mail2 = mail.sendMessage('haiii', 'youuuuu');
// let mail3 = mail.sendMessage('ujiiii', 'youuuuu');
// console.log(mail.from);


// class Paket {
//  penerima = 'ida';
//  alamat = 'pekanbaru';
//  tlpon = '08765';
//   isiPesan = function(namapengirim,namapaket,status){
//     console.log('Assalamualaikum',namapengirim,'paket ibu',this.penerima, namapaket, 'sudah', status,)
//   }
//  }

 
//  let kuy = new Paket();
//  kuy.isiPesan('ujioslop', 'sepatu', 'Terkirim');

// _contacts = []
// // contoh
// class Mail{
//   from = 'pengirim@dicoding.com';
//     _contacts = [];
//     sendMessage = function(msg, to) {
//         console.log('you send:', msg, 'to', to, 'from', this.from);
//     this._contacts.push(to);
//     }
// }
// let uu = new Mail()
// uu.sendMessage('hallo', 'penerima@dicoding.com')

// class Mail{
//   constructor(penulis){
//     this.from = 'haiii';
//     console.log('isi ini denagn', penulis, this.from)
//   };
// }

// const mail = new Mail ("huuuutu");

// class Mail{
//   constructor(u,i) {
//     this.from = 'pengirim@dicoding.com';   
//     console.log('is instantiated',u,i);
//   };
// }

// let surat = new Mail("@gmail.com","gua");


class WhatsApp extends Mail{
    constructor(username, isBussinessAccount, phone) {
        super(phone)
        this.from=phone;
    this.username = username;
    this.isBussinessAccount = true;
    }
}
 
const wa1 = new WhatsApp('dicoding', true, 089989090898);


