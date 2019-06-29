const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// API calls
app.get('/api/hello', (req, res) => {
    res.send({express: 'Hello From Express'});


    // Making Request to Rest Countries API
    request('https://restcountries.eu/rest/v2/name/brazil', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the reponse of the request
    });
});

app.post('/api/world', (req, res) => {
    console.log(req.body);

    // Testing function 4
    runMachine();
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

// Question 4

const reel1 = ['cherry', 'lemon', 'apple', 'lemon', 'banana', 'banana', 'lemon', 'lemon'];
const reel2 = ['lemon', 'apple', 'lemon', 'lemon', 'cherry', 'apple', 'banana', 'lemon'];
const reel3 = ['lemon', 'apple', 'lemon', 'apple', 'cherry', 'lemon', 'banana', 'lemon'];
let coins = 20;

function runMachine() {
    coins = coins - 1;

    let result1 = reel1[Math.floor(Math.random()*reel1.length)];
    let result2 = reel2[Math.floor(Math.random()*reel2.length)];
    let result3 = reel3[Math.floor(Math.random()*reel3.length)];

    if (result1 === 'cherry' && result2 === 'cherry' && result3 === 'cherry' ) {
        console.log('You won 50 coins!');
        coins = coins + 50;
    } else if ((result1 === 'cherry' && result2 === 'cherry') || (result1 === 'cherry' && result3 === 'cherry' ) || (result2 === 'cherry' && result3 === 'cherry' )) {
        console.log('You won 40 coins!');
        coins = coins + 40;
    } else if (result1 === 'apple' && result2 === 'apple' && result3 === 'apple') {
        console.log('You won 20 coins!');
        coins = coins + 20;
    } else if ((result1 === 'apple' && result2 === 'apple') || (result1 === 'apple' && result3 === 'apple' ) || (result2 === 'apple' && result3 === 'apple' )) {
        console.log('You won 10 coins!');
        coins = coins + 10;
    } else if (result1 === 'banana' && result2 === 'banana' && result3 === 'banana' ) {
        console.log('You won 15 coins!');
        coins = coins + 15;
    } else if ((result1 === 'banana' && result2 === 'banana') || (result1 === 'banana' && result3 === 'banana' ) || (result2 === 'banana' && result3 === 'banana' )) {
        console.log('You won 5 coins!');
        coins = coins + 5;
    } else if (result1 === 'lemon' && result2 === 'lemon' && result3 === 'lemon' ) {
        console.log('You won 3 coins!');
        coins = coins + 3;
    }
}




if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
