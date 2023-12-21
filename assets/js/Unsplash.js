// let countryInput = $("#country-search").val().trim();

let unsplashKey1 = "nkO4QtA3j8b37iVDzhJIitt4QwUCEv6UfCOB7-O2d1I";
let unsplashKey2 = "__q3dGBVbr-ZPGFeEpdoAGNhbQ24nZxvv6gIazuJnsA";

let photoURL = " https://api.unsplash.com/search/photos/?client_id=" + unsplashKey1+ "&query=Italy";

function displayPhotos(){
    fetch(photoURL)
    .then(function (response) {
        return response.json();
      })
      .then(function(data){
      // let firstImageDiv = $("<div>").addClass("carousel-item active")
      // let firstImageCaptionDiv = $("<div>").addClass("carousel-caption d-none d-md-block")
      // let firstImageCaption = $("<h5>").text(data.results[0].description)
      // let countryImage = $("<img>").addClass("d-block w-100").attr("src", data.results[0].urls.full)
      // firstImageDiv.append(firstImageCaptionDiv)
      // firstImageCaptionDiv.append(countryImage, firstImageCaption)
      // $(".carousel-inner").append(firstImageDiv)

    //   let firstImageDiv = $('<div class="carousel-item active">\
    //   <div class="carousel-caption d-none d-md-block">\
    //     <img class="d-block w-100" src="'+ data.results[0].urls.full +'">\
    //     <h5>'+ data.results[0].description +'</h5>\
    //   </div>\
    // </div>')

    // $(".carousel-inner").append(firstImageDiv)

        let firstImageDiv = $("<div>").addClass("carousel-item active")
        let firstImageCaptionDiv = $("<div>").addClass("carousel-caption d-none d-md-block")
        let firstImageCaption = $("<h5>").text(data.results[0].description)
        let firstcountryImage = $("<img>").addClass("d-block w-100").attr("src", data.results[0].urls.full)
        firstImageDiv.append(firstcountryImage)
        $(".carousel-inner").append(firstImageDiv, firstImageCaptionDiv, firstImageCaption)

      for (i = 1; i < 3; i++) {
        let ImageDiv = $("<div>").addClass("carousel-item")
        let ImageCaptionDiv = $("<div>").addClass("carousel-caption d-none d-md-block")
        let ImageCaption = $("<h5>").text(data.results[i].description)
        let countryImage = $("<img>").addClass("d-block w-100").attr("src", data.results[i].urls.full)
        ImageDiv.append(countryImage)
        $(".carousel-inner").append(ImageDiv, ImageCaptionDiv, ImageCaption)
      }
})
}

displayPhotos();