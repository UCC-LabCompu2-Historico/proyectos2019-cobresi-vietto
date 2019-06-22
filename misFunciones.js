var cargaP = {
    x: 100,
    y: 28
};
var cargaN = {
    x: 150,
    y: 28
};

function fuerza() {
    console.log(document.Camp.carga1.value);
    console.log(document.Camp.carga2.value);
    console.log(document.Camp.distancia.value);
    document.Camp.fuerzat.value = ( 9 * Math.pow(10, 9) * Number(document.Camp.carga1.value) * Number(document.Camp.carga2.value) ) / ( Number(document.Camp.distancia.value) * Number(document.Camp.distancia.value) );
}
function dibujarTodo(event) {
    var sel = document.getElementById("cargaMas");
    if (event && event.buttons == 1) {
        if (sel.checked) {
            cargaP.x = event.offsetX;
            cargaP.y = event.offsetY;
        } else {
            cargaN.x = event.offsetX;
            cargaN.y = event.offsetY;
        }
    }

    superFuncion();

    var el = document.getElementById("isGrilla");
    if (el.checked) {
        grilla();
    }

    circulos();
}


function superFuncion() {

    var canvas = document.getElementById("myCanvas2");
    var ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var r = 0.0;
    var g = 0;
    var b = 0;
    var a = 255;
    var distancia;

    var max = 0.0;

    for (var i = 0; i <= canvas.width; i+=4)
        for (var j = 0; j <= canvas.height; j+=4) {

            distancia = Math.sqrt((i - cargaN.x) * (i - cargaN.x) + (j - cargaN.y) * (j - cargaN.y));
            r = ( 9E9 * Number(document.Camp.carga2.value) ) / (distancia );
            if (r > max && r !== Infinity)
                max = r;

            r = r * 0.01;
            if (r > 255)
                r = 255;

            distancia = Math.sqrt((i - cargaP.x) * (i - cargaP.x) + (j - cargaP.y) * (j - cargaP.y));
            b = ( 9E9 * Number(document.Camp.carga1.value) ) / (distancia );

            b = b * 0.01;
            if (b > 255)
                b = 255;

            if(r>50 || b > 50){
                ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + (a / 255) + ")";
                ctx.fillRect(i, j, 4, 4);
            }

        }


}

function grilla() {
    var canvas = document.getElementById("myCanvas2");
    var ctx = canvas.getContext("2d");



    ctx.fillStyle = "black";

    ctx.beginPath();

    for (var i = 0; i < canvas.width; i = i + 10) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
    }
    for (var i = 0; i < canvas.height; i = i + 10) {
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
    }

    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.closePath();
}


function circulos() {
    var canvas2 = document.getElementById("myCanvas2");
    var ctx = canvas2.getContext("2d")

    ctx.fillStyle = "#E61C1C";
    ctx.beginPath();
    ctx.arc(cargaN.x,cargaN.y, 28, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = "#1C5CE6";
    ctx.beginPath();
    ctx.arc(cargaP.x, cargaP.y, 28, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}