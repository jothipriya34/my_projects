// header section start 
var menu = document.querySelector('#menu-bar')
var navbar = document.querySelector('.navbar')

menu.onclick = () =>{
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
}

window.onscroll = () =>{
	menu.classList.remove('fa-times');
	navbar.classList.remove('active');
	
}
// header section end

// loader start
function loader(){
	document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
	setInterval(loader, 3000);
}

window.onload = fadeOut();
//loader end
