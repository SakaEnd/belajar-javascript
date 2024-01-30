var pilihanUser = prompt("Apakah kamu memilih Gajah, Orang, atau Semut?");
var pilihanComputer = Math.random();

if (pilihanComputer < 0.34) {
    pilihanComputer = "Gajah";
} else if (pilihanComputer <= 0.67) {
    pilihanComputer = "Orang";
} else {
    pilihanComputer = "Semut";
}

function bandingkanPilihan(user, computer) {
    if (user === computer) {
        return "Hasilnya seri";
    } else if (
        (user == "Gajah" && computer == "Orang") ||
        (user == "Orang" && computer == "Semut") ||
        (user == "Semut" && computer == "Gajah")
    ) {
        return "Kamu menang!";
    } else {
        return "Komputer menang!";
    }
}

if (pilihanUser === "Gajah" || pilihanUser === "Orang" || pilihanUser === "Semut") {
    var hasil = bandingkanPilihan(pilihanUser, pilihanComputer);
    alert("Kamu memilih: " + pilihanUser + "\nKomputer memilih: " + pilihanComputer + "\n\n" + hasil);
} else if(pilihanUser = '') {
  alert("tidak ada pilihan")
}