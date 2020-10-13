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
    // public_func.ctrlCV();

    if (opt.prevObject[0].dataset.option === "number") {
      selector.keypress(function (event) {
        if (event.which && (event.which > 47 && event.which < 58 || event.which === 8)) {
        } else {
          event.preventDefault();
        }
      });
    }
  }

  // public_func.ctrlCV = function () {
  //   if (event.ctrlKey && event.keyCode === 86) {
  //     event.returnValue = false;
  //   }
  // }
  window.hip.component = public_func;
})();
