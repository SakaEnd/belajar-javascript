var siswa = new Object();
siswa.namaDepan = "Saka";
siswa.namaBelakang = "Endrawan";
siswa.alamat = "Bandung";
siswa.Nohp = "0897689799";
siswa.namaLengkap = function() {
    return this.namaDepan + "  " + this.namaBelakang
};


// JSON (JavaScript Object Notation)
var siswa2 = {
    namaDepan : "Saka",
    namaBelakang : "Endrawan.A",
    alamat : "Bandung",
    namaLengkap: function () {
        return this.namaDepan + "  " + this.namaBelakang
    }
}
alert("Nama :" + siswa.namaLengkap());
alert("Nama :" + siswa2.namaLengkap());