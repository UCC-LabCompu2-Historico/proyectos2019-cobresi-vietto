function fuerza(){
    console.log(document.Camp.carga1.value);
    console.log(document.Camp.carga2.value);
    console.log(document.Camp.distancia.value);
    document.Camp.fuerzat.value=( 9*Math.pow(10, 9) * Number(document.Camp.carga1.value) * Number(document.Camp.carga2.value) ) / ( Number(document.Camp.distancia.value) * Number(document.Camp.distancia.value) );
}

function grilla(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle= "black";

    ctx.beginPath();

    for(var i=0;i<canvas.width;i=i+10){
        ctx.moveTo(i,0);
        ctx.lineTo(i,canvas.height);}
    for(var i=0;i<canvas.height;i=i+10){
        ctx.moveTo(0,i);
        ctx.lineTo(canvas.width,i);}

    ctx.strokeStyle= "white";
    ctx.stroke();
    ctx.closePath();
}

function togglear(el){

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    if(el.checked){
        grilla();
    }else{
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }
}


function circulos() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d")

    ctx.fillStyle = "#E61C1C";
    ctx.beginPath();
    ctx.arc(47, canvas.height/2, 28,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = "#1C5CE6";
    ctx.beginPath();
    ctx.arc(47, 300, 28,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();
}