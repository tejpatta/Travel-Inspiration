// let countryInput = $("#country-search").val().trim();

let unsplashKey1 = "nkO4QtA3j8b37iVDzhJIitt4QwUCEv6UfCOB7-O2d1I";
let unsplashKey2 = "__q3dGBVbr-ZPGFeEpdoAGNhbQ24nZxvv6gIazuJnsA";

<<<<<<< HEAD
let photoURL = "https://api.unsplash.com/search/photos/?client_id=" + unsplashKey1+ "&query=" + countryInput;
=======
let photoURL = " https://api.unsplash.com/search/photos/?client_id=" + unsplashKey1+ "&query=Italy";
>>>>>>> a7c548af6d7f716c521d64db3b5b02a5f704813d

function displayPhotos(){
    fetch(photoURL)
    .then(function (response) {
        return response.json();
      })
      .then(function(data){
        let firstImageDiv = $("<div>").addClass("carousel-item active")
        let firstCountryImage = $("<img>").addClass("d-block w-100").attr("src", data.results[0].urls.full)
        let firstImageCaptionDiv = $("<div>").addClass("carousel-caption d-none d-md-block")
        let firstImageCaption = $("<h5>").text(data.results[0].description)
        firstImageCaptionDiv.append(firstImageCaption)
        firstImageDiv.append(firstCountryImage, firstImageCaptionDiv)
        $(".carousel-inner").append(firstImageDiv)

      for (i = 1; i < 3; i++) {
        let ImageDiv = $("<div>").addClass("carousel-item")
        let CountryImage = $("<img>").addClass("d-block w-100").attr("src", data.results[i].urls.full)
        let ImageCaptionDiv = $("<div>").addClass("carousel-caption d-none d-md-block")
        let ImageCaption = $("<h5>").text(data.results[i].description)
        ImageCaptionDiv.append(ImageCaption)
        ImageDiv.append(CountryImage, ImageCaptionDiv)
        $(".carousel-inner").append(ImageDiv)
      }
})
<<<<<<< HEAD
};
=======
}

displayPhotos();
>>>>>>> a7c548af6d7f716c521d64db3b5b02a5f704813d
