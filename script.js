/* Este es el listado de la información de las cartas  */
const listadoCartas = [
    {
        id: 1,
        nombre: "Pingüinos",
        imagen: "./imagenes/pinguino-volando-globo.avif",
        descripcion: "Son aves marinas no voladoras, dado que tienen plumas, pero no pueden volar.",
    },
    {
        id: 2,
        nombre: "Ajolotes",
        imagen: "./imagenes/axolotl-concepto-amor.avif",
        descripcion: "Es una salamandra un tipo de anfibio con cuerpo como el de un lagarto, una larga cola y una piel suave y húmeda.",
    },
    {
        id: 3,
        nombre: "Elefantes",
        imagen: "./imagenes/elefante-sentado-agitando-man.avif",
        descripcion: "Mamíferos, exclusivamente herbívoros cuya característica principal –además del gran tamaño– es su larga trompa y sus enormes orejas.",
    },
    {
        id: 4,
        nombre: "Gatos",
        imagen: "./imagenes/gato-montando-bicicleta.avif",
        descripcion: "Posee un pelaje suave y lanoso con una apariencia brillante, mantenida con una constante limpieza con la lengua.",
    },
    {
        id: 5,
        nombre: "Hipopotamos",
        imagen: "./imagenes/hipopotamo-agitando-mano.avif",
        descripcion: "Son animales voluminosos, cuadrúpedos, con cuerpo rechoncho, en forma de barril, y una cabeza grande de boca ancha y morro grueso.",
    },
    {
        id: 6,
        nombre: "Koalas",
        imagen: "./imagenes/koala-sentado.avif",
        descripcion:"Es redondo, peludito y tiene unos ojos saltones muy tiernos. Al mirarlo parece un oso de peluche."
    },
    {
        id: 7,
        nombre: "Mono",
        imagen: "./imagenes/mono-lindo-que-juega.avif",
        descripcion:"Dotados de cuatro extremidades prensiles y una cola, con un cuerpo cubierto de pelaje diverso."
    },
    {
        id: 8,
        nombre: "Perro",
        imagen: "./imagenes/perro-beber-leche-.avif",
        descripcion:"Se caracteriza por tener el olfato y el oído muy desarrollados.Es un animal inteligente y leal a su amo, de ahí su fama de ser el mejor amigo del hombre."
    },
]


/* Selección de los NODOS HTML (etiquetas/elementos html) */
const contenedorCartas = document.querySelector(".listadoCartas")



/* Función que recorre el listado de las cartas */
listadoCartas.forEach(
    (carta) => contenedorCartas.innerHTML += `
         <article class="card">
            <img src=${carta.imagen} alt="Imagen del proyecto">
            <div class="info">
                <h2>${carta.nombre}</h2>
                <p>${carta.descripcion}</p>
            </div>
        </article>`
)



