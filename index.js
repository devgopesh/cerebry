var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

context.beginPath();
context.moveTo(150,50);
context.lineTo(350,50);
context.lineTo(450,200);
context.lineTo(100,200);
context.closePath();
context.stroke();

context.font = "12px Arial";
context.fillText("D", 140, 45);
context.fillText("C", 355, 45);
context.fillText("B", 455, 210);
context.fillText("A", 87, 210);

context.fillText("B centimeter", 200, 213);
context.fillText("D centimeter", 200, 45);

context.rotate(-70 * Math.PI / 180);
context.fillText("A centimeter", -100, 155);

context.rotate(127 * Math.PI / 180);
context.fillText("C centimeter", 300, -272);