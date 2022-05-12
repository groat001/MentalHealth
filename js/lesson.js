$(document).ready(function() {

  $("#toggle1").click(function()  {
    $("#lost").fadeOut(1000);
    $("#coninfo").fadeOut(1000);
    $("#proinfo").fadeIn(1000);
  });

  $("#toggle2").click(function()  {
    $("#lost").fadeOut(1000);
    $("#proinfo").fadeOut(1000);
    $("#coninfo").fadeIn(1000);
  });

  $("#load").click(function()  {
    $("#load").fadeOut(500);
    $("#load2").fadeOut(500);
    $("#hide").fadeIn(1000);
  });

  $("#WI").fadeOut(1, function()  {
    $("#WI").fadeIn(2000);
  })

  $("#WI2").fadeOut(1, function()  {
    $("#WI2").fadeIn(10000);
  })

});
