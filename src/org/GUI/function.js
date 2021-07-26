/*JQUERY */
$(document).ready(function () {
  $(".start-btn").click(function () {
    $(".startup-block").slideUp();
    $(".main-body").fadeIn(1000);
  });
  $(".tune").click(function () {
    $(".empty").fadeOut(1);
    $(".cp").fadeOut(1);
    $(".tuning-block").fadeIn(100);
  });
  $(".menu-link").click(function () {
    $(".empty").fadeOut(1);
    $(".tuning-block").fadeOut(1);
    $(".cp").fadeIn(100);
  });
});

/*file paths vars*/
var cmaj = "../img/chords/c/major.png";
var cmin = "../img/chords/c/minor.png";
var c5 = "../img/chords/c/5.png";

/**/
function c() {
  document.getElementById("chord-title").innerHTML = "C Major Chord";
  document.getElementById("chordimg1").src = cmaj;
}
