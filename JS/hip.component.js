(function () {
  if (window.hip == null) {
    window.hip = {};
  }

  let public_func = {
    target: null
    , input: {}
  };


  public_func.input.load = function (query) {
    let selector = $(query);
    let opt = selector.find("data-option");
    let check = selector.val();

    if (opt.prevObject[0].dataset.option === "number") {
      selector.keypress(function (event) {
        if (event.which && (event.which > 47 && event.which < 58 || event.which === 8)) {
        } else {
          event.preventDefault();
        }
      });
    }
  }


  public_func.input.check = function () {

  }
    if (opt.prevObject[0].dataset.option !== "email") {
      let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      if (regExp.test(check) === false) {
        check = "";
        check.focus();
      } else {
        alert('메일형식이 아닙니다');
      }
    }

    if (opt.prevObject[0].dataset.option !== "phone") {
      let check = selector.val();

    }

    if (opt.prevObject[0].dataset.option !== "idNumber") {
      let check = selector.val();
      let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      if (regExp.test(check) === false) {
        check = "";
        check.focus();
      } else {
        alert('메일형식이 아닙니다');
      }
    }
  window.hip.component = public_func;
})();
