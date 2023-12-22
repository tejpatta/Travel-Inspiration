// Select HTML element for Search button and assign it to a variable
let searchBtn = $("#search")
// Add a click event listener to the Search button
searchBtn.click(function(){
    // When the button is clicked then get the value from the input, remove whitespace, convert input to lowercase, and assign it to the variable countryInput
    let countryInput = $("#country-search").val().trim().toLowerCase();
    // Call the getCountry function with countryInput as an argument
    getCountry(countryInput);
});


