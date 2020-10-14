(function () {
  if (window.hip == null) {
    window.hip = {};
  }

  let public_func = {
    target: null
    , input: {}
  };

  let val = ''

  public_func.input.load = function (query) {
    let selector = $(query);
    let opt = selector.find("data-option");
    if (opt.prevObject[0].dataset.option === "number") {
      selector.keypress(function (event) {
        if (event.which && (event.which > 47 && event.which < 58 || event.which === 8)) {
        } else {
          event.preventDefault();
        }
      });
    }


    function email_str(str) {
      let regEmil = /[a-z0-9]{2,}@[a-z0-9-]{2,}\.[a-z0-9]{2,}/i
      return regEmil.test(str);
    }

  }


  public_func.input.submit = function () {
    var id = document.getElementById("id");
    var password = document.getElementById("password");
    var email = document.getElementById("email");


    console.log(id, password, email);
    // if(!IdPwCheck()){ //아이디 비밀번호 검사
    //   return false;
    // }else if(!EmailCheck()){ //이메일 검사
    //   return false;
  }

  window.hip.component = public_func;
})();
