$(document).ready(function() {
    $(".container").css("background-color", "#8a979e");
    $("#target1").fadeOut(6000, function() {
      $("#target2").fadeIn(500);
    });
    $("#target1").css("font-size", 150);
    $("#target3").css("font-size", 50);
    $("p").css("font-family", "helvetica");
    $("p").css("font-size", 20);
    $("ul").css("font-family", "helvetica");
  });
  