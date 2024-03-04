alert("Elige tu propia aventura: El abominable hombre de las nieves");
let nombre = prompt("¿Cómo deberia llamarse el protagonista de la aventura?");
let jugar = " Ingrese JUGAR si quiere continuar";
let abandonar = " Ingrese ABANDONAR si no quiere jugar";
let advertencia = prompt("Hola " + nombre +  " , este libro es distinto de otros libros, ¡Tu y solo TU eres el responsable de lo que ocurra en esta historia!" + jugar + abandonar);

while(advertencia !="ESC"){
    switch(advertencia){
        case "JUGAR":
            alert(nombre + " hay peligros, disyuntivas, aventuras y consecuencias. Tu debes utilizar tus numerosos talentos y buena parte de tu enorme inteligencia. Una decision equivocada puede acabar en desastre, incluso en la muerte");
            break;
        case "ABANDONAR":
            alert(nombre + " no desesperes, en cualquier momento podes volver atras y elegir otra opcion, modificar el camino de tu historia y cambiar el resultado");
            break;
    }
    advertencia = prompt("Hola " + nombre +  " , este libro es distinto de otros libros, ¡Tu y solo TU eres el responsable de lo que ocurra en esta historia!" + jugar + abandonar);
}

