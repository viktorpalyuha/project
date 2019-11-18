$("header .logo, .company-name").fadeIn(3000);
$("#main p").fadeIn(3000);
$("nav").fadeIn(3000);

const clock = document.querySelector(".clock");
setInterval(() => {
	clock.innerHTML = new Date().toLocaleTimeString();
}, 1000);