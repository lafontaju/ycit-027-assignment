function getCatImage() {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => {
            // Resolve the promise we got from calling then() to the promise that we get from calling json()
            return response.json();
        })
        .then((data) => {
            console.log(data[0].url);
            const newImg = document.createElement("img");
            newImg.alt = "cat image"
            newImg.src = data[0].url;

            document.getElementById("image-container").appendChild(newImg);
        });
}