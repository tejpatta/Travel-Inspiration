let countryInput = $("#country-search").val().trim();

let unsplashKey1 = "nkO4QtA3j8b37iVDzhJIitt4QwUCEv6UfCOB7-O2d1I";
let unsplashKey2 = "__q3dGBVbr-ZPGFeEpdoAGNhbQ24nZxvv6gIazuJnsA";

let photoURL = "https://api.unsplash.com/search/photos/?client_id=" + unsplashKey1+ "&query=" + countryInput;

function displayPhotos(){
    fetch(photoURL)
    .then(function (response) {
        return response.json();
      })
      .then(function(data){

})
};
