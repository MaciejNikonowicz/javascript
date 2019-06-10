// INIT Weather 
const weather = new Weather('Boston', 'MA');

weather.getWeather()
    .then(results => {
        console.log(results);
    })
    .catch(error => console.log(error));