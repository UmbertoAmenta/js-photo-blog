// DOM ELEMENTS
const boardDom = document.getElementById("board")

// FUNCTIONS


// MAIN PROGRAM
// page load
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
.then(function(res) {
    console.log(res)
    const album = res.data
    console.log(album)
    album.forEach(photo => {
        console.log(photo)
        boardDom.innerHTML += `
            <div class="card">
                <div class="pin">
                    <img src="img/pin.svg" alt="">
                </div>
                <img src="${photo.url}" alt="loading...">
                <p>${photo.title}</p>
            </div>
        `
    });
})


// EVENTS