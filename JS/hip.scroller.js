(function () {
	if (window.hip == null) {
		window.hip = {};
	}

	let public_func = {
		target: null
	};

	public_func.load = function (query, cls) {
		public_func.target = $(query);
		$(document).bind("scroll", function (e) {
			if (window.scrollY > public_func.target[0].getBoundingClientRect().height) {
				public_func.add(cls);
			} else {
				public_func.remove(cls);
			}
		});
	};

	public_func.add = function (cls) {
		if (public_func.target != null) {
			public_func.target.removeClass(cls);
			public_func.target.addClass(cls);
		}
	};

	public_func.remove = function (cls) {
		if (public_func.target != null) {
			public_func.target.removeClass(cls);
		}
	};
	window.hip.scroller = public_func;
})();


