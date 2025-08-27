// Scroll-to-top button
let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
	if (document.documentElement.scrollTop > 200) {
		topBtn.style.display = "block";
	} else {
		topBtn.style.display = "none";
	}
};

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}
