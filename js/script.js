
function menu() {
	var menu = document.getElementById("menu");
	var nav = document.getElementById("nav");
	menu.classList.add('d-none');
	nav.classList.remove("closed");
	nav.classList.add("open");
}

function closed() {
	var menu = document.getElementById("menu");
	var nav = document.getElementById("nav");
	menu.classList.remove('d-none');
	nav.classList.remove("open");
	nav.classList.add("closed");
}