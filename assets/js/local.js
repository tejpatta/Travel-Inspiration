
  // Add a country to favourites
  function generateFavourites() { 
    // Retrieve the search history from local storage
    let savedFavourites = Object.entries(localStorage) // array of arrays 
    // Card
    for (i = 0; i < savedFavourites.length; i++) {
    let favDiv = $("<div>").addClass("card m-3 col-lg-4 col-md-4 col-sm-12")
    let favRow = $("<div>").addClass("row g-0")
    let favColImg = $("<div>").addClass("col-sm-4")
    let favImage = $("<img>").addClass("img-fluid rounded-start").attr("src", savedFavourites[i][1])
    let favColTxt = $("<div>").addClass("col-sm-8")
    let favBody = $("<div>").addClass("card-body")
    let favTitle = $("<h5>").addClass("card-title").text((savedFavourites[i][0]).toUpperCase())
    let favBtn = $("<a>").addClass("btn btn-primary").attr('id','view-saved').text("View")
    
    favColImg.append(favImage)
    favBody.append(favTitle, favBtn)
    favColTxt.append(favBody)
    favRow.append(favColImg, favColTxt)
    favDiv.append(favRow)
    $("#saved-favourites").append(favDiv)
    }
}



