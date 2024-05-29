// Define the Car object
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "red",
    gearbox: "automatic",
    yearOfProduction: 2020,
    speed: 0,
    start: function() {
        console.log("The car is starting");
        updateCarInfo("The car is starting");
    },
    drive: function() {
        console.log("The car is driving");
        this.speed = 60; // Set speed to a default driving speed
        updateCarInfo("The car is driving at " + this.speed + " mph");
    },
    stop: function() {
        console.log("The car is stopped");
        this.speed = 0;
        updateCarInfo("The car is stopped");
    },
    honk: function() {
        console.log("Honk Honk!");
        updateCarInfo("Honk Honk!");
    }
};

// Function to update car information on the webpage
function updateCarInfo(message) {
    const carInfoDiv = document.getElementById("carInfo");
    carInfoDiv.innerHTML = `
        <p><strong>Make:</strong> ${car.make}</p>
        <p><strong>Model:</strong> ${car.model}</p>
        <p><strong>Year:</strong> ${car.year}</p>
        <p><strong>Color:</strong> ${car.color}</p>
        <p><strong>Gearbox:</strong> ${car.gearbox}</p>
        <p><strong>Year of Production:</strong> ${car.yearOfProduction}</p>
        <p><strong>Speed:</strong> ${car.speed} mph</p>
        <p><strong>Status:</strong> ${message}</p>
    `;
}

// Initial display of car information
updateCarInfo("Ready to go!");