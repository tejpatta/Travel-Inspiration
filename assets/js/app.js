let searchBtn = $("#search")

searchBtn.click(function(){
    let countryInput = $("#country-search").val().trim().toLowerCase();
    getCountry(countryInput);
});
// get variables for input 

//on click search if input is error display correct your data maybe in modal,
// if data is correct remove hide css attribute and siaply the results section, 



/* Logic that triggers travel js:

    on click function that transferes the value of the input to the function and calls 
    getCountry with parameter of the input 

    onl click function that transfers the value of the input to get Activites
        NO
        that cannot be transferred
    
        on cick function needs to return value of county input stored in variable and then in needs to be overwittten each time 
        unless on click is nested in get country function to getActivites ot transfer the variable.


*/