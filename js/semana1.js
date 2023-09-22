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
document.write("<br/> Paciente 1 tiene Covid: " +  esCovid(sintomasPaciente, sintomasCovid));
sintomasPaciente = ["fiebre", "titila ojo", "vomitos"];
document.write("<br/> Paciente 2 tiene Covid: " +  esCovid(sintomasPaciente, sintomasCovid));

//La funcion devuelve el dia y hora de la materia. 
document.write("<br/> Horario materia Lengua: " + horarioCursada("LENGUA"));
document.write("<br/> Horario materia Matematica: " + horarioCursada("MATEMATICA"));
document.write("<br/> Horario materia Programacion: " + horarioCursada("PROGRAMACION"));

// --------------------- JS0 ----------------

//1. Crea 10 variables de tipo string (cadena de texto) y asignale cualquier texto.

let materia_1 = "Programacion Estructurada";
let materia_2 = "Programacion Orientada a Objetos";
let materia_3 = "Algoritmos y Estructura de Datos";
let materia_4 = "Calculo Diferencial";
let materia_5 = "Calculo Integral";
let materia_6 = "Calculo Vectorial";
let materia_7 = "Ecuaciones Diferenciales";
let materia_8 = "Matematicas Discretas";
let materia_9 = "Algebra Lineal";
let materia_10 = "Ingenieria de Software";


//2. Crea 10 variables de tipo number (numero) y asígnale cualquier número.

let numeroUno = 1;
let numeroDos = 2;
let numeroTres = 3;
let numeroCuatro = 4;
let numeroCinco = 5;
let numeroSeis = 6;
let numeroSiete = 7;
let numeroOcho = 8;
let numeroNueve = 9;
let numeroDiez = 10;


//3. Crea 10 variables de tipo boolean (true/false) y asígnale cualquier valor.

let _materia_1 = true;
let _materia_2 = false;
let _materia_3 = true;
let _materia_4 = false;
let _materia_5 = true;
let _materia_6 = false;
let _materia_7 = true;
let _materia_8 = false;
let _materia_9 = true;
let _materia_10 = false;

console.log("Numero de la Materia: " + numeroSiete);
console.log("Nombre de la Materia: " + materia_7 );
console.log("Vigente: " + _materia_7 );

console.log("\nNo." + numeroDiez + " -  " + materia_10 + ": " + _materia_10 );