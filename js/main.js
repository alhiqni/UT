function kirim() {
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let msg = `Halo Universitas Terbuka, saya ${nama} ingin menjadi mahasiswa di Universitas Terbuka.%0A%0AEmail: ${email} ` 
    let url = `https://api.whatsapp.com/send?phone=6285729396599&text=${msg}`;
    window.open(url);
}