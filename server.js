const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const request = require("request");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Question 1 - Write a function that connects to​ ​ https://restcountries.eu/​ and gets a unique country from a
// specific name given using the Node back end and send it to the front end.
app.post("/api/uniqueCountry", async (req, res) => {
  console.log(
    "-----------------------------------/api/uniqueCountry----------------------------"
  );
  await request(
    "https://restcountries.eu/rest/v2/name/" + req.body.post,
    function(error, response, body) {
      res.json(body);
    }
  );
});

// Question 2 - Using the same API (​ ​ https://restcountries.eu/​ ), and from an array of string, write a function
// that returns a list of countries where their name matches at least a part of one of these string
// use the Node back end and send it to the front end.
app.post("/api/listCountry", async (req, res) => {
  console.log(
    "-----------------------------------/api/uniqueCountry'----------------------------"
  );
  await request(
    "https://restcountries.eu/rest/v2/name/" + req.body.post,
    function(error, response, body) {
      console.log("error:", error); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      console.log("body:", body); // Print the response of the request
      res.json(body);
    }
  );
});

// Question 3 - Using the same API (​ ​ https://restcountries.eu/​ ) in the React front end list all the countries
// and a field to filter the country by name.
app.post("/api/allCountry", async (req, res) => {
  console.log(
    "-----------------------------------/api/uniqueCountry'----------------------------"
  );
  await request("https://restcountries.eu/rest/v2/all", function(
    error,
    response,
    body
  ) {
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    console.log("body:", body); // Print the response of the request
    res.json(body);
  });
});

// Question 4 - Using these data, create a function that, when it’s called by the front end, gives back the
// result of a spin and show the result.
let coins = 20;
app.post("/api/runMachine", async (req, res) => {
  const reel1 = [
    "cherry",
    "lemon",
    "apple",
    "lemon",
    "banana",
    "banana",
    "lemon",
    "lemon"
  ];
  const reel2 = [
    "lemon",
    "apple",
    "lemon",
    "lemon",
    "cherry",
    "apple",
    "banana",
    "lemon"
  ];
  const reel3 = [
    "lemon",
    "apple",
    "lemon",
    "apple",
    "cherry",
    "lemon",
    "banana",
    "lemon"
  ];

  function runMachine() {
    let result = "";
    coins = coins - 1;

    let result1 = reel1[Math.floor(Math.random() * reel1.length)];
    let result2 = reel2[Math.floor(Math.random() * reel2.length)];
    let result3 = reel3[Math.floor(Math.random() * reel3.length)];

    if (result1 === "cherry" && result2 === "cherry" && result3 === "cherry") {
      console.log("You won 50 coins!");
      result = "You won 50 coins!";
      coins = coins + 50;
    } else if (
      (result1 === "cherry" && result2 === "cherry") ||
      (result1 === "cherry" && result3 === "cherry") ||
      (result2 === "cherry" && result3 === "cherry")
    ) {
      console.log("You won 40 coins!");
      result = "You won 40 coins!";
      coins = coins + 40;
    } else if (
      result1 === "apple" &&
      result2 === "apple" &&
      result3 === "apple"
    ) {
      console.log("You won 20 coins!");
      result = "You won 20 coins!";
      coins = coins + 20;
    } else if (
      (result1 === "apple" && result2 === "apple") ||
      (result1 === "apple" && result3 === "apple") ||
      (result2 === "apple" && result3 === "apple")
    ) {
      console.log("You won 10 coins!");
      result = "You won 10 coins!";
      coins = coins + 10;
    } else if (
      result1 === "banana" &&
      result2 === "banana" &&
      result3 === "banana"
    ) {
      console.log("You won 15 coins!");
      result = "You won 15 coins!";
      coins = coins + 15;
    } else if (
      (result1 === "banana" && result2 === "banana") ||
      (result1 === "banana" && result3 === "banana") ||
      (result2 === "banana" && result3 === "banana")
    ) {
      console.log("You won 5 coins!");
      result = "You won 5 coins!";
      coins = coins + 5;
    } else if (
      result1 === "lemon" &&
      result2 === "lemon" &&
      result3 === "lemon"
    ) {
      console.log("You won 3 coins!");
      result = "You won 3 coins!";
      coins = coins + 3;
    } else {
      console.log("Bad luck day, you didn't win anything :(");
      result = "Bad luck day, you didn't win anything :(";
    }

    const spin = {
      coins: coins,
      result: result,
      reel: [result1, result2, result3]
    };

    res.json(spin);
  }
  runMachine();
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
