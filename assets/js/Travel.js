let API1 = '85466cfae5mshfa6aee501d09035p1fa241jsn2ff4bb9e5a8e' //KIKI

let API2 = '2c2f85e129mshcd557de6f46f3dap1a6b2djsn6829e8192a47' // Polly - API used!

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

//getCountry(country) //shall be called in app.js
