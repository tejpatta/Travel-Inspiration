  /* TODO
  DONE 1. Nest on click event in Unsplash Js to be able to save to local storage both city name and url for image ( countyInput(key), imageUrl (value))
  DONE 2. Edit MyList.HTML to have same <head>, <nav>, <script> as index html
  DONE 3. add onload funtion in MyLit.html <body> to load the list of favourited cuuntires
  5. Create draft card element with custom id and classes for responsive design
  4. Create a (onload) function to display favourited countires on MyList.html 
    this funtion shpuld create the card woth the pic and button
    -each card title shpuld be updated with 'key'- county name 
    -each card img shpuld be updated with 'value' - urls src 
    - the buttons shpuld be cleared every time and generated when mylost.html is opened to avoid repetition of the buttons 
  5. Create on click funtion for card buttons that will:
    -take us back to index.html
    -start search function 
  */
  
  // Add a country to favourites
  function generateFavourites() { 
    // Retrieve the search history from local storage
    let savedFavourites = Object.entries(localStorage) // array of arrays 


  }
  /*
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
    */

