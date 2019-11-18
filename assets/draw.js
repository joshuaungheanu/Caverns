// Javascript that prints out the type of room

function drawRedCaveroom(context, x, y, name) {
	context.save();
	context.beginPath();
	context.arc(x, y, 25, 0, 2*Math.PI, false);
	context.fillStyle = "red";
	context.fill();
	context.beginPath();
	context.fillStyle = "white";
	context.fillText(name, x-10, y+5);
	context.fill();
}
function drawBlueCaveRoom(context, x, y, name) {
	context.save();
	context.beginPath();
	context.arc(x, y, 25, 0, 2*Math.PI, false);
	context.fillStyle = "blue";
	context.fill();
	context.beginPath();
	context.fillStyle = "#ffffff";
	context.fillText(name, x-10, y+5);
	context.fill();

	lastX = x;
	lastY = y;
	lastNodeName = name;
}
function drawGreenCaveroom(context, x, y, name) {
	context.save();
	context.beginPath();
	context.arc(x, y, 25, 0, 2*Math.PI, false);
	context.fillStyle = "green";
	context.fill();
	context.beginPath();
	context.fillStyle = "white";
	context.fillText(name, x-10, y+5);
	context.fill();
	context.restore();
}
function drawPath(context, posY, posX, destX, destY) {
	context.save();
	context.beginPath();
	context.moveTo(posY, posX);
	context.lineTo(destX, destY);
	context.strokeStyle = "blue";
	context.stroke();
	context.restore();

}
function direction(context, fromx, fromy, tox, toy) {
  var headlen = 10; // length of head in pixels
  var dx = tox - fromx;
  var dy = toy - fromy;
  var angle = Math.atan2(dy, dx);
  context.moveTo(fromx, fromy);
  context.lineTo(tox, toy);
  context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
  context.moveTo(tox, toy);
  context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
}
