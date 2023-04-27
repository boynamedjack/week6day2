$(document).ready(function() {
    //grid
    for (let i = 1; i <= 16; i++) {
      $(".grid-container").append('<div class="grid-item"></div>');
    }
  
    // background color 
    $(".grid-item").click(function() {
      if ($(this).css("background-color") === "rgb(0, 0, 255)") {
        $(this).css("background-color", "rgb(255, 0, 0)");
      } else {
        $(this).css("background-color", "rgb(0, 0, 255)");
      }
    });
    $(".grid-item").css("background-color", "rgb(0, 0, 255)");
  });
  