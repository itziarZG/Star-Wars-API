"use strict";
console.log("hello");

function getSearch() {
  // console.log("entro");
  const name = document.querySelector(".input").value;
  //quiero imprimir todas las páginas pero no va bien con do, while ni ná..
  let myurl = `https://swapi.dev/api/people/?search=${name}`;

  getData(myurl);
}
const getData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //printa Data
      const list = data.results;
      for (const user of list) {
        document.querySelector(".result").innerHTML += `<p>${user.name}</p>`;
      }
      //hay más páginas?
      url = data.next;
      if (!!url) getData(url); //vuelvo a llamar a la función con la nueva url hasta null
    })
    .catch((error) => console.log(error));
};

//LISTENER AL BOTÓN DE BUSCAR
const btn = document.querySelector(".js-btn");
btn.addEventListener("click", getSearch); //al hacer click llama a GetSearch.
