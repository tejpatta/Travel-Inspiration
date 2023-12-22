// Select HTML element for Search button and assign it to a variable
let searchBtn = $("#search")

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
    $("#loading").removeClass("hide");
    $("#search").addClass("hide");
    $("#results-view").removeClass("hide")
    $(".placeholder").show();
    // When the button is clicked then get the value from the input, remove whitespace, convert input to lowercase, and assign it to the variable countryInput
    let countryInput = $("#country-search").val().trim().toLowerCase();
    // Call the getCountry function with countryInput as an argument
    getCountry(countryInput);
    displayPhotos();
};


