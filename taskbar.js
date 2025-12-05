let startButtonPressed = false;
let startMenu = document.querySelector(".start-menu");

document.getElementById("start-button-div").addEventListener("click", function() {
    if (startButtonPressed) {
        startButtonPressed = false;
        startMenu.style.display = "none";
    } else {
        startButtonPressed = true;
        startMenu.style.display = "grid";
    }
});

document.querySelectorAll(".task-bar-clickable").forEach(function(e) {
    e.pressed = true;
    e.addEventListener("click", function() {
        if (e.pressed) {
            e.style.cssText = `
                box-shadow: 
                    black -2px -2px,
                    black -2px 0px,
                    black 0px -2px,
                    white -2px 2px,
                    white 2px -2px,
                    white 2px 2px;
                background-color: #C0C0C0;`;
            e.pressed = false;
        } else {
            e.style.cssText = `
                box-shadow: 
                    white -2px -2px,
                    white -2px 0px,
                    white 0px -2px,
                    black -2px 2px,
                    black 2px -2px,
                    black 2px 2px,
                    inset -2px -2px grey;`;
            e.pressed = true;
        }
    });
});

setInterval(function () {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let period = "AM";
    if (hours >= 12) {
        period = "PM"
    }

    hours = hours % 12 || 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const clockP = document.getElementById("clock-p");
    clockP.innerHTML = `${hours}:${minutes}:${seconds} ${period}`;
}, 100)