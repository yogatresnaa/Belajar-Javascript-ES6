// Protoyepe 

// function Mhs (nama,energi){
//     this.nama = nama;
//     this.energi = energi;
// }

// Mhs.prototype.makan = function (porsi){
//     this.energi += porsi;
//     return `Halo ${this.nama}, Selamat Makan `;
// }

// Mhs.prototype.main = function (jam){
//     this.energi -= jam;
//     return `Halo ${this.nama}, main `;
// }

// let yogatresna = new Mhs ('puji', 5);


// versi Class
class Mhs {
constructor(nama,energi){
    this.nama = nama;
    this.energi =energi;
}

makan(porsi){
    this.energi += porsi;
    return `Halo ${this.nama}, Selamat Makan `;
}

main(jam){
    this.energi -= jam;
    return `Halo ${this.nama}, main `;
    }
}

let ia = new Mhs ('puji', 5);
