var x = prompt("masukan nomor :");
// alert("selama datang " + nama);

if(x % 2 == 0) {
    alert(x + "bilangan Genap");
} else if(x % 2 == 1) {
    alert(x + "bilangan Ganjil");
} else {
    alert("data bukan angka")
}

if (confirm("apakah anda manusia ?")) {
    location = "https://www.google.com/";
} else {
    alert("anda di penjara")
}