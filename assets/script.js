function cekKhodam(event) {
  event.preventDefault();
  let nama = $("#search").val();
  if (nama === "") {
    alert("Masukkan nama terlebih dahulu!");
  } else if (nama.length > 30) {
    alert("Maximal 30 Karakter");
  } else {
    let status = ["isi", "kosong"];
    const randomStatus = Math.floor(Math.random() * status.length);
    if (randomStatus === 0) {
      let khodam = [
        "Jinn Cepirit",
        "Syaiton",
        "Mimi Peri",
        "Naga Bonar",
        "Setan Item",
        "Iblis Gaul",
        "Iblis Males",
        "Kunti Birahi",
        "Buaya Birahi",
        "Burung Beo",
        "Macan Kembang",
        "Badak Salto",
        "Elang Picek",
        "Keong Racun",
      ];
      const random = Math.floor(Math.random() * khodam.length);
      $("#result").html(
        `${nama.toUpperCase()} - Khodam Kamu ( ${khodam[random]} )`
      );
      $("#search").val("");
    } else {
      $("#result").html(`${nama.toUpperCase()} - KOSONG`);
      $("#search").val("");
    }
  }
}

$(document).ready(function () {
  $("#btn-search").click(cekKhodam);
});
