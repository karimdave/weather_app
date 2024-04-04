require('dotenv').config()
const fetch = import('node-fetch')
const apikey = process.env.SECRET_KEY

//function to fetch any city weather data

exports.getweatherdata = async(city) =>
{
    
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

