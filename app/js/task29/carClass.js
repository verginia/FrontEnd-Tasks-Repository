class Car {
    constructor(make, model, year, speed = 0) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
    }

    brake() {
        this.speed -= 7;
        if (this.speed < 0) {
            this.speed = 0;
        }
    }

    currentSpeed() {
        return this.speed;
    }
}

function testCar() {
    const car = new Car('Toyota', 'Corolla', 2020);

    // Log initial state
    let output = `Initial speed: ${car.currentSpeed()} km/h<br>`;

    // Accelerate the car
    car.accelerate();
    output += `After accelerating: ${car.currentSpeed()} km/h<br>`;

    // Brake the car
    car.brake();
    output += `After braking: ${car.currentSpeed()} km/h<br>`;

    // Update the output paragraph
    document.getElementById('output').innerHTML = output;
}