let rickMorty = document.getElementsByClassName("rickMorty")[0];

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {
    data.results.map((result) => {
      let dev = document.createElement("div");
      let text = document.createElement("p");
      let img = document.createElement("img");

      text.textContent = result.name;
      img.src = result.image;

      dev.appendChild(text);
      dev.appendChild(img);
      dev.setAttribute("class", "card");

      rickMorty.appendChild(dev);
    });
  });
