(function () {

  if (window.hip == null) {
    window.hip = {};
  }

  let public_func = {
    target:null
  };


  public_func.load = function() {

    $('.menu>a').click(function () {
      $(this).next("ul").toggleClass("hide");
    });
  }

  window.hip.menuTree = public_func;
  })();
