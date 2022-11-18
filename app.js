let searchButton = document.getElementById('search-button');
let countryInput = document.getElementById('country-input');

searchButton.addEventListener('click', () => {
    let countryName = countryInput.value;
    countryInput.value = '';
    const container = document.querySelector('.container');
    // console.log(countryName);
    let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data[0]);
        let resultContainer = document.querySelector('.result')
        resultContainer.innerHTML = `
        <div class="img-box">
                <img src="${data[0].flags.png}" />
                <h3>${data[0].name.common}</h3>
            </div>
            <div class="text-box">
                <h4>Capital: ${data[0].capital}</h4>
                <p>Area: ${data[0].area}</p>
                <p>Continents: ${data[0].continents}</p>
                <p>Population: ${data[0].population}</p>
                <p>Language: ${Object.values(data[0].languages).toString().split(',').join(',')}</p>
                <p>Curency: ${data[0].currencies[Object.keys(data[0].currencies)].name}</p>
            </div>
        `;
        // <p>Curency: ${data[0].currencies.name}</p>
        container.appendChild(resultContainer);
    }).catch(() => {
        if(countryName.length == 0){
            alert(`The Input Field can't be empty.`);
        }
        else{
            alert(`Please enter a valid Country Name`)
        }
    })
});