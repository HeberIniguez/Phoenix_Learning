//Funcion para sumar 2 numeros.
function sumar(x, y){
    return x + y;
}

//Funcion para multiplicar dos numeros, verifica que se le pasen numeros.
function multiplicar(x, y){
    let mensaje;
    mensaje = "Ambos parametros deben ser numeros";

    if(isNaN(x) && isNaN(y)){
        return x * y;
    } else{
        return mensaje;
    }
}

//Funcion con un Switch para verificar si el mes corresponde a uno de invierno.
function esInvierno(message){
    switch(message){
        case "junio": return true;        
        case "julio": return true; 
        case "agosto": return true; 
        default: return false; 
    }
}

console.log(sumar(10, 5));
console.log(multiplicar(2, 20));
console.log(esInvierno("agosto"));
console.log(esInvierno("enero"));