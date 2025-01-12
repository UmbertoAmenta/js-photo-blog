// DOM ELEMENTS
const boardDom = document.getElementById("board")
const btnDom = document.getElementById("btn")
const hoverDom = document.getElementById("overlay")


// MAIN PROGRAM
// page load
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
.then(function(res) {
    const album = res.data
    album.forEach(photo => {
        boardDom.innerHTML += `
            <div class="card">
                <div class="pin">
                    <img src="img/pin.svg" alt="">
                </div>
                <img src="${photo.url}" alt="loading...">
                <p>${photo.title}</p>
            </div>
        `
    })



    const cardsDom = document.querySelectorAll(".card")
        
    cardsDom.forEach(cardDom => {
        const pinDom = cardDom.querySelector(".pin")

        const titleOverlayDom = cardDom.querySelector("p").innerHTML

        cardDom.addEventListener("click", function () {
            const photo = (cardDom.querySelector("div + img")).src

            hoverDom.classList.remove("hidden")
            hoverDom.querySelector("img").src = photo
            cardDom.classList.add("card-clicked")
            pinDom.classList.add("hidden")

            // x aggiunta titolo nell'overlay
            hoverDom.querySelector("p").innerHTML = titleOverlayDom

            // estrazione foto dalla card per la visualizzazione
            // cardDom.querySelector("div + img").classList.add("shadow")
        })

        // close overlay on click
        hoverDom.addEventListener("click", function () {
            hoverDom.classList.add("hidden")
            cardDom.classList.remove("card-clicked")
            pinDom.classList.remove("hidden")

            // riposizionamento foto sulla card dopo visualizzazione
            // cardDom.querySelector("div + img").classList.remove("shadow")

        })
        
    })

    // simulazione di un errore
    // throw new Error()
}).catch(function(error) {
    // verifica presenza errore
    console.log(document.querySelectorAll(".pin + img"))
    document.querySelectorAll(".pin + img").forEach(function (imgDom) {
        imgDom.alt = "Il server non risponde"
    })

    // 
    // 
    // 
    // Informare della mancanza delle immagini
    // 
    // 
    // 
    
}).finally(function(){    
    const photoDom = document.querySelectorAll(".pin + img")

    photoDom.forEach(function (elm) {
        elm.classList.add("img-placeholder")
    })
})


// EVENTS
// btn click (richiesto)
btnDom.addEventListener("click", function () {
    hoverDom.classList.toggle("hidden")
})
