const key = 'c7b0f8a0b8c2bf1628114850d5da3aff';

const getWeatherByCity = async (cityName)=>{
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';    
    const query = `${cityName}&appid=${key}`;

    const response =await fetch(baseUrl + query);
    const data = await response.json();
    //console.log(data);
    return data;
}

//getWeatherByCity('nairobi');

