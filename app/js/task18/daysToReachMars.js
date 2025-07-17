// Declare and assign variables for each item in the list
const shuttleName = 'Determination';
const shuttleSpeedMph = 17500;
const distanceToMarsKm = 225000000;
const distanceToMoonKm = 384400;
const milesPerKm = 0.621;

// Print type of each variable to the console
console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);
console.log(typeof milesPerKm);

// Determine how many days it will take to reach Mars
const milesToMars = distanceToMarsKm * milesPerKm;
const hoursToMars = milesToMars / shuttleSpeedMph;
const daysToMars = hoursToMars / 24;

// Print sentence to the screen
document.getElementById('output').innerHTML = `<p>${shuttleName} will take approximately ${daysToMars.toFixed(2)} days to reach Mars.</p>`;

