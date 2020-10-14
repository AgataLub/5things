window.addEventListener("load", loadScreen);

var zIndex = 1;

function bringFront() {
    console.log("bringFront");

zIndex = zIndex + 1;

    this.style.zIndex = zIndex;

    console.log(zIndex);
}

function loadScreen() {
    console.log("loadScreen");

    document.querySelector("#one").addEventListener("click", bringFront);
    document.querySelector("#two").addEventListener("click", bringFront);
    document.querySelector("#three").addEventListener("click", bringFront);
    document.querySelector("#four").addEventListener("click", bringFront);
    document.querySelector("#five").addEventListener("click", bringFront);
}

let vid = document.querySelector("#video");

vid.addEventListener("mouseover", playVideo);

vid.addEventListener("mouseout", pauseVideo);

document.addEventListener("keydown", keyStroked);

function playVideo() {
    console.log("playvideo");
    vid.play();
}

function pauseVideo() {
    console.log("pausevideo");
    vid.pause();
}

function stopVideo() {
    console.log("stopvideo");
    vid.pause();
    vid.currentTime = 0;
}

function keyStroked(e) {
    console.log("Key pressed " + e.key + " (no. " + e.which + ")");
    let volume = vid.volume;

    if (e.which == 83) {
        stopVideo();
    } else if (e.which == 80) {
        playVideo();
    } else if (e.which == 32) {
        pauseVideo();
    } else if (e.which == 77) {
        if (vid.muted == true) {
            vid.muted = false;
        } else {
            vid.muted = true;
        }
    } else if (e.which == 39) {
        vid.currentTime += 5;
    } else if (e.which == 39) {
        vid.currentTime -= 5;
    } else if (e.which == 38) {
        volume += 0.1;
        if (volume > 1) {
            volume = 1
        }
        console.log("vol; " + volume);
    }

} else if (e.which == 40) {
    volume -= 0.1;
    if (volume < 0) {
        volume = 0
    }
    console.log("vol; " + volume);
}
vid.volume = volume;
}

