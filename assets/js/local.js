  // Add a country to favourites
  function addToFavorites() {
    // Retrieve the search history from local storage
    let searchHistory = localStorage.getItem('searchHistory');

  }
    // Retrieve the country information from the current search
    const countryName = document.getElementById('countryName').textContent;
    const countryDescription = document.getElementById('countryDescription').textContent;
  
    // Create an object representing the country
    const country = { name: countryName, description: countryDescription };
  
    // Add the country to the search history
    searchHistory.push(country);
  
    // Save the updated search history to local storage
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  
    // Get the first card in "My List"
    const firstCard = document.getElementById('card1');

let unsplashKey1 = "nkO4QtA3j8b37iVDzhJIitt4QwUCEv6UfCOB7-O2d1I";
let unsplashKey2 = "__q3dGBVbr-ZPGFeEpdoAGNhbQ24nZxvv6gIazuJnsA";
let travelKey1 = "nkO4QtA3j8b37iVDzhJIitt4QwUCEv6UfCOB7-O2d1I";
