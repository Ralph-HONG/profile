(function () {

	if (window.hip == null) {
		window.hip = {};
	}

	let public_func = {
		target: null
	};

	var config = {
		speed: "smooth"
	};

	public_func.with = function (seletor, spd) {
		public_func.target = $(seletor);
		if (spd != null) {
			config.speed = spd;
		}
		public_func.target.bind("click", function (e) {
			if (this.dataset.link != null) {
				public_func.scroll(this.dataset.link);
			}
		});
	};

	// 해당 창으로 이동시키는 함수
	public_func.scroll = function (seletor) {
		const scrollTo = document.querySelector(seletor);
		scrollTo.scrollIntoView({behavior: config.speed});
	}

	window.hip.scrollMover = public_func;
})();
