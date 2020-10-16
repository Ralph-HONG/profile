(function () {
  if (window.hip == null) {
    window.hip = {
      component: {}
    };
  }
  if (window.hip.component == null) {
    window.hip.component = {};
  }

  let public_func = {
    callback: {}
  };

  $(document).ready(function () {
    $("[data-component]").each(function (idx, elem) {
      public_func.load(elem);
      let dataComponent = $(elem).attr('data-component');
      if (dataComponent != null && dataComponent !== "") {
        $(elem).bind('blur', function (e) {
          let val = $(elem).val();
          let callback = public_func.callback[dataComponent];
          if (callback !== null && callback['blur'] !== null) {
            callback['blur'](elem, val, e);
          }
        });
      }
    });
  });

  public_func.getOpt = function (elem) {
    let dataOpt = $(elem).attr("data-option");
    let optList = dataOpt.split(',');
    let option = {
      required: false
      , phone: false
      , numberalpha: false
      , number: false
      , email: false
      , jumin: false
      , alpha: false
      , hangul: false
      , spacial: false
    };
    if (optList != null && optList.length > 0) {
      for (let i = 0; i < optList.length; i++) {
        let opt = optList[i];
        option[opt] = true;
      }
    }
    return option;
  }

  public_func.load = function () {
    if (arguments !== null && arguments.length > 0) {
      for (let i = 0; i < arguments.length; i++) {
        const inputQuerys = arguments[i];
        $(arguments[i]).bind("keypress", function (e) {
          let val = $(e.target).val();
          if (public_func.isValid(inputQuerys, val + e.key, true)) {
          } else {
            e.preventDefault();
          }
        });
      }
    }

    public_func.event = function (componentID, eventType, func) {
      let callbackInfo = {};
      callbackInfo[eventType] = func;

      if (public_func.callback[componentID] == null) {
        public_func.callback[componentID] = callbackInfo;
      } else {
        public_func.callback[componentID][eventType] = func;
      }
    };


    //들어온 데이터 옵션별 입력제한
    public_func.isValid = function (elem, val, checkNow) {
      const option = public_func.getOpt(elem);
      if (checkNow === true) {
        if (option.number === true) {
          let ret = (val === val.replace(/[^0-9]/g, ""));
          console.log("val :" + val + ' valid : ' + ret);
          return ret;
        }
        if (option.alpha === true) {
          let ret = (val === val.replace(/[^a-zA-Z]/g, ""));
          console.log("val :" + val + ' valid : ' + ret);
          return ret;
        }
        if (option.numberalpha === true) {
          let ret = (val === val.replace(/[^0-9a-zA-Z]/g, ""));
          console.log("val :" + val + ' valid : ' + ret);
          return ret;
        }
      } else {
        let ret = true;

        if (option.required === true) {
          ret = !(val === null || val === '');
        } else if (option.number === true) {
          let ret = (val === val.replace(/[^0-9]/g, ""));
          console.log("val :" + val + ' valid : ' + ret);
          return ret;
        } else if (option.jumin === true) {
          let ret = (val === val.replace(/[^0-9]/g, ""));
          return (ret.length === 13);
        }
      }
      return true;
    };


    public_func.inspect = function (elem) {
      let val = $(elem).val();
      const result = public_func.isValid(elem, val, false);
      if (!result) {
        $(elem).css("border", "1px solid #f00");
      } else {
        $(elem).css("border", "inherit");
      }
    };

  }
  window.hip.component.input = public_func;
})();
