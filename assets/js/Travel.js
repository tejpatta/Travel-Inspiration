let API1 = '85466cfae5mshfa6aee501d09035p1fa241jsn2ff4bb9e5a8e' //KIKI

let API2 = '2c2f85e129mshcd557de6f46f3dap1a6b2djsn6829e8192a47' // Polly - API used!


//function to get country name from user input and to fetch the country description from travel API and to render result on the home page

function getCountry(countryInput){

    //Rapid API calling method
    let descriptionURL = 'https://travel-info-api.p.rapidapi.com/country?country='+countryInput;
    let options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API1,
            'X-RapidAPI-Host': 'travel-info-api.p.rapidapi.com'
        }
    };
        
    fetch(descriptionURL, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            $("#countryName").text(countryInput);
            $("#countryDescription").text(data.data.info)
        })
}
//getCountry(country) //shall be called in app.js each time the restuls need to be cleared. 

// it fetches data from travel data API renders activities for chosen country 

function getActivities(countryInput){
    
    let activitiesURL = 'https://travel-info-api.p.rapidapi.com/country-activities?country=turkey';
    let options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2c2f85e129mshcd557de6f46f3dap1a6b2djsn6829e8192a47',
            'X-RapidAPI-Host': 'travel-info-api.p.rapidapi.com'
        }
    };

    fetch(activitiesURL, options)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let activitiesArr = data.data.activities;

        
        // fisr screen should have first activitie 
        //then the loop shpuld execute 
        


    })
}


// getActivities() is run when someone clicks button modal pops up 
// save data.data.activies as array of objescts 
//iterrate through the array, but only iterrate +1 when clincked nect but -1 when clicked previous 
//we do not need to limit ourselves to 5 activites we cn use them all!
// each itteration seets card title and description.
// 

// to function add contitonal statement for error ( 1. misspeaed country, api not valid)


/*var arr= [
    {title: "running",
    activity: "running1"},
    {title: "jumping",
    activity: "jumping1"},
    {title: "growing",
    activity: "growing1"},
]

// find activites displays[0]
//next [3]
//previous */