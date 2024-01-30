var siswa = new Object();
siswa.namaDepan = "Saka";
siswa.namaBelakang = "Endrawan";
siswa.alamat = "Bandung";
siswa.Nohp = "0897689799";
siswa.namaLengkap = function() {
    return this.namaDepan + "  " + this.namaBelakang
};

alert("Nama :" + siswa.namaLengkap());
