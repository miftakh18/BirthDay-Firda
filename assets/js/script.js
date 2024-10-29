function modalCustom(id, body, btn) {
  return `<div class="modal fade custom-zoom" id="${id}" aria-labelledby="modalLabel" aria-hidden="true" >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content" style="background-color: #333; color: #fff">
                        <div  class="modal-body fw-bold d-flex d-flex justify-content-center p-5">${body}</div>
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

const clickSound = document.getElementById("click-sound");
const data = [
  {
    body: "Hi Sayang1",

    button: function (id) {
      return `<button id="btn${id}" type="button"  class=" btn-none w-100 text-primary fw-bold"  >OK</button>`;
    },
  },
  {
    body: "Hi Sayang2",

    button: function (id) {
      return `<button id="btn${id}" type="button" class=" btn-none w-100 text-primary fw-bold"  >OK</button>`;
    },
  },
  {
    body: "Hi Sayang3",
    button: function (id) {
      return `<button id="btn${id}" type="button" class=" btn-none w-100 text-primary fw-bold"  >OK</button>`;
    },
  },
  {
    body: "Hi Sayang4",

    button: function (id) {
      return `<button id="btn${id}" type="button" class=" btn-none w-100 text-primary fw-bold" >OK</button>`;
    },
  },
  {
    body: "Hi Sayang5",

    button: function (id) {
      return `<button id="btn${id}" type="button" class=" btn-none w-100 text-primary fw-bold"  >OK</button>`;
    },
  },
  {
    body: "Hi Sayang6",

    button: function (id) {
      return `<button id="btn${id}" type="button" class=" btn-none w-100 text-primary fw-bold"  >OK</button>`;
    },
  },
  {
    body: "Hi Sayang7",

    button: function (id) {
      return `<button id="btn${id}" type="button" class=" bg-none btn-none w-100 text-primary fw-bold"  >OK</button>`;
    },
  },
];
$(function () {
  let modal = ``;
  setInterval(tampilkanJam, 1000);
  setInterval(tampilkanTanggalIndonesia, 1000);
  for (let i = 0; i < data.length; i++) {
    modal += modalCustom(`mod_${i}`, `${data[i].body}`, data[i].button(i));
  }
  $("#content-2").hide();
  let tglLahir = "2001-10-19";
  let umur = hitungUmur(tglLahir);

  $("#umur").html(`Selamat Umur ${umur} Tahun`);
  $("#content").html(modal);
  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      $(`#mod_${i}`).modal({
        backdrop: "static",
        keyboard: false,
      });
      $(`#mod_${i}`).modal("show");
      $("#content").on("click", `#btn${i}`, function (event) {
        clickSound.play();
        $(`#mod_${i}`).modal("hide");
        $(`#btn${i + 1}`).attr("data-target", `#mod_${i + 1}`);
        $(`#btn${i + 1}`).attr("data-toggle", `modal`);
        $(`#btn${i + 1}`).attr("data-backdrop", `static`);
        $(`#btn${i + 1}`).attr("data-keyboard", `false`);
        $(`#mod_${i + 1}`).modal({
          backdrop: "static",
          keyboard: false,
        });
        $(`#mod_${i + 1}`).modal("show");
      });
    } else if (i === data.length - 1) {
      $("#content").on("click", `#btn${i}`, function (event) {
        clickSound.play();
        $(`#mod_${i}`).modal("hide");
        $(`#btn${i + 1}`).attr("data-target", `#mod_${i + 1}`);
        $(`#btn${i + 1}`).attr("data-toggle", `modal`);
        $(`#btn${i + 1}`).attr("data-backdrop", `static`);
        $(`#btn${i + 1}`).attr("data-keyboard", `false`);
        $("#content-2").show();
      });
    } else {
      $("#content").on("click", `#btn${i}`, function (event) {
        clickSound.play();
        $(`#mod_${i}`).modal("hide");
        $(`#btn${i + 1}`).attr("data-target", `#mod_${i + 1}`);
        $(`#btn${i + 1}`).attr("data-toggle", `modal`);
        $(`#btn${i + 1}`).attr("data-backdrop", `static`);
        $(`#btn${i + 1}`).attr("data-keyboard", `false`);
        $(`#mod_${i + 1}`).modal({
          backdrop: "static",
          keyboard: false,
        });
        $(`#mod_${i + 1}`).modal("show");
      });
    }
  }
});
