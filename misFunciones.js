/* Declaracion de las variables de las cargas, declarando
la posicion inicial en la que se encuentran en el canvas. */
var cargaP = {
    x: 100,
    y: 250
};
var cargaN = {
    x: 100,
    y: 400
};



/* Funcion "fuerza", a traves de calculos matematicos, calcula la fuerza del campo electrico,
ingresando el valor de las dos cargas y la distancia aproximada entre ellas */
function fuerza() {
    console.log(document.Camp.carga1.value);
    console.log(document.Camp.carga2.value);
    console.log(document.Camp.distancia.value);
    document.Camp.fuerzat.value = ( 9 * Math.pow(10, 9) * Number(document.Camp.carga1.value) * Number(document.Camp.carga2.value) ) / ( Number(document.Camp.distancia.value) * Number(document.Camp.distancia.value) );
}





/*Funcion "dibujarTodo", permite interactuar con los checkbox para poder quitar o colocar la grilla, y realizar
lo mismo con el efecto de luz en las cargas cuando se desee*/
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

    var canvas = document.getElementById("myCanvas2");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    var cir = document.getElementById("isCirculos");
    if (cir.checked) {
        circulos();
        superFuncion();

    }else{
        circulos();

    }
    var el = document.getElementById("isGrilla");
    if (el.checked) {
        grilla();
    }else{

    }
}




/* Funcion superFuncion(luz), esta permite generar un efecto
 de luz a partir de un degradez de los colores de cada carga cuyo radio de brillo dependera
 del valor de la mism carga*/
function superFuncion(luz) {
    var canvas = document.getElementById("myCanvas2");
    var ctx = canvas.getContext("2d");

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



/* Funcion grilla, dibuja la grilla sobre el canvas, a traves de los valores en x e y
que se la asigna a cada linea que mediante un bucle for esta dibuja. Adaptada a las medidas del mismco canvas */
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




/* Funcion circulos, se encarga de graficar los dos unicos circulos que aparecen en el canvas, de color azul y rojo
 respectivamente con el fin de representar la polaridad de las cargas */
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