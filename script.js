


async function submitData () {
    const boxTemp = document.getElementById('boxTemp');
    let input = document.getElementById('locCity');
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
        console.log(temp, feels, wind, condition);
        return(temp, feels, wind, condition);
    } catch (err) {
            console.log(err.name);
            console.log(err.message);
    }   

};
