// menggunakan for
// const angka = [-1,8,9,1,4,-5,-4,3,2,9];

// const newArray = [];
// for(let i = 0; i<angka.length; i++){
//     if (angka [i] >= 3){
//         newArray.push(angka[i]);
// }
// }
// console.log(newArray)


// filter
// cara 1
// const angka = [-1,8,9,1,4,-5,-4,3,2,9];
// const angkaBaru = angka.filter(function(a){
//     return a >=3
// });

// console.log(angkaBaru);

// filter
// cara 2, ini lebig singkat
// ini syarat parameter hanya satu
// const angka = [-1,8,9,1,4,-5,-4,3,2,9];
// const angkaBaru = angka.filter(a => a >= 3);
// console.log(angkaBaru);



// map
//contoh kalikan angka 

const angka = [-1,8,9,1,4,-5,-4,3,2,9];
const newAngka = angka.map((a)=>{
    return a * 2;
});

console.log(newAngka);

// reduace menggunakan(arrow function)
// jumlahkan Array 

// const angka = [-1,8,9,1,4,-5,-4,3,2,9];
// const baruAngka = angka.reduce((accumulator, currentValue) =>
// accumulator+currentValue,2);
// console.log(baruAngka);

// method Chaining menggunakan(arrow function)
// cari angka >5
// kalikan 3
// jumlahkan
// const angka = [-1,8,9,1,4,-5,-4,3,2,9];
// const hasil = angka.filter(a => a >= 5)//8,9,9
// .map(a => a* 3)//24,27,27
// .reduce ((acc,cur) => acc + cur);//78
// console.log(hasil);


// method Chaining menggunakan function biasa
// cari angka >5
// kalikan 3
// jumlahkan
// const angka = [-1,8,9,1,4,-5,-4,3,2,9];
// const total = angka.filter ((a)=>{ return a >= 5}).
// map(function(a){
//     return a * 3
// }).
// reduce(function(acc,cur){
//     return acc + cur
// });
// console.log(total);










