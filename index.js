window.onload = function() {
    var canvas = document.getElementById("canvas1");
    var contenedor = document.getElementById("Contenedor");
    var cuadritos = [];
    var sizeCuadro = {ancho: 25, alto: 25};
    var color = "";
    var inputColor = document.getElementById("color");
    var inputSizeCuadros = document.getElementById("sizeCuadros");

    if (canvas && canvas.getContext) {
        var ctx = canvas.getContext("2d");
        if (ctx) {
            function dibujaGrid(disX, disY, anchoLinea, color){
                ctx.strokeStyle = color;
                ctx.lineWidth = anchoLinea;
                var columnas = [];
                var filas = [];
                for (i = disX; i < canvas.width; i += disX) {
                    ctx.beginPath();
                    ctx.moveTo(i, 0);
                    ctx.lineTo(i, canvas.height);
                    ctx.stroke();
                    columnas.push(i);
                }
                for (i = disY; i < canvas.height; i += disY) {
                    ctx.beginPath();
                    ctx.moveTo(0, i);
                    ctx.lineTo(ctx.canvas.width, i);
                    ctx.stroke();
                    filas.push(i);
                }
                columnas.push(0);
                filas.push(0);
                for (x = 0; x < columnas.length; x++) {
                    for (y = 0; y < filas.length; y++) {
                        cuadritos.push([columnas[x], filas[y], disX, disY]);
                    }
                }
            }



            inputSizeCuadros.addEventListener('change', function () {
                cuadritos = [];
                sizeCuadro.ancho = parseInt(this.value);
                sizeCuadro.alto = parseInt(this.value);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                dibujaGrid(sizeCuadro.ancho, sizeCuadro.alto, 1, "#44414B");
            }, false);

            canvas.width = contenedor.offsetWidth - 400;
            dibujaGrid(sizeCuadro.ancho, sizeCuadro.alto, 1, "#44414B");

        }
    }
};