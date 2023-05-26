const mouseTrail = document.getElementById("mousetrail");
const mouseCursor = document.getElementById("mouse-cursor");

console.log(mouseTrail);
console.log(mouseCursor.clientHeight)
document.addEventListener("mousemove", function (event) {
  var x = event.clientX - mouseCursor.clientWidth/2;
  var y = event.clientY - mouseCursor.clientHeight/2;
  mouseTrail.style.left = x + "px";
  mouseTrail.style.top = y + "px";
});
