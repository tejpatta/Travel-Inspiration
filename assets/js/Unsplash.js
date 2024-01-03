
function displayPhotos(countryInput){
    let unsplashKey1 = "nkO4QtA3j8b37iVDzhJIitt4QwUCEv6UfCOB7-O2d1I"; //Polly
    let unsplashKey2 = "__q3dGBVbr-ZPGFeEpdoAGNhbQ24nZxvv6gIazuJnsA"; //Tej
    let unsplashKey3;
    let unsplashKey4;
    let unsplashKey5;
    let unsplashKey6;
    
    let photoURL = "https://api.unsplash.com/search/photos/?client_id=" + unsplashKey2+ "&query=" + countryInput;
    
    fetch(photoURL)
    .then(function (response) {
        return response.json();
      })
      .then(function(data){
        myFav.show() //when loaded add to fav button will be dislayd
        let firstImageDiv = $("<div>").addClass("carousel-item active")
        let firstCountryImage = $("<img>").addClass("d-block w-100").attr("src", (data.results[0].urls.raw + '&fit=crop&w=550&h=500'))
        let firstImageCaptionDiv = $("<div>").addClass("carousel-caption d-none d-md-block")
        let firstImageCaption = $("<h5>").text(data.results[0].description)
        firstImageCaptionDiv.append(firstImageCaption)
        firstImageDiv.append(firstCountryImage, firstImageCaptionDiv)
        $(".carousel-inner").append(firstImageDiv)

      for (i = 1; i < 3; i++) {
        let ImageDiv = $("<div>").addClass("carousel-item")
        let CountryImage = $("<img>").addClass("d-block w-100").attr("src", data.results[i].urls.raw + '&fit=crop&w=550&h=500')
        let ImageCaptionDiv = $("<div>").addClass("carousel-caption d-none d-md-block")
        let ImageCaption = $("<h5>").text(data.results[i].description)
        ImageCaptionDiv.append(ImageCaption)
        ImageDiv.append(CountryImage, ImageCaptionDiv)
        $(".carousel-inner").append(ImageDiv)
      }

      // on click event to add to fav == save to local storage both county input and data result
      myFav.click(function(){
        localStorage.setItem(JSON.stringify(countryInput), JSON.stringify(data.results[0].urls.raw)) // edit size of the photo to fit the frame 
      })
/*TODO:
check what are the form of photos generated by API and save only a thumbnail photo to the local sotrage not the whole photo */

})
}

