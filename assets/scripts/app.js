const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "html",
				weight: 12.3
			}, {
				text: "css6",
				weight: 10
			}, {
				text: "javascript",
				weight: 14
			}, {
				text: "jquery",
				weight: 7
			}, {
				text: "mySQL",
				weight: 13
			}, {
				text: "bootstrap",
				weight: 10
			}, {
				text: "python",
				weight: 10
			}, {
				text: "MongoDB",
				weight: 15
			}, {
				text: "Data Visualization",
				weight: 9
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 140});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"love everything about code.", "have a passion for Economics and Tech.", "solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#f70000e6"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
