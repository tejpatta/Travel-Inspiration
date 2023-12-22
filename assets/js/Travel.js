// Variables to store API keys
let API1 = '85466cfae5mshfa6aee501d09035p1fa241jsn2ff4bb9e5a8e' // Kiki
let API2 = '2c2f85e129mshcd557de6f46f3dap1a6b2djsn6829e8192a47' // Polly (no more calls available for current month)
// Select HTML elements for Next and Previous buttons and assign them to variables
const nextBtn = $("#next");
const previousBtn = $("#previous");

// Function to fetch the country description and activities from the Travel Info API and to render result on the home page
function getCountry(countryInput) {
   // URL for the API request
    let descriptionURL = 'https://travel-info-api.p.rapidapi.com/country?country=' + countryInput;
    let options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API1,
            'X-RapidAPI-Host': 'travel-info-api.p.rapidapi.com'
        }
    };
  // Send the request and handle the response
    fetch(descriptionURL, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
          // Display the country name and description on the page and change the country name characters to upper case
            $("#countryName").text(countryInput.toUpperCase());
            $("#countryDescription").text(data.data.info)
        })
         // Fetch and display activities for the country
        let activitiesArr=[];
        // URL for the API request
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
        // Event handler attached to the Find activities button to run the getActivities function on click
        $("#activitiesBtn").click(function(){
            getActivities(activitiesArr);
        });
} 
// Function to display activities
function getActivities(activitiesArr) {
    // Start displaying activities from the beginning of the array
            displayActivities(activitiesArr, 0);
            // Function to display an activity based on its index in the array
            function displayActivities(activitiesArr, i) {
                // Check if the activity exists in the array
                if (activitiesArr[i] != undefined) {
                    // Update the title and the description of the modal
                    $("#staticBackdropLabel").text(activitiesArr[i].title);
                    $("#activityDescription").text(activitiesArr[i].activity);
                // Disable the navigation buttons when at the first or last activity
                    if(i == 0) {previousBtn.disabled = true};
                    if(i == activitiesArr.length - 1){nextBtn.disabled = true};
                // Attach click event handlers to the Next and Previous buttons
                    nextBtn.click(function(){
                        let currentActivity = $(this);
                        nextActivity(activitiesArr, i, currentActivity);
                    });
                    previousBtn.click(function(){
                        let currentActivity = $(this);
                        prevActivity(activitiesArr, i, currentActivity);
                    });
                }else {
                    // If the activity doesn't exists in the array restart from the beginning
                    i = 0;
                    displayActivities(activitiesArr, i);
                }
            }
            // Function to handle the event when the user goes to the next activity
            function nextActivity(activitiesArr, i , currentActivity){
                // Increment the index to go to next actiity
                i++;
                displayActivities(activitiesArr, i);

            }
            // Function to handle the event when the user goes to the previous activity
            function prevActivity(activitiesArr, i , currentActivity){
                // Decrement the index to go to previous activity
                i--;
                // Call the displayActivities function to show the previous activity
                displayActivities(activitiesArr, i);

            }
}


