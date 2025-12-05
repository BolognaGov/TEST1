
const popups = document.querySelectorAll(".popup-window");

popups.forEach(popup => {
    const controlBox = popup.querySelector(".control-box");
    const btnClose = popup.querySelector(".btn-close");
    const btnMaximize = popup.querySelector(".btn-maximize");
    const btnMinimize = popup.querySelector(".btn-minimize");

    let isDragging = false;
    let offsetX, offsetY;

    let ogX = popup.style.left || (Math.floor(Math.random() * (window.innerWidth - parseInt(popup.style.width) - 50)) + "px");
    let ogY = popup.style.top || (Math.floor(Math.random() * (window.innerHeight - 300)) + "px");
    let ogW = popup.style.width;

    popup.style.position = "absolute";
    popup.style.left = ogX;
    popup.style.top = ogY;

    controlBox.parentElement.addEventListener("mousedown", function () {
        popups.forEach(p => p.style.zIndex = 100);
        controlBox.parentElement.style.zIndex = 101;
    });

    controlBox.addEventListener("mousedown", function (e) {
        isDragging = true;
        popups.forEach(p => p.style.zIndex = 100);
        popup.style.zIndex = 101;

        offsetX = e.clientX - popup.getBoundingClientRect().left;
        offsetY = e.clientY - popup.getBoundingClientRect().top;
        controlBox.style.cursor = "url('assets/cursors/grab.cur'), grabbing;";
    });

    document.addEventListener("mousemove", function (e) {
        if (!isDragging) return;
        popup.style.left = (e.clientX - offsetX) + "px";
        popup.style.top = (e.clientY - offsetY) + "px";
    });

    document.addEventListener("mouseup", function () {
        isDragging = false;
        controlBox.style.cursor = "url('assets/cursors/grab.cur'), grab;";
    });

    btnClose.addEventListener("click", function () {
        popup.style.display = "none";
    });

    btnMaximize.addEventListener("click", function () {
        if (popup.isMaximized === true) {
            popup.style.left = ogX;
            popup.style.top = ogY;
            popup.style.width = ogW;
            popup.style.height = "";
            popup.isMaximized = false;
        } else {
            ogX = popup.style.left;
            ogY = popup.style.top;
            ogW = popup.style.width;

            popup.style.left = "0px";
            popup.style.top = "0px";
            popup.style.width = window.innerWidth + "px";
            popup.style.height = window.innerHeight + "px";
            popup.isMaximized = true;
        }
    });

    btnMinimize.addEventListener("click", function () {
        popup.style.display = "none";
    });
});