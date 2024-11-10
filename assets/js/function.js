function modalCustom(id, body, btn) {
  return `<div class="modal fade custom-zoom" id="${id}" aria-labelledby="modalLabel" aria-hidden="true" >
                  <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content" style="background-color: #333; color: #fff">
                          <div  class="modal-body fw-bold d-flex d-flex justify-content-center p-5"><center>${body}</center></div>
                          <div class="modal-footer">
                             ${btn}
                          </div>
                      </div>
                  </div>
              </div>`;
}

function tampilkanTanggalIndonesia() {
  // Dapatkan waktu saat ini
  const sekarang = new Date();

  // Daftar nama hari dan bulan dalam bahasa Indonesia
  const hariIndo = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];
  const bulanIndo = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  // Ambil hari, tanggal, bulan, dan tahun
  const hari = hariIndo[sekarang.getDay()];
  const tanggal = sekarang.getDate();
  const bulan = bulanIndo[sekarang.getMonth()];
  const tahun = sekarang.getFullYear();

  // Formatkan tanggal sesuai format Indonesia
  const tanggalIndonesia = `${hari}, ${tanggal} ${bulan} ${tahun}`;

  // Tampilkan tanggal di elemen dengan id 'tanggal'
  $("#tanggal").html(tanggalIndonesia);
}

function tampilkanJam() {
  // Dapatkan waktu saat ini
  const sekarang = new Date();

  // Ambil jam, menit, dan detik saat ini
  let jam = sekarang.getHours();
  let menit = sekarang.getMinutes();
  let detik = sekarang.getSeconds();

  // Tambahkan '0' jika jam, menit, atau detik di bawah 10
  jam = jam < 10 ? "0" + jam : jam;
  menit = menit < 10 ? "0" + menit : menit;
  detik = detik < 10 ? "0" + detik : detik;

  // Gabungkan jam, menit, dan detik
  const waktu = `${jam}:${menit}`;

  // Tampilkan waktu di elemen dengan id 'jam'
  $("#jam").html(waktu);
}

function hitungUmur(tanggalLahir) {
  // Ubah tanggal lahir menjadi objek Date
  const birthDate = new Date(tanggalLahir);

  // Ambil tanggal hari ini
  const today = new Date();

  // Hitung selisih tahun
  let age = today.getFullYear() - birthDate.getFullYear();

  // Periksa apakah bulan dan hari ini belum melewati ulang tahun tahun ini
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  // Jika bulan lebih kecil, atau bulan sama tetapi hari lebih kecil, kurangi umur
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}

function type() {
  if (i < text.length) {
    element.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100); // Waktu antara setiap karakter
  }
}

function type() {
  if (i < text.length) {
    if (text.charAt(i) === "\n") {
      element.innerHTML += "<br>";
    } else {
      element.innerHTML += text.charAt(i);
    }
    i++;
    setTimeout(type, 50); // Kecepatan mengetik
  } else {
    $("#intipBuka").show();
  }
}

function slideUpAndHide() {
  const box = document.getElementById("halaman_awal");
  box.classList.add("slide-up");

  // Menghapus elemen setelah animasi selesai
  box.addEventListener("transitionend", () => {
    box.style.display = "none";
  });
}

function buttonsFirst(
  id,
  TextOk = null,
  bottonCancel = false,
  TextCancel = null
) {
  let button = `<button id="btnOK${id}" type="button"  class=" btn-none w-100 text-primary fw-bold">${
    TextOk !== null ? TextOk : "Ok"
  }</button>`;

  if (bottonCancel == true) {
    button += `<button id="btnCancel${id}" type="button"  class=" btn-none w-100 text-primary fw-bold">${
      TextCancel !== null ? TextCancel : "Cancel"
    }</button>`;
  }
  return button;
}
