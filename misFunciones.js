function fuerza(){
    console.log(document.Camp.carga1.value);
    console.log(document.Camp.carga2.value);
    console.log(document.Camp.distancia.value);
    document.Camp.fuerzat.value=( 9*Math.pow(10, 9) * Number(document.Camp.carga1.value) * Number(document.Camp.carga2.value) ) / ( Number(document.Camp.distancia.value) * Number(document.Camp.distancia.value) );
}

