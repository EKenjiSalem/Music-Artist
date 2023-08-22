var mysong = document.getElementById("song");
var icon = document.getElementById("play");

const menu = document.querySelector('#menu-btn');
const navbar = document.querySelector('.hero .nav');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

icon.addEventListener("click", () => {
    if(mysong.paused) {
          // Play Button icon by Icons8
        mysong.play();
        icon.src = "plays.png";
    } else {
        mysong.pause();
        // Pause Button icon by Icons8
        icon.src = "pause.png";
    }
});

