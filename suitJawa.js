var ulang = true;
while(ulang == true){
    // menangkap pilihan player
    var p = prompt('game suit jawa\npilih : orang, semut, dan gajah')

    // menangkap pilihan komputer
    // membangkitkan angka random
    var com = Math.random();

    if(com < 0.34) {
        com = 'gajah';
    } else if (com >= 0.34 && com < 0.67){
        com = 'orang';
    } else {
        com = 'semut'
    }
    // menentukan rules
    var hasil = '';

    if(p == com) {
        hasil = 'SERI';
    } else if(p == 'gajah'){
        // if(com == 'semut'){
        //     hasil = 'KALAH';
        // } else {
        //     hasil = 'MENANG';
        // }
        hasil = (com == 'semut') ? 'MENANG' : 'KALAH';
    } else if(p == 'semut'){
        hasil = (com == 'orang') ? 'KALAH' : 'MENANG';
    } else if(p == 'orang'){
        hasil = (com == 'gajah') ? 'KALAH' : 'MENANG';
    } else {
        hasil = 'memasukkan pilihan yang salah';
    }

    // tampilkan hasilnya
    alert('kamu memilih : ' + p + ' dan komputer memilih ' + com + '\nmaka hasilnya adalah ' + hasil);

    ulang = confirm('lagi?');
} 
alert('terima kasih sudah bermain');