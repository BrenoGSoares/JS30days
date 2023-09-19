// EX 1
const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// Leia a API dos países usando fetch e imprima o nome do país,
// capital, idiomas, população e área.
const fetchData = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();
    for (const country of countries) {
      console.log(
        country.name,
        country.capital,
        country.languages,
        country.population,
        country.area
      );
    }
  } catch (err) {
    console.error(err);
  }
};
console.log('===== async and await');
fetchData();

// Exercícios: Nível 2
// Imprima todos os nomes de gatos na variável catNames.
const cat = fetch(catsAPI)
  .then((response) => response.json())
  .then((catNames) => {
    for (const catName of catNames) {
      console.log(catName.name);
    }
  })
  .catch((error) => console.error(error));

// Exercícios: Nível 3
// Leia a API dos gatos e encontre o peso médio do gato em unidade métrica.
// Leia a API dos países e descubra os 10 maiores países
// Leia a API dos países e conte o número total de idiomas no mundo usados ​​como oficiais.
