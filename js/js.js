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
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
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
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
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

function capturarHexa() {
    let datoRegistradoHexa = document.getElementById("datoHexa").value;
    let datoRegistradoHexa2 = document.getElementById("datoHexa").value;
    let datoRegistradoHexa3 = document.getElementById("datoHexa").value;
    //-------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------
    //HEXADECIMAL A DECIMAL
    var hex = datoRegistradoHexa;
    var num = parseInt(hex, 16);
    document.getElementById('resultadoHexadecimalDecimal').innerHTML = num;
    var numLimpio = num;
    //CONVERTIR HEXA A BINARIO
    //Convertir HEXA a Decimal, y de ahi hacer la conversion de Decimal a BINARIO.
    let ArrayBinario = [];
    while (num > 1) {
        ArrayBinario.push(num % 2);
        num = Math.floor(num / 2);
    }
    ArrayBinario.push(num);
    document.getElementById('resultadoHexadecimalBinario').innerHTML = parseInt(ArrayBinario.reverse().join(''));
    let ArrayOctario = [];
    while (numLimpio > 1) {
        ArrayOctario.push(numLimpio % 8);
        numLimpio = Math.floor(numLimpio / 8);
    }
    ArrayOctario.push(numLimpio);
    document.getElementById('resultadoHexadecimalOctadecimal').innerHTML = parseInt(ArrayOctario.reverse().join(''));
}
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-----------------------------CALCULADORA---------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
function calcular() {
    //Recoje que ecuacion va a efectuar
    let datoRegistradoTipoEcuacion = document.getElementById("seleccionEcuacion").value;
    //Recoje digitos del input
    let datoRegistradoInputDatoUno = document.getElementById("inputDatoUno-calculadora").value;
    let datoRegistradoInputDatoDos = document.getElementById("inputDatoDos-calculadora").value;
    //Recoje datos tipo de conversion
    let datoRegistradoTipoDatoUno = document.getElementById("tipoDatoUno").value;
    let datoRegistradoTipoDatoDos = document.getElementById("tipoDatoDos").value;
    //Recoje que tipo de resultado quieres
    let datoRegistradoTipoResultado = document.getElementById("tipoResultado").value;
    /*
    console.log("Tipo de ecuacion");
    console.log(datoRegistradoTipoEcuacion);
    console.log("Dato ingresado Uno");
    console.log(datoRegistradoInputDatoUno);
    console.log("tipo seleccionado Uno");
    console.log(datoRegistradoTipoDatoUno);
    console.log("Dato ingresado Dos");
    console.log(datoRegistradoInputDatoDos);
    console.log("tipo seleccionado Dos")
    console.log(datoRegistradoTipoDatoDos);
    console.log("Tipo de resultado");
    console.log(datoRegistradoTipoResultado);

    console.log("-------------------------------");
    */
    //Dato Ya convertido
    let resultadoCompleto = 0;
    let datoDecimalConvertidoUno = 0;
    let datoDecimalConvertidoDos = 0;
    //CONVERTIR LOS DATOS A DECIMAL UNO
    if (datoRegistradoTipoDatoUno == "Decimal") {
        datoDecimalConvertidoUno = datoRegistradoInputDatoUno;
        console.log("Selecciono Decimal" + datoDecimalConvertidoUno);
    } else if (datoRegistradoTipoDatoUno == "Binario") {
        var array = [];
        var numeros = datoRegistradoInputDatoUno.split("");
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
        datoDecimalConvertidoUno = entero;
        console.log("Seleccionaste Binario" + datoDecimalConvertidoUno);
    } else if (datoRegistradoTipoDatoUno == "Octadecimal") {
        let octal = datoRegistradoInputDatoUno;
        let octalEnDecimal = parseInt(octal, 8); // La base es 8
        datoDecimalConvertidoUno = octalEnDecimal;
        console.log("Seleccionaste Octadecimal" + datoDecimalConvertidoUno);
    } else if (datoRegistradoTipoDatoUno == "Hexadecimal") {
        var hex = datoRegistradoInputDatoUno;
        var num = parseInt(hex, 16);
        datoDecimalConvertidoUno = num;
        console.log("Seleccionaste Hexadecimal" + datoDecimalConvertidoUno);
    }
    //CONVERTIR LOS DATOS A DECIMAL DOS
    if (datoRegistradoTipoDatoDos == "Decimal") {
        datoDecimalConvertidoDos = datoRegistradoInputDatoDos;
        console.log("Selecciono Decimal" + datoDecimalConvertidoDos);
    } else if (datoRegistradoTipoDatoDos == "Binario") {
        var array = [];
        var numeros = datoRegistradoInputDatoDos.split("");
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
        datoDecimalConvertidoDos = entero;
        console.log("Seleccionaste Binario" + datoDecimalConvertidoDos);
    } else if (datoRegistradoTipoDatoDos == "Octadecimal") {
        let octal = datoRegistradoInputDatoDos;
        let octalEnDecimal = parseInt(octal, 8); // La base es 8
        datoDecimalConvertidoDos = octalEnDecimal;
        console.log("Seleccionaste Octadecimal" + datoDecimalConvertidoDos);
    } else if (datoRegistradoTipoDatoDos == "Hexadecimal") {
        var hex = datoRegistradoInputDatoDos;
        var num = parseInt(hex, 16);
        datoDecimalConvertidoDos = num;
        console.log("Seleccionaste Hexadecimal" + datoDecimalConvertidoDos);
    }
    //CONVERTIR LOS DATOS A DECIMAL
    if (datoRegistradoTipoEcuacion == "Suma") {
        resultadoCompleto = parseInt(datoDecimalConvertidoUno) + parseInt(datoDecimalConvertidoDos);
        console.log("La Suma de estos es: " + resultadoCompleto);
    } else if (datoRegistradoTipoEcuacion == "Resta") {
        resultadoCompleto = parseInt(datoDecimalConvertidoUno) - parseInt(datoDecimalConvertidoDos);
        console.log("La Resta de estos es: " + resultadoCompleto);
    } else if (datoRegistradoTipoEcuacion == "Multiplicacion") {
        resultadoCompleto = parseInt(datoDecimalConvertidoUno) * parseInt(datoDecimalConvertidoDos);
        console.log("La Multiplicacion de estos es: " + resultadoCompleto);
    } else if (datoRegistradoTipoEcuacion == "Division") {
        resultadoCompleto = parseInt(datoDecimalConvertidoUno) / parseInt(datoDecimalConvertidoDos);
        console.log("La Division de estos es: " + resultadoCompleto);
    }

    var resultadoCompletoLimpio1 = resultadoCompleto;
    var resultadoCompletoLimpio2 = resultadoCompleto;
    var resultadoCompletoLimpio3 = resultadoCompleto;
    var resultadoCompletoLimpio4 = resultadoCompleto;


    //SELECCIONAR EN QUE QUIERES EL RESULTADO.
    if (datoRegistradoTipoResultado == "Decimal") {
        document.getElementById('resultadoConversionCalculadora').innerHTML = resultadoCompletoLimpio1;
    } else if (datoRegistradoTipoResultado == "Binario") {
        let ArrayBinarioCalculadora = [];
        while (resultadoCompletoLimpio2 > 1) {
            ArrayBinarioCalculadora.push(resultadoCompletoLimpio2 % 2);
            resultadoCompletoLimpio2 = Math.floor(resultadoCompletoLimpio2 / 2);
        }
        ArrayBinarioCalculadora.push(resultadoCompletoLimpio2);
        console.log("El resultado en Binario es: "+ArrayBinarioCalculadora);
        document.getElementById('resultadoConversionCalculadora').innerHTML = parseInt(ArrayBinarioCalculadora.reverse().join(''));
    } else if (datoRegistradoTipoResultado == "Octadecimal") {
        let ArrayOctarioCalculadora = [];
        while (resultadoCompleto > 1) {
            ArrayOctarioCalculadora.push(resultadoCompleto % 8);
            resultadoCompleto = Math.floor(resultadoCompleto / 8);
        }
        ArrayOctarioCalculadora.push(resultadoCompleto);
        console.log("El resultado en Octario es: "+ArrayOctarioCalculadora);
        document.getElementById('resultadoConversionCalculadora').innerHTML = parseInt(ArrayOctarioCalculadora.reverse().join(''));
    } else if (datoRegistradoTipoResultado == "Hexadecimal") {
        let ArrayHexaCalculadora = [];
        //console.log(datoRegistradoDecimal);
        while (resultadoCompleto > 0) {
            var datoCheck = resultadoCompleto % 16;
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
            ArrayHexaCalculadora.push(datoCheck);
            resultadoCompleto = Math.floor(resultadoCompleto / 16);
        }
        console.log("El resultado en Hexa es: "+ArrayHexaCalculadora);
        document.getElementById('resultadoConversionCalculadora').innerHTML = ArrayHexaCalculadora.reverse().join('');
    }
}