"use strict";

var room = document.querySelector('#room');
document.body.addEventListener("mousemove", function (e) {
  if (!room) return;
  var roomCenterX = room.offsetLeft + room.offsetWidth / 2;
  var roomCenterY = room.offsetTop + room.offsetHeight / 2;
  var mousePosX = e.clientX;
  var mousePosY = e.clientY;
  var diffX = mousePosX - roomCenterX;
  var diffY = mousePosY - roomCenterY;

  if (diffX != 0 || diffY != 0) {
    room.setAttribute('style', "transform: rotate3d(0,1,0, " + diffX / 200 + "deg) rotate3d(1,0,0," + -1 * diffY / 200 + "deg)");
  }
});