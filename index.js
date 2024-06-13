window.addEventListener("DOMContentLoaded", () => {
  fetch("https://api.pexels.com/v1/search?query=cars/", {
    method: "get",
    body: JSON.stringify(),
    headers: {
      authorization: "MO7q6g8cTiE9GkBeSLlBtHJp1eXZW1CSLtp4ShR6Ijpw9bPu1HcHqClF",
      "Content-Type": "applacation/json",
    },
  })
    .then((resp) => {
      if (resp.ok) {
        console.log(resp);
        return resp.json();
      } else {
        throw new Error("Errore nel reperimento dati");
      }
    })
    .then((carObj) => {
      const row = document.getElementById("row-container");

      carObj.photos.forEach((car) => {
        const img = document.querySelector("#row-container > img");
        img.src = car.src;
        row.appendChild(img);
      });
    })
    .catch((err) => console.log(err));
});
