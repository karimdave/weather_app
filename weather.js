const express = require('express')
const expressHandlebars = require('express-handlebars')
const bodyparser = require('body-parser')


const app = express()
const port = process.env.port || 3000

app.engine('handlebars', expressHandlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

app.use(express.static(__dirname + '/public'))

app.listen(port,() => 
{console.log(`server started at http://localhost:${port}` + 'Press Ctrl-C to terminate')})

