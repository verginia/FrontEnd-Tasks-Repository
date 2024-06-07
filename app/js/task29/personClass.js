class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    introduce() {
        return `My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }

    setEmail(newEmail) {
        this.email = newEmail;
    }

    getEmail() {
        return this.email;
    }
}

function testPerson() {
    // Create instances of the Person class
    const person1 = new Person('Verginia', 'Stolear', 36, 'verginia.stolear@example.com');
    const person2 = new Person('Jane', 'Smith', 25, 'jane.smith@example.com');

    // Log initial introductions and emails
    let output = `<strong>Person 1:</strong> ${person1.introduce()}<br>Email: ${person1.getEmail()}<br><br>`;
    output += `<strong>Person 2:</strong> ${person2.introduce()}<br>Email: ${person2.getEmail()}<br><br>`;

    // Update emails
    person1.setEmail('verginia.new@example.com');
    person2.setEmail('jane.new@example.com');

    // Log updated emails
    output += `<strong>Updated Person 1 Email:</strong> ${person1.getEmail()}<br>`;
    output += `<strong>Updated Person 2 Email:</strong> ${person2.getEmail()}<br>`;

    // Update the output div
    document.getElementById('output').innerHTML = output;
}