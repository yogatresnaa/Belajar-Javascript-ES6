// templet string

// const nama =' puji trena';
// const umut = 30;
// console.log (` Halo, nama saya ${nama}, dan saya Umur ${umut} tahun`)

// embeded expresion

// console.log(`${ 1+1}`);
// console.log(`${alert('halo')}`);
// const x = 10;
// console.log(`${(x % 2 == 0) ? 'ganjil' : 'genap'}`);


// HTML Fragmen

const mhs = {
nama :' puji trena',
umut : 30,
nim : 181011402733,
email: 'sandika@gmail.com'

};
const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class ="nim" ${mhs.nim}></span>
</div>`;

console.log(el);