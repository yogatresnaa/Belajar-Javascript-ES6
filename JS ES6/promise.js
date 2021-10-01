// Promise
// Object yang merepresentasikan keberhasilan/kegagalan sebuah event yang asynchronus di masa yang akan datang
//  janji (terpenuhi/ingkar)
// states (fulfid/rejected/pending)
// callback (resolve, reject, finally)
// aksi(then/ catch)

// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve,reject)=>{
//     if( ditepati){
//         resolve('Janji ditepati');
//     }else{
//         reject('ingkar janji');
//     }
// });

// janji1
// .then(response => console.log('ok! : '  + response))
// .catch(response => console.log('Nok! : '  + response))


// let ditepati = false;
// const janji2 = new Promise((resolve,reject) =>{
//     if(ditepati){
//         setTimeout(()=>{
//             resolve("ditepati setelah beberapa detik !");
//         }, 2000);
//     }else{
//         setTimeout(()=>{
//             resolve("tidak ditepati !");
//         }, 3000);
//     }
// })

// console.log("mulai")
// console.log(janji2.then(()=>{
//     console.log(janji2)}));

// // janji2
// // .then(response => console.log('ok! : '  + response))
// // .catch(response => console.log('Nok! : '  + response))

// console.log("selesai")



// promise all()

const film = new Promise(resolve =>{
    setTimeout(()=>{
        resolve([{
            judul : "The Hobbit",
            sutradara : " Peter Jakson",
            pemeran : "frodo"
        }])
    }, 1000)
});

const cuaca = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve([{
            kota : "Depok",
            temperatur : 38,
            kondisi : "gersang"

        }])
    }, 500)
});

Promise.all([film, cuaca])
// .then(yuhuu => console.log(yuhuu));

.then(yuhuu =>{
    const [film , cuaca] = yuhuu;
    console.log(film);
    console.log(cuaca);
})
