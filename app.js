var score = 0, total = 0, revealTarget;

function setScore(){
  $("#score").text(score + "/" + total);
}

$(".target").click(function(){
  $(this).css({
    "transition": "transform .2s",
    "transform-origin" : "100% 100% 0",
    "transform": "translateY(-9vw) rotateX(90deg)"
  });

  score++
  setScore();

  if(score === 25){

    console.log("inside!!")
    clearInterval(revealTarget);
    setTimeout(function(){
      $(".target").css("background-color", "green");
      targetPractice(1000);
    }, 500)
  }

  if(score === 50){
    clearInterval(revealTarget);
    setTimeout(function(){
      $(".target").css("background-color", "yellow");
      targetPractice(750);
    }, 500)
  }

  if(score === 75){
    clearInterval(revealTarget);
    setTimeout(function(){
      $(".target").css("background-color", "red");
      targetPractice(500);
    }, 500)
  }

  if(score === 100){
    clearInterval(revealTarget);
    setTimeout(function(){
      $(".target").css("background-color", "black");
      targetPractice(250);
    }, 500)
  }


});

function targetPractice(speed){

  revealTarget = setInterval(function(){

    $(".target").css({"transform": "translateY(0) rotateX(90deg)"});

    var row = Math.floor(Math.random() * 7) + 1,
        col = Math.floor(Math.random() * 5),
        rowName = "#horizontal-container .vertical-container:nth-child(" + row + ")";

    $($($(rowName)
      .children()[col])
      .children()[0])
      .css({
        "transform":"translateY(-9vw) rotateX(0)",
        "transition": "transform .1s",
      });

      total++
      setScore();

  }, speed)

}

$(document).ready(function(){

  targetPractice(1250);

})
