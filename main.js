let url = 'https://coffee.alexflipnote.dev/random.json'
fetch(url)
    .then(res => res.json())

    .then((data) => {
        let con = document.getElementById("container")
            let img = document.createElement("img")
            img.src = data.file
            con.appendChild(img)
    })
