
const submitBtn = document.getElementById('submit');

async function submitData () {
    let input = document.getElementById('locCity');
    const address = `http://api.weatherapi.com/v1/current.json?key=1abc13cc84da46599bb30023240701&q=${input.value}&aqi=no`
    console.log(input.value);
    try{
        const response = await fetch(address, {mode: "cors"});
        const responseJson = await response.json();
        console.log(responseJson);
        } catch {
            console.log('error')
        }

}

