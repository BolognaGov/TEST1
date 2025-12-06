function sleep() {
  return new Promise(resolve => setTimeout(resolve, (Math.random() * 3) * 1000));
}

document.getElementById("recycle-bin").addEventListener("click", function() {
    // TODO
});

document.getElementById("about-me").addEventListener("click", function(e) {
    document.querySelector("body").style.cursor = "url('/assets/cursors/wait.cur'), wait";
    e.target.style.cursor = "url('/assets/cursors/wait.cur'), wait"
    sleep().then(function() {
        document.getElementById("about-me-popup-window").style.display = "block";
        document.querySelector("body").style.cursor = "url('/assets/cursors/default.cur'), default";
        e.target.style.cursor = "url('/assets/cursors/pointer.cur'), pointer"
    });
});

document.getElementById("tidl").addEventListener("click", function(e) {
    document.querySelector("body").style.cursor = "url('/assets/cursors/wait.cur'), wait";
    e.target.style.cursor = "url('/assets/cursors/wait.cur'), wait"
    sleep().then(function() {
        document.getElementById("things-i-dislike-popup-window").style.display = "block";
        document.querySelector("body").style.cursor = "url('/assets/cursors/default.cur'), default";
        e.target.style.cursor = "url('/assets/cursors/pointer.cur'), pointer"
    });
});

document.getElementById("PIC0001").addEventListener("click", function(e) {
    document.querySelector("body").style.cursor = "url('/assets/cursors/wait.cur'), wait";
    e.target.style.cursor = "url('/assets/cursors/wait.cur'), wait"
    sleep().then(function() {
        document.getElementById("PIC0001-popup-window").style.display = "block";
        document.querySelector("body").style.cursor = "url('/assets/cursors/default.cur'), default";
        e.target.style.cursor = "url('/assets/cursors/pointer.cur'), pointer"
    });
});

// document.getElementById("").addEventListener("click", function(e) {

// });

// document.getElementById("").addEventListener("click", function(e) {

// });