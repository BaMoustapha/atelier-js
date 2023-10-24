const content = document.querySelector(".cards");
const api_url = 'https://restcountries.com/v3.1/all';
const toggleButton = document.getElementById('myButton');
const api_url2 = 'https://restcountries.com/v3.1/region/africa';
const api_url3 = 'https://restcountries.com/v3.1/region/america';
const api_url4 = 'https://restcountries.com/v3.1/region/asia';
const api_url5 = 'https://restcountries.com/v3.1/region/europe';
const api_url6 = 'https://restcountries.com/v3.1/region/oceania';
const searchCountry = document.querySelector("#search")






async function fetchCountries() {
        

        try {
            const response = await fetch(api_url);
            const countries = await response.json();
            
            countries.forEach(country => {
                
                content.innerHTML += 
                              
                  `<div class="col-md-3 mx-auto mb-5">
                      <div class="card shadow rounded" style="width: 18rem;">
                        
                        <img src="${country.flags.svg}" type="button" class="card-img-top img-fluid w-auto" style="height: 180px; width: 18rem;" alt="">
                        </a>
                        <div class="card-body h-auto">
                          <h5 class="card-title"><b>${country.name.common}</b></h5>
                          <p class="card-text"><b>Population</b> : ${country.population}</p>
                          <p class="card-text"><b>Region</b> : ${country.region}</p>
                          <p class="card-text"><b>Capital</b> : ${country.capital}</p>
                        </div>
                      </div>
                  </div>
                  
                  `
    
            });
          
            }catch (error) {
                    console.error('Erreur:', error);
                }
}

fetchCountries()
              


toggleButton.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        // Switch to light mode
        document.body.classList.remove('dark-mode');
    } else {
        // Switch to dark mode
       document.body.classList.add('dark-mode');
    }
});


async function fetchCountries2(){

  

  try {
    const response2 = await fetch(api_url2);
    const countries2 = await response2.json();

    // Clear existing content
    content.innerHTML = '';
    countries2.forEach(country => {
      
      content.innerHTML += 
      `
        <div class="col-md-3 mb-5">
          <div class="card shadow rounded" style="width: 18rem;">
            <img src="${country.flags.svg}" class="card-img-top img-fluid w-auto" style="height: 180px; width: 18rem;" alt="${country.name} Flag">
            <div class="card-body h-auto">
              <h5 class="card-title"><b>${country.name.common}</b></h5>
              <p class="card-text"><b>Population</b>: ${country.population}</p>
              <p class="card-text"><b>Region</b>: ${country.region}</p>
              <p class="card-text"><b>Capital</b>: ${country.capital}</p>
            </div>
          </div>
        </div>
      `;
    });

  } catch (error) {
    console.error('Erreur:', error);
  }


}

let bouton = document.getElementById("africa");
bouton.addEventListener("click", fetchCountries2);

async function fetchCountries3(){

  

  try {
    const response3 = await fetch(api_url3);
    const countries3 = await response3.json();

    // Clear existing content
    content.innerHTML = '';
    countries3.forEach(country => {
      content.innerHTML += 
      `
        <div class="col-md-3 mb-5">
          <div class="card shadow rounded" style="width: 18rem;">
            <img src="${country.flags.svg}" class="card-img-top img-fluid w-auto" style="height: 180px; width: 18rem;" alt="${country.name} Flag">
            <div class="card-body h-auto">
              <h5 class="card-title"><b>${country.name.common}</b></h5>
              <p class="card-text"><b>Population</b>: ${country.population}</p>
              <p class="card-text"><b>Region</b>: ${country.region}</p>
              <p class="card-text"><b>Capital</b>: ${country.capital}</p>
            </div>
          </div>
        </div>
      `;
    });

  } catch (error) {
    console.error('Erreur:', error);
  }
  
}

document.getElementById("america").addEventListener("click", fetchCountries3);

