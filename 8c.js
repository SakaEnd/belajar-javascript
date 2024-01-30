// Mendapatkan pilihan pemain
var playerChoice = prompt("Pilih:\n- Gajah\n- Orang\n- Semut");

// Menentukan pilihan komputer secara acak
var computerChoice = Math.floor(Math.random() * 3);
var choices = ["Gajah", "Orang", "Semut"];
var computerChoiceText = choices[computerChoice];

// Menentukan pemenang
var result;
if (playerChoice === computerChoiceText) {
  result = "Seri!";
} else if (
  (playerChoice === "Gajah" && computerChoiceText === "Orang") ||
  (playerChoice === "Orang" && computerChoiceText === "Semut") ||
  (playerChoice === "Semut" && computerChoiceText === "Gajah")
) {
  result = "Kamu Menang 👍";
} else {
  result = "Komputer Menang 🤖";
}

// Menampilkan hasil permainan
alert(`Kamu memilih ${playerChoice} \n dan \nkomputer memilih ${computerChoiceText}.\n${result}`);