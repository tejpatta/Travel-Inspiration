// Select HTML element for Search button and assign it to a variable
let searchBtn = $("#search")

//buttons 
let myFav = $('#myFavourites')
let activitiesBtn = $('#activitiesBtn')

//it allows us to search by clicking ENTER
$("#country-search").keydown(function (e) {;
    if(e.which == 13) {
        e.preventDefault();
        search();  
    }
}); 

// Add a click event listener to the Search button
searchBtn.click(search);

function search(){
    $("#error").addClass("hide");
    $("#loading").removeClass("hide");
    $("#search").addClass("hide");
    $("#results-view").removeClass("hide")
    $(".placeholder").show();
    //hidden buttons until featch is completed:
    myFav.hide();
    activitiesBtn.hide()
    // When the button is clicked then get the value from the input, remove whitespace, convert input to lowercase, and assign it to the variable countryInput
    let countryInput = $("#country-search").val().trim().toLowerCase();
    if (countryInput == ""){
        countryInput = countryList[random(0, countryList.length)]
    }
    console.log(countryInput);
    // Call the getCountry function with countryInput as an argument
    getCountry(countryInput);
    displayPhotos(countryInput);
};

function random(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}


