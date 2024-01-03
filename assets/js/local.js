  /*
  1. Nest on click een in unsolashjs to save to the local storage 
    - name of the country (key)
    - one of the pics genrated by unsplash (value)
    
  2. Write the base of the function in the locaj js. - dysplayng the saved countires on the my list html upon loading on the webpage. 
  onload() in body element 
  onlaod in body element shouls trigger get from local storage 

  get from local storage function shouls get all objects as an array which in the loop for each element from the array we should get a card with photo tytle and search button generated. 
  when search buttton is clicked it should trigger seach function on index html (redirect us to it)
  
  */
  
  // Add a country to favourites
  function generateFavourites() { 
    // Retrieve the search history from local storage
    let savedFavourites = Object.entries(localStorage) // array of arrays 
    

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

