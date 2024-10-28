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

$(function () {
  let modal = ``;

  const data = [
    {
      body: "Hi Sayang1",

      button: function (id) {
        return `<button id="btn${id}" type="button" class="btn btn-none w-100 text-primary fw-bold" >OK</button>`;
      },
    },
    {
      body: "Hi Sayang2",

      button: function (id) {
        return `<button id="btn${id}" type="button" class="btn btn-none w-100 text-primary fw-bold" >OK</button>`;
      },
    },
    {
      body: "Hi Sayang3",
      button: function (id) {
        return `<button id="btn${id}" type="button" class="btn btn-none w-100 text-primary fw-bold" >OK</button>`;
      },
    },
    {
      body: "Hi Sayang4",

      button: function (id) {
        return `<button id="btn${id}" type="button" class="btn btn-none w-100 text-primary fw-bold" >OK</button>`;
      },
    },
    {
      body: "Hi Sayang5",

      button: function (id) {
        return `<button id="btn${id}" type="button" class="btn btn-none w-100 text-primary fw-bold" >OK</button>`;
      },
    },
    {
      body: "Hi Sayang6",

      button: function (id) {
        return `<button id="btn${id}" type="button" class="btn btn-none w-100 text-primary fw-bold" >OK</button>`;
      },
    },
    {
      body: "Hi Sayang7",

      button: function (id) {
        return `<button id="btn${id}" type="button" class="btn btn-none w-100 text-primary fw-bold" >OK</button>`;
      },
    },
  ];

  console.log(data);
  for (let i = 0; i < data.length; i++)
    modal += modalCustom(`mod_${i}`, `${data[i].body}`, data[i].button(i));

  $("#content").html(modal);
  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      $(`#mod_${i}`).modal("show");
      $("#content").on("click", `#btn${i}`, function () {
        $(`#mod_${i}`).modal("hide");
        $(`#mod_${i + 1}`).modal("show");
      });
    } else if (i === data.length - 1) {
      $("#content").on("click", `#btn${i}`, function () {
        $(`#mod_${i}`).modal("hide");
      });
    } else {
      $("#content").on("click", `#btn${i}`, function () {
        $(`#mod_${i}`).modal("hide");
        $(`#mod_${i + 1}`).modal("show");
      });
    }
  }
});
