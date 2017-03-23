$(document).ready(function(){

  $(".sides").submit(function(event) {

    var sideA = parseInt($("#sideA").val());
    var sideB = parseInt($("#sideB").val());
    var sideC = parseInt($("#sideC").val());

    event.preventDefault();

    if ((sideA + sideB) <= sideC || (sideA + sideC) <= sideB || (sideB + sideC) <= sideA ) {
      alert("this is not a triangle");
    } else if (sideA === sideB && sideB === sideC && sideA === sideC)  {
      alert("equilateral!");
    } else if (sideA === sideB || sideB === sideC || sideA === sideC) {
      alert("isosceles");
    } else {
      alert("scalene");
    }
    // } else if (((sideA === sideB && sideB != sideC) ||





    this.reset();
  });

});
