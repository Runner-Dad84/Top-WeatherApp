
const boxLoc = document.getElementById('boxLoc');
const boxCondition = document.getElementById('boxCondition');
const boxTemp = document.getElementById('boxTemp');
const boxFeels = document.getElementById('boxFeels');
const boxWind = document.getElementById('boxWind');
const img = document.querySelector('img');
let input = document.getElementById('locCity');


async function submitData () {
    const address = `http://api.weatherapi.com/v1/current.json?key=1abc13cc84da46599bb30023240701&q=${input.value}&aqi=no`
    
    try{
        const response = await fetch(address, {mode: "cors"});
         if (!response .ok) {
            throw new Error(`http error status:${response.status}`);
         }

        const respJson = await response.json();
        console.log(respJson);
        
        const temp = await(respJson.current.temp_f);
        const feels = await(respJson.current.feelslike_f);
        const wind = await(respJson.current.wind_mph);
        const condition = await(respJson.current.condition.text);
        const city = await(respJson.location.name);
        const region = await(respJson.location.region);
        console.log(city, region, temp, feels, wind, condition);
        
        boxLoc.innerText = `${city}, ${region}`;
        boxCondition.innerText = `Current Conditions: ${condition}`;
        boxTemp.innerText = `Temperature: ${temp} F`;
        boxFeels.innerText = `Feels Like: ${feels} F`;
        boxWind.innerText = `Wind: ${wind} mph`;

        const image = `https://api.giphy.com/v1/gifs/translate?api_key=AlCs3pB2zAZb4rdwwi95WBUlExWsY7ed&s=${respJson.current.condition.text}`
        const responseImage = await fetch(image, {image: 'cors'})
        const imageJson = await responseImage.json();
        img.src = await imageJson.data.images.original.url;
        console.log(respJson.current.condition.text);
   
    } catch (err) {
            console.log(err.name);
            console.log(err.message);
    }   
};
(function defaultLocation () {
    input.value = "New York";
    submitData();
})();