async function fetchCountries4(){

  

  try {
    const response4 = await fetch(api_url4);
    const countries4 = await response4.json();

    // Clear existing content
    content.innerHTML = '';

    countries4.forEach(country => {
      content.innerHTML += 
      `
        <div class="col-md-3 mb-5">
          <div class="card shadow rounded" style="width: 18rem;">
            <img src="${country.flags.svg}" class="card-img-top img-fluid w-auto" style="height: 180px; width: 18rem;" alt="${country.name} Flag">
            <div class="card-body h-auto">
              <h5 class="card-title"><b>${country.name.common}</b></h5>
              <p class="card-text"><b>Population</b>: ${country.population}</p>
              <p class="card-text"><b>Region</b>: ${country.region}</p>
              <p class="card-text"><b>Capital</b>: ${country.capital}</p>
            </div>
          </div>
        </div>
      `;
    });

  } catch (error) {
    console.error('Erreur:', error);
  }

}

document.getElementById("asia").addEventListener("click", fetchCountries4);

async function fetchCountries5(){

  

  try {
    const response5 = await fetch(api_url5);
    const countries5 = await response5.json();

    // Clear existing content
    content.innerHTML = '';

    countries5.forEach(country => {
      content.innerHTML += 
      `
        <div class="col-md-3 mb-5">
          <div class="card shadow rounded" style="width: 18rem;">
            <img src="${country.flags.svg}" class="card-img-top img-fluid w-auto" style="height: 180px; width: 18rem;" alt="${country.name} Flag">
            <div class="card-body h-auto">
              <h5 class="card-title"><b>${country.name.common}</b></h5>
              <p class="card-text"><b>Population</b>: ${country.population}</p>
              <p class="card-text"><b>Region</b>: ${country.region}</p>
              <p class="card-text"><b>Capital</b>: ${country.capital}</p>
            </div>
          </div>
        </div>
      `;
    });

  } catch (error) {
    console.error('Erreur:', error);
  }

}

document.getElementById("europe").addEventListener("click", fetchCountries5);

async function fetchCountries6(){

  

  try {
    const response6 = await fetch(api_url6);
    const countries6 = await response6.json();

    // Clear existing content
    content.innerHTML = '';
    countries6.forEach(country => {
      content.innerHTML += 
      `
        <div class="col-md-3 mb-5">
          <div class="card shadow rounded" style="width: 18rem;">
            <img src="${country.flags.svg}" class="card-img-top img-fluid w-auto" style="height: 180px; width: 18rem;" alt="${country.name} Flag">
            <div class="card-body h-auto">
              <h5 class="card-title"><b>${country.name.common}</b></h5>
              <p class="card-text"><b>Population</b>: ${country.population}</p>
              <p class="card-text"><b>Region</b>: ${country.region}</p>
              <p class="card-text"><b>Capital</b>: ${country.capital}</p>
            </div>
          </div>
        </div>
      `;
    });

  } catch (error) {
    console.error('Erreur:', error);
  }
}

document.getElementById("oceanie").addEventListener("click", fetchCountries6);


async function fetchCountry(){

  try {
    const response = await fetch(api_url);
    const countries = await response.json();

    const showCountries = countries => {

  
      countries.forEach(country => {
        content.innerHTML = "";
        content.innerHTML += 
        `
          <div class="col-md-3 mb-5">
            <div class="card shadow rounded" style="width: 18rem;">
              <img src="${country.flags.svg}" class="card-img-top img-fluid w-auto" style="height: 180px; width: 18rem;" alt="${country.name} Flag">
              <div class="card-body h-auto">
                <h5 class="card-title"><b>${country.name.common}</b></h5>
                <p class="card-text"><b>Population</b>: ${country.population}</p>
                <p class="card-text"><b>Region</b>: ${country.region}</p>
                <p class="card-text"><b>Capital</b>: ${country.capital}</p>
              </div>
            </div>
          </div>
        `;
      });
    
      
     }
    searchCountry.addEventListener("input", (e) => {
  
      const valeur = e.target.value.toLowerCase();
    
      const pays = countries.filter((element) =>
      element.name.common.toLowerCase().includes(valeur)
      );
      
      showCountries(pays)
    }
    )

  } catch (error) {
    console.error('Erreur:', error);
  }
  
}


document.addEventListener("DOMContentLoaded", fetchCountry);
