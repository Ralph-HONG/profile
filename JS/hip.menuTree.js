(function () {

      if (window.hip == null) {
        window.hip = {};
      }

      let public_func = {
        target: null
      };


      public_func.load = function (query, menus) {
        public_func.target = $(query);
        if (menus == null) {
          return;
        }

        for (var i = 0; i < menus.length; i++) {
          if (menus[i] != null && menus[i].menu != null) {
            var menu = menus[i].menu;
            for (let j = 0; j < menu.length; j++) {
            }
          }
        }
      }

      public_func.input = function (menus) {

        if (menus == null) {
          return;
        }
        var menuTree = [];

        var clsFind = document.getElementById('menu');

        for (var i = 0; i < menus.length; i++) {
          console.log(menus[i].title);
          var ul = document.createElement("ul")
          clsFind.appendChild(ul).innerHTML = menus[i].title

          if (menus[i] != null && menus[i].menu != null) {
            var menu = menus[i].menu;
            clsFind.appendChild(ul).innerHTML = menus[i].title
            for (let j = 0; j < menu.length; j++) {
              console.log(menu[j].title);
              var li = document.createElement("li")
              ul.appendChild(li).innerHTML = menu[j].title
            }
          }
        }
      };


      // cls.appendChild(menus);


      window.hip.menuTree = public_func;
    }
)();
