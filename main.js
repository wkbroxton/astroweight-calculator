// Write your JavaScript code here!
var planets = [
  ["Pluto", 0.06],
  ["Neptune", 1.148],
  ["Uranus", 0.917],
  ["Saturn", 1.139],
  ["Jupiter", 2.64],
  ["Mars", 0.3895],
  ["Moon", 0.1655],
  ["Earth", 1],
  ["Venus", 0.9032],
  ["Mercury", 0.377],
  ["Sun", 27.9],
];

// We are going to solve this by breaking the problem into three parts.
// Programmers like automating things, we'll populate the HTML drop down options using code,
// instead of having to type out all the values.
// Create a function that does the some math and gives us the new weight.
// Then create a function that responds when the user clicks on the button.

// 1. Populate the dropdown element with the data found in the planets array.
// The value of each option should be the planet's name.
// Use the following built-in methods:
// `.forEach` `document.createElement` `document.getElementById` `.appendChild`

planets.reverse().forEach(findWeight);

function findWeight(item, index) {
  document.getElementById("planets");
  let options = document.createElement("option");
  let planet = document.createTextNode(item[0]);
  options.value = item[0];
  options.appendChild(planet);

  document.getElementById("planets").appendChild(options);
}

function calculateWeight(weight, planetName) {
  // 2. Write the code to return the correct weight
  for (let i = 0; i < planets.length; i++) {
    if (planetName === planets[i][0]) {
      return weight * planets[i][1];
    }
  }
}

function handleClickEvent(e) {
  // 3. Create a variable called userWeight and assign the value of the user's weight.
  // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
  // 5. Create a variable called result and assign the value of the new calculated weight.
  // 6. Write code to display the message shown in the screenshot.
  let userWeight = document.getElementById("user-weight").value;
  let planetName = document.getElementById("planets").value;
  let result = calculateWeight(userWeight, planetName);
  document.getElementById(
    "output"
  ).innerHTML = `If you were on ${planetName}, you would weigh ${result}lbs!`;
}

// 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
let calcButton = document.getElementById("calculate-button");

calcButton.addEventListener("click", handleClickEvent);

// 8. Make it look nice by attaching  a style.css file to your index.html and writing some basic styling,
// feel free to add classes and id's to the HTML elements as you need,
// import.a google font and use it for some or all of the text on your page.

// Bonus Challenges
// 8. Reverse the drop down order so that the sun is first.
