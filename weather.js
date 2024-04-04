const express = require('express')
const expressHandlebars = require('express-handlebars')
const bodyparser = require('body-parser')
const getweatherdata = require('./lib/fetch')

const app = express()
const port = process.env.port || 3000

app.engine('handlebars', expressHandlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

app.use(express.static(__dirname + '/public'))

//handle get request
app.get('/',(req,res)=>{res.render('cityweatherform')})
//handle post request
app.post('/cityweatherform',async (req,res)=>{
    const city = req.query.city
    try{
        const weatherdata = await getweatherdata(city)
        res.render('cityweatherform',{Weather: weatherdata})
    }
    catch(error){
        res.status(500).send("Error sending weather data!")
    }
})

app.listen(port,() => 
{console.log(`server started at http://localhost:${port}` + 'Press Ctrl-C to terminate')})

