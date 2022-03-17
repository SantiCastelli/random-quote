const quotes = [
    {
        quote:
            "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
        author: " Life"
    },
    {
        quote:
            "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
        author: "John Kenneth Galbraith"
    },
    {
        quote:
            "God save me from my friends. I can protect myself from my enemies.",
        author: "Claude Louis Hector de Villars "
    },
    {
        quote: "The price of anything is the amount of life you exchange for it.",
        author: "David Thoreau"
    },
    {
        quote:
            "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
        author: "Charles Lindbergh"
    },
    {
        quote:
            "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
        author: " Tyne Daly"
    }
];

let vecesClic = 0; // el usuario ha hecho 0 veces clic en el botón al inicio de la app

// 1. Identificar los elementos del DOM en los que tenemos asociar eventos. Recuperar el elemento del DOM y utilizar el método addEventListener
    clic = document.querySelector("#button-frase")
    clic.addEventListener("click", function() {
        vecesClic++;
        let newQuote = getRandomQuote()
        document.querySelector(".quote-text").textContent =  newQuote.quote
        document.querySelector(".quote--author").textContent = newQuote.author
    })
// 2. Identificar si existe algún tipo de estado en nuestra aplicación y crear las variables globales para almacenar esta información

// 3. Cada vez que se capture un evento, considerar si hay que actualizar la interfaz del usuario con nueva info o modificar la existente

// Obtener una posición del array al azar
function getRandomQuote() {

    // calcular un número al azar entre todas las posiciones disponables del array. Nuestro array es "quotes", no "colors"

    let quote = quotes[Math.floor(Math.random() * quotes.length)];

    return quote;
}