// Mendapatkan elemen
const element = document.getElementById("typing");
const text = element.innerHTML; // Mendapatkan teks asli
element.innerHTML = ""; // Mengosongkan konten untuk efek mengetik

let i = 0;

// Fungsi untuk efek mengetik

// Mulai animasi mengetik

const clickSound = document.getElementById("click-sound");
const clickSound2 = document.getElementById("click-sound2");

element.innerHTML = ""; // Mengosongkan teks di awal
const data = ["Aku sayang kamu", "Sedang apa sayang"];
// Menambahkan kelas slide-down
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
    modal += modalCustom(`mod_${i}`, `${data[i]}`, buttonsFirst(i, "Mau"));
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

let content_part2 = ["tes Konten", "Konten 2"];
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
      } class="btn btn-outline-light slide-down shadow-lg rounded-custom"> Intip Jangan ?&#128140;
          </button>`);
    }
  }, 1000);
  if (typeof id === "undefined") {
    $("#notifikasi").html("");
    Swal.fire({
      title: "Submit your Github username",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      allowOutsideClick: false,
      confirmButtonText: "Look up",
      showLoaderOnConfirm: true,
      preConfirm: async (login) => {
        try {
          const githubUrl = `
            https://api.github.com/users/${login}
          `;
          const response = await fetch(githubUrl);
          if (!response.ok) {
            return Swal.showValidationMessage(`
              ${JSON.stringify(await response.json())}
            `);
          }
          return response.json();
        } catch (error) {
          Swal.showValidationMessage(`
            Request failed: ${error}
          `);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
        });
      }
    });
  } else {
    $("#notifikasi-body").html(content_part2[id]);
  }

  clickSound2.play();
});
