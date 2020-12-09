var mainContainer = document.getElementById("mainContainer");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}
function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}

function createTriangles() {
  var centerX = getWidth() / 2;
  var centerY = getHeight() / 2;
  console.log(centerX, centerY);
  var triangleRatio = 10;
  var black = true;

  for (var i = 0; i < 10; i++) {
    // var svgID = "svg" + (i + 1);
    // var svg = document.getElementById(svgID);
    var svg = document.getElementById("svgID");
    var topPointX = centerX;
    var topPointY = centerY - 30 * triangleRatio;
    var leftPointX = centerX - 26 * triangleRatio;
    var leftPointY = centerY + 15 * triangleRatio;
    var rightPointX = centerX + 26 * triangleRatio;
    var rightPointY = centerY + 15 * triangleRatio;

    var points =
      topPointX +
      ", " +
      topPointY +
      " " +
      leftPointX +
      ", " +
      leftPointY +
      " " +
      rightPointX +
      ", " +
      rightPointY;

    var centerX = (topPointX + leftPointX + rightPointX) / 3;
    var centerY = (topPointY + leftPointY + rightPointY) / 3;

    var newTriangle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon"
    );
    newTriangle.setAttributeNS(null, "points", points);
    newTriangle.setAttributeNS(null, "id", "triangle" + i);
    if (black == true) {
      newTriangle.setAttributeNS(
        null,
        "style",
        "fill:black; stroke:white; stroke-width:5"
      );
      black = false;
    } else {
      newTriangle.setAttributeNS(
        null,
        "style",
        "fill:white; stroke:black; stroke-width:5"
      );
      black = true;
    }
    // var rotateInput = "rotate(180, " + centerX + ", " + centerY + ")";
    //newTriangle.setAttribute("transform", rotateInput);
    var animateTriangle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "animateTransform"
    );
    var animateFrom = "" + 0 + " " + centerX + " " + centerY;
    var animateTo = "" + 360 + " " + centerX + " " + centerY;
    var speedCounter = 10 - i;
    animateTriangle.setAttributeNS(null, "attributeName", "transform");
    animateTriangle.setAttributeNS(null, "attributeType", "XML");
    animateTriangle.setAttributeNS(null, "type", "rotate");
    animateTriangle.setAttributeNS(null, "from", animateFrom);
    animateTriangle.setAttributeNS(null, "to", animateTo);
    animateTriangle.setAttributeNS(null, "dur", speedCounter);
    animateTriangle.setAttributeNS(null, "repeatCount", "indefinite");
    newTriangle.appendChild(animateTriangle);
    svg.appendChild(newTriangle);
    triangleRatio -= 1;
  }
}
