window.addEventListener("load", loadScreen);

var zIndex = 1;

function bringFront() {
    console.log("bringFront");



    document.querySelector("#one").style.zIndex = zIndex;

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
