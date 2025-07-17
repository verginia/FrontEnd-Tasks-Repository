// Define the rectangle object
const rectangle = {
    _width: 0,
    _height: 0,

    get width() {
        return this._width;
    },
    set width(value) {
        if (value < 0) {
            throw new Error("Width cannot be negative");
        } else {
            this._width = value;
        }
    },

    get height() {
        return this._height;
    },
    set height(value) {
        if (value < 0) {
            throw new Error("Height cannot be negative");
        } else {
            this._height = value;
        }
    },

    get perimeter() {
        return (this._width + this._height) * 2;
    },

    get area() {
        return this._width * this._height;
    }
};

// Function to update rectangle properties and display results
function updateRectangle() {
    const widthInput = parseInt(document.getElementById("widthInput").value);
    const heightInput = parseInt(document.getElementById("heightInput").value);
    const errorMessageElement = document.getElementById("errorMessage");

    try {
        rectangle.width = widthInput;
        rectangle.height = heightInput;
        errorMessageElement.textContent = ""; // Clear any previous error messages
        document.getElementById("perimeter").textContent = `Perimeter: ${rectangle.perimeter}`;
        document.getElementById("area").textContent = `Area: ${rectangle.area}`;
    } catch (error) {
        errorMessageElement.textContent = error.message;
    }
}

// Initial update to set default values
updateRectangle();