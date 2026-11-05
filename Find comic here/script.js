const milk = document.querySelector(".milk");
const mop1 = document.querySelector(".mop1");
const swish = document.querySelector(".swish");
const mop2 = document.querySelector(".mop2");
const swash = document.querySelector(".swash");

milk.addEventListener("click", function () {

    // First action
    mop1.style.display = "block";
    swish.style.display = "block";

    // Second action after 1 second
    setTimeout(function () {
        mop2.style.display = "block";
        swash.style.display = "block";
    }, 1800);

});

const sound1 = document.querySelector(".sound1");
const sound2 = document.querySelector(".sound2");
const sound3 = document.querySelector(".sound3");
const sound4 = document.querySelector(".sound4");
const sound6 = document.querySelector(".sound6");
const sound7 = document.querySelector(".sound7");

const audio1 = new Audio("../sound_files/Gulp.m4a");
const audio2 = new Audio("../sound_files/Steps.m4a");
const audio3 = new Audio("../sound_files/Shloop.m4a");
const audio4 = new Audio("../sound_files/Sprits.m4a");
const audio6 = new Audio("../sound_files/Sweep.m4a");
const audio7 = new Audio("../sound_files/5 hours.m4a");

audio1.volume = 0.2;
audio2.volume = 0.6;
audio3.volume = 1.0;
audio4.volume = 0.5;
audio6.volume = 1.0;
audio7.volume = 0.1;

sound1.addEventListener("click", function () {
    audio1.currentTime = 0;
    audio1.play();
});

sound2.addEventListener("click", function () {
    audio2.currentTime = 0;
    audio2.play();
});

sound3.addEventListener("click", function () {
    audio3.currentTime = 0;
    // Change in here
    audio3.play();
});

sound4.addEventListener("click", function () {
    audio4.currentTime = 0;
    audio4.play();
});

sound6.addEventListener("click", function () {
    audio6.currentTime = 0;
    audio6.play();
});

sound7.addEventListener("click", function () {
    audio7.currentTime = 0;
    audio7.play();
});