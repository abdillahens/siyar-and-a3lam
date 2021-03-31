var canvas1 = document.getElementById("canvas1");
var canvas2 = document.getElementById("canvas2");

function mouseOnSpit() {
    makeSwipArrows(canvas1, 0);
    makeSwipArrows(canvas2, 1);
    function makeSwipArrows(canvas, dir) {
        var context = canvas.getContext("2d");
        var width = canvas.width
        var height = canvas.height;
        makeArrow(context, height, width, dir);

    }

    function makeArrow(context2D, canvasheight, canvaswidth, dir) {
        context2D.moveTo(((dir > 0) ? 0 : canvaswidth) + ((dir > 0) ? 1 : -1) * canvaswidth / 9, canvasheight / 4);
        context2D.lineTo(((dir > 0) ? 0 : canvaswidth) + ((dir > 0) ? 1 : -1) * 7 * canvaswidth / 9, canvasheight / 2);
        context2D.lineTo(((dir > 0) ? 0 : canvaswidth) + ((dir > 0) ? 1 : -1) * canvaswidth / 9, 3 * canvasheight / 4);
        context2D.lineTo(((dir > 0) ? 0 : canvaswidth) + ((dir > 0) ? 1 : -1) * canvaswidth / 9, canvasheight / 4);
        context2D.strokeStyle = "white";
        context2D.fillStyle = "white";
        context2D.lineWidth = 2;
        context2D.stroke();
        context2D.fill();
    }
}
function mouseOutSpit(){
    var context2D = canvas1.getContext('2d');
    context2D.clearRect(0, 0, canvas1.width, canvas1.height)
    context2D = canvas2.getContext('2d');
    context2D.clearRect(0, 0, canvas2.width, canvas2.height)
}
