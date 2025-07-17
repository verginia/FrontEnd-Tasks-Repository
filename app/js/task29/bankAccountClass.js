class BankAccount {
    #accountNumber;
    #balance;

    constructor(accountNumber, balance, accountType) {
        this.#accountNumber = accountNumber;
        this.#balance = balance;
        this.accountType = accountType;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log('Insufficient funds');
        }
    }

    checkBalance() {
        return this.#balance;
    }

    #setAccountNumber(newAccountNumber) {
        this.#accountNumber = newAccountNumber;
    }

    #getAccountNumber() {
        return this.#accountNumber;
    }

    // Public method to test private methods
    testPrivateMethods() {
        this.#setAccountNumber('NEW198866');
        return this.#getAccountNumber();
    }
}

function testBankAccount() {
    // Create an instance of the BankAccount class
    const account = new BankAccount('123456789', 1000, 'Checking');

    // Log initial state
    let output = `<strong>Account Type:</strong> ${account.accountType}<br>`;
    output += `<strong>Initial Balance:</strong> $${account.checkBalance()}<br>`;

    // Deposit money
    account.deposit(500);
    output += `<strong>After Deposit:</strong> $${account.checkBalance()}<br>`;

    // Withdraw money
    account.withdraw(300);
    output += `<strong>After Withdrawal:</strong> $${account.checkBalance()}<br>`;

    // Withdraw more than the balance
    account.withdraw(1500);
    output += `<strong>Attempt Overdraw:</strong> $${account.checkBalance()}<br>`;

    // Test private methods
    const newAccountNumber = account.testPrivateMethods();
    output += `<strong>New Account Number (via private method):</strong> ${newAccountNumber}<br>`;

    // Update the output div
    document.getElementById('output').innerHTML = output;
}