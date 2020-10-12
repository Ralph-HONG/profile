(function () {

  if (window.hip == null) {
    window.hip = {};
  }

  let public_func = {
    target: null
  };


  public_func.load = function (query, index) {
    public_func.target = $(query);
    let $menu = public_func.target;

    public_func.select(index);
    public_func.target.find('a').bind('click', function (e) {
      $menu.find('li a').removeClass('active');
      $(e.target).addClass('active');
      $(e.target).parents('li').find('> a').addClass('active');
    });
  };

  public_func.select = function (index) {

    let $menu = public_func.target;
    $menu.find('li a').removeClass('active');
    $menu.find('li:nth('+index+') > a').addClass('active');
  };


 public_func.render = function () {
    let $menu = public_func.target;
    $menu.find('li > ul').hide();

    $menu.find('li.active > ul').show();
  };

  window.hip.menuTree = public_func;
})();
