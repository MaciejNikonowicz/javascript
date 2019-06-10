class Weather {
    constructor(city, country) {
        this.apiKey = '87e8ebb2e3351c9c95e51afadc3c7a97';
        this.city = city;
        this.country = country;
    }

    // fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${this.apiKey}`);

        const responseData = await response.json();

        return responseData.current_observation;
    }

    // Change weather location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}