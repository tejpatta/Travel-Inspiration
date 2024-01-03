// This function fetches photos of the searched for country from an API and displays them dynamically in a carousel on the homepage

function displayPhotos(countryInput){
    let unsplashKey1 = "nkO4QtA3j8b37iVDzhJIitt4QwUCEv6UfCOB7-O2d1I"; //Polly
    let unsplashKey2 = "__q3dGBVbr-ZPGFeEpdoAGNhbQ24nZxvv6gIazuJnsA"; //Tej
    let unsplashKey3; // Space for future API keys if requests exceed daily limit
    let unsplashKey4;
    let unsplashKey5;
    let unsplashKey6;
    
    let photoURL = "https://api.unsplash.com/search/photos/?client_id=" + unsplashKey2+ "&query=" + countryInput;
    
    fetch(photoURL)
    .then(function (response) {
        return response.json();
      })
      .then(function(data){
        $("#myFavorites").show() // Shows the favourites button after the photos have been fetched
        // The block of code below dynamically creates the HTML for the bootstrap carousel by adding classes and appending tags
        let firstImageDiv = $("<div>").addClass("carousel-item active")
        let firstCountryImage = $("<img>").addClass("d-block w-100").attr("src", (data.results[0].urls.raw + '&fit=crop&w=550&h=500'))
        let firstImageCaptionDiv = $("<div>").addClass("carousel-caption d-none d-md-block")
        let firstImageCaption = $("<h5>").text(data.results[0].description)
        firstImageCaptionDiv.append(firstImageCaption)
        firstImageDiv.append(firstCountryImage, firstImageCaptionDiv)
        $(".carousel-inner").append(firstImageDiv)

        // This for loop creates two more carousel slides from the API JSON object
      for (i = 1; i < 3; i++) {
        let ImageDiv = $("<div>").addClass("carousel-item")
        let CountryImage = $("<img>").addClass("d-block w-100").attr("src", data.results[i].urls.raw + '&fit=crop&w=550&h=500')
        let ImageCaptionDiv = $("<div>").addClass("carousel-caption d-none d-md-block")
        let ImageCaption = $("<h5>").text(data.results[i].description)
        ImageCaptionDiv.append(ImageCaption)
        ImageDiv.append(CountryImage, ImageCaptionDiv)
        $(".carousel-inner").append(ImageDiv)
      }
})
}

