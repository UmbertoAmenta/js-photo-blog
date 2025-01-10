// DOM ELEMENTS
const boardDom = document.getElementById("board")
const btnDom = document.getElementById("btn")
const hoverDom = document.getElementById("overlay")

// FUNCTIONS


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
        console.log(cardDom)
        cardDom.addEventListener("click", function () {
            hoverDom.classList.remove("hidden")
            const photo = (cardDom.querySelector("div + img")).src
            console.log(photo)
            hoverDom.querySelector("img").src = photo
        })        
    })
})
            


// EVENTS

btnDom.addEventListener("click", function () {
    hoverDom.classList.add("hidden")
})