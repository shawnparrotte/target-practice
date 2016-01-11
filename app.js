var score = 0, total = 0;

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

});

var revealTarget = setInterval(function(){

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

}, 1000)
