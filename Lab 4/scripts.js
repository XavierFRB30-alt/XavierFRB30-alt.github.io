let myCity = document.getElementById("city");
let myLatitude = document.getElementById("latitude");
let myLongitude = document.getElementById("longitude");


async function zipcodeForm() {
    try {
        console.log("inzipcode");
        document.querySelector("#zipcodeInput"); 
        let zipcodeResponse = await
        fetch("https://csumb.space/api/cityInfoAPI.php?zip=90210");
        if (!zipcodeResponse.ok) {
            throw new Error("Response failed!");
        }

        let zipcodeData = await zipcodeResponse.json();

        console.log(zipcodeData.city);
        console.log(zipcodeData.latitude);
        console.log(zipcodeData.longitude);

        let city = zipcodeData.city;
        let latitude = zipcodeData.latitude;
        let longitude = zipcodeData.longitude;

        let zipcodeInput = document.querySelector("#zipcodeInput");
        document.querySelector("#city").textContent = city;
        document.querySelector("#latitude").textContent = latitude;
        document.querySelector("#longitude").textContent = longitude;


        console.log(zipcodeData);
    } catch(apiError){console.log(apiError);}
}
async function setUpForm() {
    try {
        let stateResponse = await
        fetch("https://csumb.space/api/allStatesAPI.php");

        let countyResponse = await
        fetch("https://csumb.space/api/countyListAPI.php?state=ca");

        if (!stateResponse.ok || !countyResponse.ok) {
            throw new Error("Response failed!");
        }
        let statesData = await stateResponse.json();
        let countyData = await stateResponse.json();
        console.log(statesData);
        console.log(countyData);

        let statesSelect = document.querySelector("#statesSelect");
        for (let stateData of statesData) {

            let stateOption = document.createElement("option");
            stateOption.id = stateData.usps;
            stateOption.value = stateData.usps;
            stateOption.textContent = stateData.state;

            //console.log("state data");
            statesSelect.append(stateOption);
        }

    } catch (apiError) { console.log(apiError) };
}

setUpForm(); //when using async functions, don't use code after the async function, it may never run
zipcodeForm();

//put the states in a drop down list - this won't work