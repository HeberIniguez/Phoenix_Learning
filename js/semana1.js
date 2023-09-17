//Funcion para sumar 2 numeros.
function sumar(x, y){
    return x + y;
}

//Funcion para multiplicar dos numeros, verifica que se le pasen numeros.
function multiplicar(x, y){
    let mensaje;
    mensaje = "Ambos parametros deben ser numeros";

    if(!isNaN(x) && !isNaN(y)){
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

function esCovid(sintomas, covid){
    let cont = 0;

    for(let i=0; i<3; i++){
        if(sintomas[i] == covid[i]){
            cont++;
        }
    }

    if(cont>=2){
        return true;
    } else {
        return false;
    }
}

function horarioCursada(materia){
    switch(materia){
        case "MATEMATICA": return "Jueves - 13:00";
        case "LENGUA": return "Lunes - 15:00";
        case "Geografia": return "Viernes - 20:00";
        default: return "MATERIA NO ENCONTRADA";
    }
}

//Imprime en el documento html la suma de los numeros enviados por parametro.
document.write("La suma de 10 y 5 son: ");
document.write(sumar(10, 5));

//Imprime en el documento html la multiplicacion de los numeros enviados por parametro, pero realiza una verificacion.
document.write("<br/>La multiplicacion de 2 y 20 son: ");
document.write(multiplicar(2, 20));

//Si el mes pertenece a uno de los de invierno devuelve "True" caso contrario devuelve "False"
document.write("<br/>El mes de agosto pertenece a invierno: ");
document.write(esInvierno("agosto"));
document.write("<br/>El mes de enero pertenece a invierno: ");
document.write(esInvierno("enero"));

//La funcion devuelve true o false, dependiendo de los sintomas del paciente.
let sintomasPaciente = ["fiebre", "dolor muscular", "vomitos"];
let sintomasCovid = ["fiebre", "dolor muscular", "perdida de gusto"];
document.write("<br/> Paciente 1 tiene Covid:" +  esCovid(sintomasPaciente, sintomasCovid));
sintomasPaciente = ["fiebre", "titila ojo", "vomitos"];
document.write("<br/> Paciente 2 tiene Covid:" +  esCovid(sintomasPaciente, sintomasCovid));

//La funcion devuelve el dia y hora de la materia. 
document.write("<br/> Horario materia LENGUA: " + horarioCursada("LENGUA"));