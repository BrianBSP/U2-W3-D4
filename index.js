window.addEventListener("DOMContentLoaded", () => {
  fetch("https://api.pexels.com/v1/search?query=people/", {
    method: "get",
    headers: {
      authorization: "MO7q6g8cTiE9GkBeSLlBtHJp1eXZW1CSLtp4ShR6Ijpw9bPu1HcHqClF",
      "Content-Type": "text/html; charset=utf-8",
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
    .then(() => {})
    .catch((err) => console.log(err));
});
