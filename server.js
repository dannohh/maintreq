const express = require('express')
const app = express()


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + '/public'));
// app.use('/styles', express.static(__dirname + '/public'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
    res.end()
})


app.post('/order', (req, res) => {
    console.log('got request')
    res.send(`<div 
    style="display: flex; 
    flex-direction: column; 
    background: lightblue; 
    text-align: center;"><h4>

    Your maintenance request for  
    ${req.body.textArea} at 
    ${req.body.houseNumber} 
    ${req.body.streetName} 
    has been submitted!</h4> 
    <h1>Thank you!</h1>
    <a href="/">Back to Dash</a>
    </div>`)
    console.log(req.body)

    res.end()
})
app.get('/order', (req, res) => {
    res.render('workOrder')
})

app.listen(3000, console.log('listening on PORT...'))
