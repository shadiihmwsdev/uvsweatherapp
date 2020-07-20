const searchForm = document.querySelector('.search-location');
const inputCityValue = document.querySelector('.search-location input');

const cityName = document.querySelector('.city-name p');
const cardBody = document.querySelector('.card-body');
const imageTime = document.querySelector('.card-top img');
const cardMain = document.querySelector('.back-card');
const getCelcius =(kelvin)=>{
    celcius = Math.round(kelvin -273.15);
    return celcius;
}

const dayOrNightTime = (icon)=>{
    if(icon.includes('d')){
        return true;
    }else{
        return false;
    } 
}
updateWeatherInfo = (data)=>{
    const weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    cityName.textContent = data.name;
    cardBody.innerHTML = 
    `<div class="card-mid row">
    <div class="col-8 text-center temp">
        <span>${getCelcius(data.main.temp)}&deg;C</span>
    </div>
    <div class="col-4 condition-temp">
        <p class="condition">${data.weather[0].main}</p>
        <p class="high">${getCelcius(data.main.temp_max)}&deg;C</p>
        <P class="low">${getCelcius(data.main.temp_min)}&deg;C</P>
    </div>
</div>

<div class="icon-container card shadow mx-auto">
    <img src="${weatherIcon}" alt=""/>
</div>
<div class="card-bottom px-5 py-4 row">
    <div class="col text-center">
        <p>${getCelcius(data.main.feels_like)}&deg;C</p>
        <span>Feels like</span>
    </div>
    <div class="col text-center">
        <p>${getCelcius(data.main.humidity)}%</p>
        <span>Humidity</span>
    </div>
</div>`

if(dayOrNightTime(weatherIcon)){
    console.log('day');
    imageTime.setAttribute('src','images/day_image.svg');
    if(cityName.classList.contains('text-white')){
        cityName.classList.remove('text-white')
    }else{
        cityName.classList.add('text-black');
    }
}else{
    console.log('night');
    imageTime.setAttribute('src','images/night_image.svg');
    if(cityName.classList.contains('text-black')){
        cityName.classList.remove('text-black')
    }else{
        cityName.classList.add('text-white');
    }
}
cardMain.classList.remove('showDiv');
cardMain.classList.add('loadCard');
}
searchForm.addEventListener('submit', e=>{
    e.preventDefault();

    cardMain.classList.remove('loadCard');
    
    const searchedValue = inputCityValue.value.trim();
    console.log(searchedValue);
    searchForm.reset();

    getWeatherByCity(searchedValue).then(data=>{
        updateWeatherInfo(data);
    }).catch(error =>{
        console.log(error);
    });
});