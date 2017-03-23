$(document).ready(function(){

  $(".sides").submit(function(event) {

    var sideA = parseInt($("#sideA").val());
    var sideB = parseInt($("#sideB").val());
    var sideC = parseInt($("#sideC").val());

    event.preventDefault();

    if ((sideA + sideB) <= sideC || (sideA + sideC) <= sideB || (sideB + sideC) <= sideA ) {
      var answer = "This is <strong>not a triangle</strong>";
      $(".answer").html(answer);
    } else if (sideA === sideB && sideB === sideC && sideA === sideC)  {
      var answer = "This is an <strong>equilateral triangle</strong>";
      $(".answer").html(answer);
    } else if (sideA === sideB || sideB === sideC || sideA === sideC) {
      var answer = "This is an <strong>isosceles triangle</strong>";
      $(".answer").html(answer);
    } else {
      var answer = "This is a <strong>scalene triangle</strong>";
      $(".answer").html(answer);
    }

    this.reset();
  });

});
