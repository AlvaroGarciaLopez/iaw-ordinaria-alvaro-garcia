
const pt = require("prompt-sync")({sigint: true})
const palabras = []

cadenaInput = pt("introducir texto -> ")



while (cadenaInput != "salir") {
    palabras.push(cadenaInput)
    cadenaInput = pt("introducir texto -> ")
    
}

console.log("la cadena es: " + palabras );