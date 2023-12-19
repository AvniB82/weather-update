var APIKey = "659a0a0a6a95f8a1c28fe1eb9840c2bd";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid=" + APIKey;

$("#search-form").submit(function (event) {
    event.preventDefault();
  
    var cityName = $("#search-input").val();
  
    if (cityName) {
      var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
  
      fetch(queryURL)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log("Query URL:", queryURL);
          console.log("API Response:", data);
  
          if (data && data.main) {
            var city = data.name;
            var temperature = (data.main.temp - 273.15).toFixed(2);
            var windSpeed = data.wind.speed;
            var humidity = data.main.humidity;
  
            console.log("City Name:", city);
            console.log("Temperature:", temperature);
            console.log("Wind Speed:", windSpeed);
            console.log("Humidity:", humidity);
  
            $(".city").text("City Name: " + city);
            $(".temp").text("Temperature: " + temperature + " °C");
            $(".wind").text("Wind: " + windSpeed + " m/s");
            $(".humidity").text("Humidity: " + humidity + "%");
          } else {
            console.error('Invalid data structure received from API');
          }
        })
        .catch(function (error) {
          console.error('Error fetching data:', error);
        });
    }
  });