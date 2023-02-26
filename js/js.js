//Function Decimal
//funcion para que se active al momento de presionar el boton imprimir.
function capturarDecimal() {
    let datoRegistradoDecimal = document.getElementById("datoDecimal").value;
    let datoRegistradoDecimal2 = document.getElementById("datoDecimal").value;
    let datoRegistradoDecimal3 = document.getElementById("datoDecimal").value;
    //-----------------------------------Decimal a Binario
    //registra en una variable el dato ingresado por el usuario.
    let ArrayBinario = [];
    //Variable "ArrayBinario" array.
    while (datoRegistradoDecimal > 1) {
        //console.log("Dato insertado: " + datoRegistradoDecimal);
        // "%" Retorna el restante después de dividir el número de la izquierda en porciones enteras del de la derecha.
        ArrayBinario.push(datoRegistradoDecimal % 2);
        //console.log("Se le aplica % al dato: " + ArrayBinario + " y se agrega al Arreglo.");
        //console.log("Se divide entre 2: " + datoRegistradoDecimal / 2);
        //console.log("Se le aplica el Math.floor: " + Math.floor(datoRegistradoDecimal / 2));
        //Funcion Math.floor agarra el dato menor. Ej: 2.8 = 2.
        datoRegistradoDecimal = Math.floor(datoRegistradoDecimal / 2);
        //console.log(datoRegistradoDecimal);
        //console.log("Vuelta");
    }
    ArrayBinario.push(datoRegistradoDecimal);
    //Imprimir en el HTML el resultado.
    //-----------------------------------Decimal a Octario
    let ArrayOctario = [];
    while (datoRegistradoDecimal2 > 1) {
        ArrayOctario.push(datoRegistradoDecimal2 % 8);
        datoRegistradoDecimal2 = Math.floor(datoRegistradoDecimal2 / 8);
    }
    ArrayOctario.push(datoRegistradoDecimal2);
    //-----------------------------------Decimal a Hexadecimal
    let ArrayHexa = [];
    //console.log(datoRegistradoDecimal);
    while (datoRegistradoDecimal3 > 0) {
        var datoCheck = datoRegistradoDecimal3 % 16;
        if (datoCheck == 10) {
            datoCheck = "A";
        } else if (datoCheck == 11) {
            datoCheck = "B";
        } else if (datoCheck == 12) {
            datoCheck = "C";
        } else if (datoCheck == 13) {
            datoCheck = "D";
        } else if (datoCheck == 14) {
            datoCheck = "E";
        } else if (datoCheck == 15) {
            datoCheck = "F";
        } else {
            // console.log('else');
        }
        ArrayHexa.push(datoCheck);
        datoRegistradoDecimal3 = Math.floor(datoRegistradoDecimal3 / 16);
    }
    //ArrayOctario.push(datoRegistradoDecimal3);
    document.getElementById('resultadoDecimalBinario').innerHTML = parseInt(ArrayBinario.reverse().join(''));
    document.getElementById('resultadoDecimalOctadecimal').innerHTML = parseInt(ArrayOctario.reverse().join(''));
    document.getElementById('resultadoDecimalHexadecimal').innerHTML = ArrayHexa.reverse().join('');
}
//-----------------------------------Conversor Binario
//SCRIPT CONVERTIR BINARIO A Decimal
function capturarBinario() {
    var datoRegistradoBinario = document.getElementById("datoBinario").value;
    var array = [];
    var numeros = datoRegistradoBinario.split("");
    var entero = 0;
    var contador = 0;
    for (var i = numeros.length - 1; i >= 0; i--) {
        if (numeros[i] == 0) {
            array[i] = 0;
        } else {
            array[i] = Math.pow(2, contador);
        }
        contador++;
    }
    for (var a = 0; a < array.length; a++) {
        entero += array[a];
    }
    document.getElementById('resultadoBinarioDecimal').innerHTML = entero;
    let enteroLimpio = entero;
    //CONVERTIR BINARIO A OCTADECIMAL
    //Convertir Binario a Decimal, y de ahi hacer la conversion de Decimal a Octadecimal.
    let ArrayOctario = [];
    while (entero > 1) {
        ArrayOctario.push(entero % 8);
        entero = Math.floor(entero / 8);
    }
    ArrayOctario.push(entero);
    document.getElementById('resultadoBinarioOctadecimal').innerHTML = parseInt(ArrayOctario.reverse().join(''));
    //CONVERTIR BINARIO A HEXADECIMAL
    //Convertir Binario a Decimal, y de ahi hacer la conversion de Decimal  a Hexadecimal.
    console.log(entero);
    let ArrayHexa = [];
    while (enteroLimpio > 0) {
        var datoCheck = enteroLimpio % 16;
        if (datoCheck == 10) {
            datoCheck = "A";
        } else if (datoCheck == 11) {
            datoCheck = "B";
        } else if (datoCheck == 12) {
            datoCheck = "C";
        } else if (datoCheck == 13) {
            datoCheck = "D";
        } else if (datoCheck == 14) {
            datoCheck = "E";
        } else if (datoCheck == 15) {
            datoCheck = "F";
        } else {
            // console.log('else');
        }
        ArrayHexa.push(datoCheck);
        enteroLimpio = Math.floor(enteroLimpio / 16);
    }
    document.getElementById('resultadoBinarioHexadecimal').innerHTML = ArrayHexa.reverse().join('');
    return entero;
}
//------------------------------------------CONVERSOR OCTAL
function capturarOctal() {
    let datoRegistradoOctal = document.getElementById("datoOctal").value;
    let datoRegistradoOctal2 = document.getElementById("datoOctal").value;
    let datoRegistradoOctal3 = document.getElementById("datoOctal").value;
    // CONVERTIR OCTAL A DECIMAL
    //NO ESTA PEMITIDO ESTA CONVERSION!!!
    let octal = datoRegistradoOctal;
    let octalEnDecimal = parseInt(octal, 8); // La base es 8
    document.getElementById('resultadoOctadecimalDecimal').innerHTML = octalEnDecimal;
    let octalEnDecimalLimpio = octalEnDecimal;
    //CONVERTIR OCTAL A BINARIO
    //Convertir OCTAL a Decimal, y de ahi hacer la conversion de Decimal a BINARIO.
    let ArrayBinario = [];
    while (octalEnDecimal > 1) {
        ArrayBinario.push(octalEnDecimal % 2);
        octalEnDecimal = Math.floor(octalEnDecimal / 2);
    }
    ArrayBinario.push(octalEnDecimal);
    document.getElementById('resultadoOctadecimalBinario').innerHTML = parseInt(ArrayBinario.reverse().join(''));
        //CONVERTIR OCTAL A HEXADECIMAL
    //Convertir OCTAL a Decimal, y de ahi hacer la conversion de Decimal  a Hexadecimal.
    let ArrayHexa = [];
    //console.log(datoRegistradoDecimal);
    while (octalEnDecimalLimpio > 0) {
        var datoCheck = octalEnDecimalLimpio % 16;
        if (datoCheck == 10) {
            datoCheck = "A";
        } else if (datoCheck == 11) {
            datoCheck = "B";
        } else if (datoCheck == 12) {
            datoCheck = "C";
        } else if (datoCheck == 13) {
            datoCheck = "D";
        } else if (datoCheck == 14) {
            datoCheck = "E";
        } else if (datoCheck == 15) {
            datoCheck = "F";
        } else {
            // console.log('else');
        }
        ArrayHexa.push(datoCheck);
        octalEnDecimalLimpio = Math.floor(octalEnDecimalLimpio / 16);
    }
    document.getElementById('resultadoOctadecimalHexadecimal').innerHTML = ArrayHexa.reverse().join('');
    return octalEnDecimal;
}