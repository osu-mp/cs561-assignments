"use strict"

var express = require('express')
//var bodyParser = require("body-parser");

var app = express()

app.listen(3000)
console.log('Node.jf Express server is running on port 3000...')

app.get('/v1/weather/', get_weather)
app.get('/v1/hello/', get_hello)
app.post('/v1/auth/', post_auth)

function get_weather(request, response){
    response.json({"coord":{"lon":-123.262,"lat":44.5646},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"base":"stations","main":{"temp":45.77,"feels_like":43.84,"temp_min":39.9,"temp_max":47.91,"pressure":1026,"humidity":88},"visibility":10000,"wind":{"speed":0,"deg":0},"clouds":{"all":100},"dt":1642217300,"sys":{"type":2,"id":2012991,"country":"US","sunrise":1642175199,"sunset":1642208235},"timezone":-28800,"id":5720727,"name":"Corvallis","cod":200})
}

function get_hello(request, response){
    response.json({"greeting": "Hello world!"})
}

function post_auth(request, response){
    //const user = request.body.user;
    const user = request.user;
    response.send({"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiBEb2UiLCJyZWZyZXNoLXRva2VuIjoiZHVtbXlfdmFsdWUxIiwiYWNjZXNzLXRva2VuIjoiZHVtbXlfdmFsdWUyIiwiaWF0IjoxNTE2MjM5MDIyfQ.guTzYRwmwEx2WQbhc-4zFV7dLZw1uWNhUvnzL3fEt3o"})
}