let url = 'https://coffee.alexflipnote.dev/random.json'
fetch(url)
    .then(res => res.json())

    .then((data) => {
        let con = document.getElementById("container")

        data.map(item => {
            let imgg = document.createElement("img")
            imgg.src = item.file
            con.appendChild("img")
            // console.log(item);

        })
    })