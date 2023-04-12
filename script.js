let weather = {
    apikey : "3045dd712ffe6e702e3245525ac7fa38",
    city : document.getElementById("city-name"),
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=3045dd712ffe6e702e3245525ac7fa38"
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const {description} = data.weather[0];
        const { temp } = data.main;
        const { speed } = data.wind;
        console.log(name,description,temp,speed)
        document.querySelector(".city").innerText = "City:" + name;
        document.querySelector(".description").innerText = "Conditions:" + description;
        document.querySelector(".temp").innerText = temp + "C";
        document.querySelector(".speed").innerText = "Wind-Speed:" + speed;
    }
}
