(function () {
  if (window.hip == null) {
    window.hip = {};
  }

  let public_func = {
    query: null
    , input: {}
    , option:{
      required:false
      ,phone:false
      ,number:false
      ,email:false
      ,jumin:false
    }
  };

  let val = ''

  public_func.input.load = function (query) {
    public_func.query = query;
    let selector = $(query);
    let dataOpt = selector.attr("data-option");
    let optList = dataOpt.split(',');
    if(optList != null && optList.length > 0) {
      for (let i = 0; i < optList.length; i++) {
        let opt = optList[i];
        public_func.option[opt] = true;
      }
    }

    selector.bind("keypress", function (e) {
      let val = $(e.target).val();
      if (public_func.isValid(val + e.key, true)) {

      } else {
        e.preventDefault();
      }
    });

    // if (opt.prevObject[0].dataset.option === "idNumber") {
    //   let frontNum = selector.val()
    //   if (frontNum.length >= 8) {
    //     frontNum += frontNum.val() + '-';
    //   }
    // }
  }

  public_func.inspect = function (){
    let val = $(public_func.query).val();
    const result = public_func.isValid(val, false);
    if(!result){
      $(public_func.query).css("border", "1px solid #f00");
    } else {
      $(public_func.query).css("border", "inherit");
    }
  };

  public_func.isValid = function (val, checkNow){
    if(checkNow === true) {
      if(public_func.option.number === true){
        let ret = (val === val.replace(/[^0-9]/g, ""));
        console.log("val :"+ val + ' valid : ' + ret);
        return ret;
      }
    } else {
      let ret = true;
      if(public_func.option.required === true){
        ret = !(val == null || val === '');
      }
      if(public_func.option.number === true){
        let ret = (val === val.replace(/[^0-9]/g, ""));
        console.log("val :"+ val + ' valid : ' + ret);
        return ret;
      }
      if(public_func.option.jumin === true){
        let ret = (val === val.replace(/[^0-9]/g, ""));
        return (ret.length === 13);
      }
    }

    return true;
  };


  public_func.input.submit = function (id, pw, phone, email) {
    let loginId = $('#id').val();
    let loginPw = $('#pw').val();
    let loginPhone = $('#phone').val();
    let loginEmail = $('#email').val();


    public_func.input.chkEmail = function (loginEmail) {
      let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      return regExp.test(loginEmail);
    }
    console.log('ID : ' + loginId + '\n', 'PW : ' + loginPw + '\n', 'PHONE : ' + loginPhone + '\n', 'E-MAIL : ' + loginEmail + '\n');
  }
  window.hip.component = public_func;
})();



