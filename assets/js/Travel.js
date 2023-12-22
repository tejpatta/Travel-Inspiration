let API1 = '85466cfae5mshfa6aee501d09035p1fa241jsn2ff4bb9e5a8e' //KIKI

let API2 = '2c2f85e129mshcd557de6f46f3dap1a6b2djsn6829e8192a47' // Polly - API used!

const nextBtn = $("#next");
const previousBtn = $("#previous");


//function to get country name from user input and to fetch the country description from travel API and to render result on the home page

function getCountry(countryInput) {

    //Rapid API calling method
    let descriptionURL = 'https://travel-info-api.p.rapidapi.com/country?country=turkey'; //+ countryInput;
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
getCountry() //shall be called in app.js each time the restuls need to be cleared. 


// it fetches data from travel data API renders activities for chosen country 

function getActivities(countryInput) {

    let activitiesURL = 'https://travel-info-api.p.rapidapi.com/country-activities?country=turkey';
    let options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API1,
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
            displayActivities(activitiesArr, 0);

            function displayActivities(activitiesArr, i) {
                if (activitiesArr[i] != undefined) {
                    $("#staticBackdropLabel").text(activitiesArr[i].title);
                    $("#activityDescription").text(activitiesArr[i].activity);

                    if (i == 0) previousBtn.disabled = true;
                    if (i == activitiesArr.length - 1) nextBtn.disabled = true;
                
                    nextBtn.click(function(){
                        let currentActivity = $(this);
                        nextActivity(activitiesArr, i, currentActivity);
                    });
                    previousBtn.click(function(){
                        let currentActivity = $(this);
                        prevActivity(activitiesArr, i, currentActivity);
                    });
                }else {
                    i = 0;
                    displayActivities(activitiesArr, i);
                }
            }
            
            function nextActivity(activitiesArr, i , currentActivity){
                i++;
                displayActivities(activitiesArr, i);

            }
            function prevActivity(activitiesArr, i , currentActivity){
                i--;
                displayActivities(activitiesArr, i);

            }

        })
}

$("#activitiesBtn").click(function(){
    getActivities();
});

// getActivities() is run when someone clicks button modal pops up 
// save data.data.activies as array of objescts 
//iterrate through the array, but only iterrate +1 when clincked nect but -1 when clicked previous 
//we do not need to limit ourselves to 5 activites we cn use them all!
// each itteration seets card title and description.
// 

// to function add contitonal statement for error ( 1. misspeaed country, api not valid)


/*var arr= [
data:
activities:
0:
title:"Be dazzled by the Whirling Dervishes"
activity:"The renowned Whirling Dervishes are one of Turkey's most iconic tourist attractions. Members of the Mevlevi Order perform the famous whirling dance known as Sema as part of an aged ceremony. It's best seen in Konya where the Order originated, though many shows catering to visitors are put on in Istanbul, too."
1:
title:"Cruise down the Black Sea"
activity:"Explore the northern suburbs of Istanbul by ferry-boat, criss-crossing the Bosphorus to visit villages that stretch up to the mouth of the Black Sea. You can escape the tourists further and join holidaying Turks at one of the small Black Sea coast towns like Ünye or Giresun – less crowded, cooler and greener than the Mediterranean coast."


// find activites displays[0]
//next [3]
//previous */