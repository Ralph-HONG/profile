(function () {

	if (window.hip == null) {
		window.hip = {};
	}

	let public_func = {};

	public_func.load = function (query, rate) {
		var target = $(query);
		var slideStatus = "none";
		public_func.setValue(target, rate);


		target.bind('mousedown', function (e) {
			slideStatus = "move";
		});

		target.bind('mouseup', function (e) {
			slideStatus = "none";
		});

		target.bind('mousemove', function (e) {
			let val = e.offsetX / target.width() * 100;
			if (e.target.className !== "circle" && slideStatus === "move") {
				public_func.setValue(target, val);
			}
		});
	};

	public_func.setValue = function (target, val) {
		let paseVal = parseInt(val);

		target.find(".skill_value").css("width", val + "%");
		target.find(".circle").css("left", "calc(" + val + "% - 7px)");
		target.find(".skill_description span:nth-child(2)").html(paseVal + "%");
	};
	window.hip.slider = public_func;
})();
