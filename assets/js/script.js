// Mendapatkan elemen
const element = document.getElementById("typing");
const text = element.innerHTML; // Mendapatkan teks asli
element.innerHTML = ""; // Mengosongkan konten untuk efek mengetik

let i = 0;
window.addEventListener("scroll", () => {
  document.querySelector(
    ".background"
  ).style.transform = `translateY(${window.scrollY}px)`;
});
// Fungsi untuk efek mengetik

// Mulai animasi mengetik

const clickSound = document.getElementById("click-sound");
const clickSound2 = document.getElementById("click-sound2");
const clickSound3 = document.getElementById("click-sound3");

element.innerHTML = ""; // Mengosongkan teks di awal
const data = [
  "Hii, sayang &#128513;",
  "pak tarmizi anak mu sudah dewasa &#128522;",
  "ada pesan untuk kamu di baca yaa",
];

/// Menambahkan kelas slide-down
element.classList.add("slide-down");

$(function () {
  $("#intipBuka").hide();
  $("#btnNext").hide();
  let modal = ``;
  setInterval(tampilkanJam, 1000);
  setInterval(tampilkanTanggalIndonesia, 1000);

  // setTimeout(() => {
  // }, 101);
  for (let i = 0; i < data.length; i++) {
    modal += modalCustom(`mod_${i}`, `${data[i]}`, buttonsFirst(i, "Lanjut"));
  }

  let umur = hitungUmur("2001-10-19");
  $("#content").html(modal);
  $("#content-2").hide();
  $("#notifikasi").hide();
  $("#umur").html(`Selamat Umur ${umur} Tahun`);
  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      $(`#mod_${i}`).modal({
        backdrop: "static",
        keyboard: false,
      });
      $(`#mod_${i}`).modal("show");
      $("#content").on("click", `#btnOK${i}`, function (event) {
        clickSound.play();
        $(`#mod_${i}`).modal("hide");
        $(`#btnOK${i + 1}`).attr("data-target", `#mod_${i + 1}`);
        $(`#btnOK${i + 1}`).attr("data-toggle", `modal`);
        $(`#btnOK${i + 1}`).attr("data-backdrop", `static`);
        $(`#btnOK${i + 1}`).attr("data-keyboard", `false`);
        $(`#mod_${i + 1}`).modal({
          backdrop: "static",
          keyboard: false,
        });
        $(`#mod_${i + 1}`).modal("show");
        if (i === data.length - 1) {
          $("#content-2").show();
          type();
        }
      });
    } else if (i === data.length - 1) {
      $("#content").on("click", `#btnOK${i}`, function (event) {
        clickSound.play();
        clickSound3.play();

        $(`#mod_${i}`).modal("hide");
        $(`#btnOK${i + 1}`).attr("data-target", `#mod_${i + 1}`);
        $(`#btnOK${i + 1}`).attr("data-toggle", `modal`);
        $(`#btnOK${i + 1}`).attr("data-backdrop", `static`);
        $(`#btnOK${i + 1}`).attr("data-keyboard", `false`);
        $("#content-2").show();
        type();
      });
    } else {
      $("#content").on("click", `#btnOK${i}`, function (event) {
        clickSound.play();
        $(`#mod_${i}`).modal("hide");
        $(`#btnOK${i + 1}`).attr("data-target", `#mod_${i + 1}`);
        $(`#btnOK${i + 1}`).attr("data-toggle", `modal`);
        $(`#btnOK${i + 1}`).attr("data-backdrop", `static`);
        $(`#btnOK${i + 1}`).attr("data-keyboard", `false`);
        $(`#mod_${i + 1}`).modal({
          backdrop: "static",
          keyboard: false,
        });
        $(`#mod_${i + 1}`).modal("show");
      });
    }
  }
});

let content_part2 = [
  `Hari istimewa itu terlewatkan
   Meski waktu tak kembali lagiiiiii....
   Wanita tersayangkuuu kau istimewaaaa &#128522;<br>
   Tiada hiasan atau lilin terang.  <br>
   Namun doa dan harapan menyertai.<br>
Semoga kebahagiaan selalu datang,<br>
Dalam setiap langkah yang kau jalani.&#128521;`,
  `<b>Dear Kamu</b>,<br> seorang wanita yang tak pernah ku temui <br>
   setiap text yang kamu sampaikan membuatku merasa tidak sendiri
   <br>Di balik layar ini kita bertukar rasa .<br> Dalam setiap pesan, kamu hadir nyata,
   <br> Semoga suatu hari kita bertemu,Dalam pelukan nyata yang kurindu
   `,
  `Aku merindukanmu, lebih dari jejak yang kau tinggalkan, karena di balik sepiku yang dalam, <b>Kamu Tak Hilang</b>`,
  `terakhir untuk kamu , aku menemukan sajak dari seorang pemuda yang pandai membuat setiap baitnya mampu mengingat mu,dalam kutipan sajak nya <br>
  "Jika, Suatu saat kau rasa <br> Dunia tak begitu baik kepada mu <br> Maka <br> Biarkan aku memelukmu Ceritakan segala keluhmu<br> agar kau tahu masih ada Dunia bernama <br> <i><b>"Aku"</b></i> " Hadiah ku Untuk mu `,
  `<b>Dear sayang </b> <br> dalam dua dimensi aku terlarut dalam lekukan garis senyum mu,Dalam lekukan bibir itu aku menemukan secarik kebahagian`,
  `
  <i>"Sayang terima kasih untuk terus bertahan sampai hari ini "</i>`,
];
let textBtn = "Selanjutnya ";
$(document).on("click", "#intipBuka", function () {
  slideUpAndHide();
  let id = $(this).data("id");
  $("#btnNext").hide();

  $("#notifikasi-box").removeClass("active");

  $("#notifikasi-box").addClass("slide-left");

  setTimeout(() => {
    $("#notifikasi").show();
    $("#btnNext").show();

    $("#notifikasi-box").addClass("active");
    let btnId = id + 1;
    if (typeof id === "undefined") {
      $("#btnNext").html(``);
    } else {
      console.log(id);
      $("#btnNext").html(`<button type="button" id="intipBuka" ${
        id !== content_part2.length - 1 ? "data-id='" + btnId + "'" : ""
      } class="btn btn-outline-light slide-down shadow-lg rounded-custom"> ${textBtn}
          </button>`);
    }
  }, 1000);
  if (typeof id === "undefined") {
    $("#notifikasi").html("");
    Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
      },
    })
      .fire({
        title: "Mungkin ada yang mau di sampaikan",
        input: "textarea",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: false,
        allowOutsideClick: false,
        confirmButtonText: "Kirim ke dia",
        showLoaderOnConfirm: true,
        preConfirm: async (send) => {
          const data = {
            text: send,
            no_hp: "6281299700738",
          };
          return data;
        },
      })
      .then((result) => {
        if (result.isConfirmed) {
          window.location.href = `https://wa.me/${result.value.no_hp}?text=${result.value.text}`;
        }
      });
  } else {
    $("#notifikasi-body").html(content_part2[id]);
  }

  clickSound2.play();
});
