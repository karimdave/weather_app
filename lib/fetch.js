const fetch = require('node-fetch')

//function to fetch any city weather data

exports.getweatherdata = async(city) =>
{
    const apiKey = "8e666c5a6262b5974402b53f679d733d"
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`
    try
    {
        const response = fetch(weatherURL)
        const weatherdata = response.json()
        return weatherdata
    }
    catch(error)
    {
        console.log("Error fetching weather data" + error)
        throw error
    }
}

