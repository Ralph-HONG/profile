(function () {
  if (window.hip == null) {
    window.hip = {};
  }

  let public_func = {
    target: null
  };


  public_func.load = function (query) {
    public_func.target = $(query);
    $(document).bind("click", function (e) {
      public_func.RangeSlider()
    });
  };

  function ShowSliderValue(sVal) {
    let obValueView = document.getElementById("slider_value_view");
    obValueView.innerHTML = sVal
  }


  public_func.RangeSlider = function () {
    let range = $('.slider_range');

    range.on('input', function () {
      ShowSliderValue(this.value);
    });
  }

  window.hip.barValue = public_func;
})();







// function ShowSliderValue(sVal) {
//   let obValueView = document.getElementById("slider_value_view");
//   obValueView.innerHTML = sVal
// }
//
// var RangeSlider = function () {
//   var range = $('.slider_range');
//
//   range.on('input', function () {
//     ShowSliderValue(this.value);
//   });
// };
//
// RangeSlider();
