function hitungTotal() {
    // Mengambil nilai dari HTML 
    let nama = document.getElementById("nama").value;
    let harga = document.getElementById("produk").value;
    let jumlah = document.getElementById("jumlah").value;
    //Mengubah string menjadi angka agar menjadi angka bisa dihtung
    harga = Number(harga);
    jumlah = Number(jumlah);
    //menghitung total
    let Total = harga * jumlah;
    // menghitung diskon
    let diskon = 5;
    if (Total >=50000){
        diskon = Total * 0.25;
    }
    //menghitung total bayar 
    let totalbayar = Total - diskon;

    //Menampilkan HASIL ke HTML
    document.getElementById("hasilNama").innerHTML=nama;

    document.getElementById("total harga").innerHTML=Total;
    Total.toLocaleString("id-ID");

     document.getElementById("diskon").innerHTML=diskon;
     otal.toLocaleString("id-ID");

      document.getElementById("totalbayar").innerHTML=totalbayar;
      
     //ubah total menjadi string agar bisa ditampilkan 
     total.toLocalString("id-ID");
}
    