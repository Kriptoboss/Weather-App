const fakeWeatherData = {
  "istanbul": { temp: 23, condition: "Sunny" },
  "ankara": { temp: 18, condition: "Cloudy" },
  "izmir": { temp: 26, condition: "Clear" },
};

function getWeather() {
  const city = document.getElementById("cityInput").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  if (fakeWeatherData[city]) {
    const { temp, condition } = fakeWeatherData[city];
    resultDiv.innerHTML = `🌍 ${city.toUpperCase()} <br> 🌡️ ${temp}°C <br> ☁️ ${condition}`;
  } else {
    resultDiv.innerHTML = "❌ No data found for this city.";
  }
}