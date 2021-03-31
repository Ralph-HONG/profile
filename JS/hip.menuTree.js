(function () {

			if (window.hip == null) {
				window.hip = {};
			}

			let public_func = {
				target: null
				, menus: null
			};

			let private_func = {
				idx: 0
				, htmlTemplate: function (menus) {
					let html = "";
					if (menus != null && menus.length > 0) {
						html += "<ul>";
						for (let i = 0; i < menus.length; i++) {
							var menu = menus[i];
							html += "<li>";
							let cls = "";
							if (menu.title != null && menu.title !== "") {
								if (menu.select === true) {
									cls = 'active';
								}
								html += "<a href='javascript:hip.menuTree.select(" + menu.idx + ")' class='" + cls + "'>" + menu.title + "</a>";
							}

							if (menu.menu != null) {
								html += private_func.htmlTemplate(menu.menu);
							}
							html += "</li>";
						}
					}
					return html;
				}
				, menuInit: function (menus) {
					if (menus != null && menus.length > 0) {
						for (let i = 0; i < menus.length; i++) {
							var menu = menus[i];
							menu.idx = private_func.idx++;
							if (menu.menu != null) {
								private_func.menuInit(menu.menu);
							}
						}
					}
					return menus;
				}
				, menuClear: function (menus) {
					if (menus != null && menus.length > 0) {
						for (let i = 0; i < menus.length; i++) {
							var menu = menus[i];
							menu.select = false;
							if (menu.menu != null) {
								private_func.menuClear(menu.menu);
							}
						}
					}
					return menus;
				}
			};

			public_func.find = function (menus, idx) {
				if (menus == null) {
					menus = public_func.menus;
				}
				if (menus != null && menus.length > 0) {
					for (let i = 0; i < menus.length; i++) {
						var menu = menus[i];
						if (menu.idx === idx) {
							return menu;
						}
						if (menu.menu != null) {
							const findMenu = public_func.find(menu.menu, idx);
							if (findMenu != null) {
								return findMenu;
							}
						}
					}
				}
			}

			public_func.load = function (query, menus) {
				public_func.target = $(query);
				public_func.menus = private_func.menuInit(menus);

				public_func.render(menus);
			}

			public_func.select = function (idx) {
				var menu = public_func.find(public_func.menus, idx);

				if (menu != null) {
					private_func.menuClear(public_func.menus);
					menu.select = true;
					public_func.render();
				}
			};

			public_func.render = function () {
				public_func.target.html(private_func.htmlTemplate(public_func.menus));
			};


			window.hip.menuTree = public_func;
		}
)();
