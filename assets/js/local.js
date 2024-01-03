  /* TODO
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
    // create card
    for (i = 0; i < savedFavourites.length; i++) {
    let favDiv = $("<div>").addClass("card mb-3")
    let favRow = $("<div>").addClass("row g-0")
    let favColImg = $("<div>").addClass("col-sm-4")
    let favImage = $("<img>").addClass("img-fluid rounded-start").attr("src", savedFavourites[i][1])
    let favColTxt = $("<div>").addClass("col-sm-8")
    let favBody = $("<div>").addClass("card-body")
    let favTitle = $("<h5>").addClass("card-title").text(savedFavourites[i][0])
    let favBtn = $("<a>").addClass("btn btn-primary").addId("get-info")
    favImage.append(favColImg)
    favTitle.append(favBody)
    favBtn.append(favBody)
    favBody.append(favColTxt)
    favColImg.append(favRow)
    favColTxt.append(favRow)
    favRow.append(favDiv)
    favDiv.append($("#saved-favourites"))
  }

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

