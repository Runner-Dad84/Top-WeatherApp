//City Input
let cityLoc = document.getElementById('city-loc');
const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', ()=> {
    console.log("button pressed");
})


//Fetch data from WeatherAPI
try{
fetch('http://api.weatherapi.com/v1/current.json?key=1abc13cc84da46599bb30023240701&q=London&aqi=no', {mode: "cors"})
 .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response);
  });
} catch {
    console.log('error')
}