(function () {

			if (window.hip == null) {
				window.hip = {};
			}


			let public_func = {
				target: null
			}


			public_func.load = function (query, voca) {
				let elem = $(query);
				let idx = 0;

				elem.bind('click', function () {
					if (idx > voca.length - 1) {
						idx = 0;
					}
					elem.text(voca[idx++]);
				});
			};


			window.hip.toggleText = public_func;
		}
)();
