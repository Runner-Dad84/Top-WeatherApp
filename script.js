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


//Test function
function testBtn () {
 console.log('This is a test of the public emergency line! It is a drill.');
};