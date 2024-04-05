// Complete the following functions to make our program work!

/**
 * @param {string} celsius
 * @returns {number} the number of degrees C
 */
function convertToFahrenheit(celsius) {
  var cTemp = celsius; 
  var cToFahr = cTemp * 9/5 + 32; 
  return cToFahr;
}

/**
 * @param {string} fahrenheit
 * @returns {number} the number of degrees F
 */
function convertToCelsius(fahrenheit){
  var fTemp = fahrenheit; 
  var fToCel = (fTemp - 32) * 5/9;
  return fToCel;
}

/**
 * Takes both numbers (F, C) and display a message with
 * both numbers and how that temp makes you feel using
 * this chart
 *
 *   Temp      Feels
 * ---------|----------
 *   < 32   |  "very cold"
 *   < 64   |  "cold"
 *   < 86   |  "warm"
 *   < 100  |  "hot"
 *
 * @param {number} fahren
 * @param {number} celc
 */
function number(fahren, cel) {
  if (cel < 32){
    console.log("very cold");
  }
  else if(cel < 64){
    console.log("cold"); 
  }
  else if (cel < 86){
    console.log("warm");
  }
  else if (cel < 100){
    console.log("hot");
  }
}

/**
 * Takes a number and returns a random integer from 0 to the limit
 * @param {number} limit
 * @returns {number} a number between 0 and the int passed in
 */
function rand(limit) {
  return Math.floor(Math.random() * limit);
}

// -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //

let fahren = parseFloat(prompt(
  "Enter a number, we will convert that number from Fahrenheit to Celsius"
));
let celc = convertToCelsius(fahren);
let output = `${fahren}°F is ${celc}°C and it feels `;
number(fahren, celc);
console.log(output);

fahren = parseFloat(prompt(
  "Let's try that again. Enter a number, we will convert that number from Fahrenheit to Celsius"
));
celc = convertToCelsius(fahren);
output = `${fahren}°F is ${celc}°C and it feels `;
number(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = `${fahren}°F is ${celc}°C and it feels `;
number(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = `${fahren}°F is ${celc}°C and it feels `;
number(fahren, celc);
console.log(output);
