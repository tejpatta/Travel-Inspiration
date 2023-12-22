let API1 = '85466cfae5mshfa6aee501d09035p1fa241jsn2ff4bb9e5a8e' //KIKI

let API2 = '2c2f85e129mshcd557de6f46f3dap1a6b2djsn6829e8192a47' // Polly - API used!

const nextBtn = $("#next");
const previousBtn = $("#previous");


//function to get country name from user input and to fetch the country description from travel API and to render result on the home page

function getCountry(countryInput) {

    //Rapid API calling method
    let descriptionURL = 'https://travel-info-api.p.rapidapi.com/country?country=' + countryInput;
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
        
        // it fetches data from travel data API renders activities for chosen country 

        let activitiesArr=[];
        let activitiesURL = 'https://travel-info-api.p.rapidapi.com/country-activities?country=' + countryInput;
        
    
        fetch(activitiesURL, options)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                activitiesArr = data.data.activities;
                return activitiesArr
            })

        $("#activitiesBtn").click(function(){
            getActivities(activitiesArr);
        });
} 



function getActivities(activitiesArr) {

            displayActivities(activitiesArr, 0);

            function displayActivities(activitiesArr, i) {
                if (activitiesArr[i] != undefined) {
                    $("#staticBackdropLabel").text(activitiesArr[i].title);
                    $("#activityDescription").text(activitiesArr[i].activity);

                    if(i == 0) {previousBtn.disabled = true};
                    if(i == activitiesArr.length - 1){nextBtn.disabled = true};
                
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
}

// to function add contitonal statement for error ( 1. misspeaed country, api not valid)
