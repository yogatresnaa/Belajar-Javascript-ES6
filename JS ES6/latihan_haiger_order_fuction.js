// Ambil semua video
const videos = Array.from(document.querySelectorAll('[data-duration]'));


// pilih yang hanya ada tulisan yang 'javascript Lanjutan'
const jsLanjutan = videos.filter(video => video.textContent.includes('JS Lanjutan'))

// ambil durasi masing2 video
.map(item => item.dataset.duration)


// ubah durasi menjadi float, ubah menit menjadi detik
.map(waktu =>{
    //10:30 -> [10.30] ini namanya split
    const parts = waktu.split(':').map(part => parseFloat(part));
    return(parts[0] * 60) + parts[1];
})

// jumlahkan semua titik






console.log(jsLanjutan);