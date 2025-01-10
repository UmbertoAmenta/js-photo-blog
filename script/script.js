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

        // x aggiunta titolo
        const titleOverlayDom = cardDom.querySelector("p").innerHTML

        cardDom.addEventListener("click", function () {
            const photo = (cardDom.querySelector("div + img")).src

            hoverDom.classList.remove("hidden")
            hoverDom.querySelector("img").src = photo
            console.log(cardDom.querySelector("div + img"))
            cardDom.classList.add("card-clicked")
            pinDom.classList.add("hidden")

            // x aggiunta titolo
            hoverDom.querySelector("p").innerHTML = titleOverlayDom

            // cardDom.querySelector("div + img").classList.add("shadow")
        })

        // close overlay on click
        hoverDom.addEventListener("click", function () {
            hoverDom.classList.add("hidden")
            cardDom.classList.remove("card-clicked")
            pinDom.classList.remove("hidden")
            // cardDom.querySelector("div + img").classList.remove("shadow")

        })
    })
})    


// EVENTS
// btn click (richiesto)
btnDom.addEventListener("click", function () {
    hoverDom.classList.add("hidden")
})
