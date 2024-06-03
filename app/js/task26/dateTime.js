// Task 1: Get Month Name
function getMonthName(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthNames[date.getMonth()];
}

function displayMonthName() {
    const dateInput = document.getElementById('date-input').value;
    const date = new Date(dateInput);
    const monthName = getMonthName(date);
    document.getElementById('month-name').innerText = monthName;
}

// Task 2: Check Same Weekday
function isSameWeekday(date1, date2) {
    return date1.getDay() === date2.getDay();
}

function checkSameWeekday() {
    const date1Input = document.getElementById('date1-input').value;
    const date2Input = document.getElementById('date2-input').value;
    const date1 = new Date(date1Input);
    const date2 = new Date(date2Input);
    const result = isSameWeekday(date1, date2);
    document.getElementById('same-weekday-result').innerText = result ? "Same weekday" : "Different weekdays";
}

// Task 3: Get Date Difference in Days
function dateDifferenceInDays(date1, date2) {
    const timeDifference = Math.abs(date2 - date1);
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
}

function displayDateDifference() {
    const startDateInput = document.getElementById('start-date-input').value;
    const endDateInput = document.getElementById('end-date-input').value;
    const startDate = new Date(startDateInput);
    const endDate = new Date(endDateInput);
    const difference = dateDifferenceInDays(startDate, endDate);
    document.getElementById('date-difference').innerText = `${difference} days`;
}

// Task 4: Display Current Date and Time in Real Time
function updateCurrentDateTime() {
    const now = new Date();
    document.getElementById('current-date-time').innerText = now.toString();
}

setInterval(updateCurrentDateTime, 1000);

// Task 5: Get Minimum Date
function getMinimumDate(dates) {
    return new Date(Math.min.apply(null, dates));
}

function displayMinimumDate() {
    const date1Input = document.getElementById('date-array-input1').value;
    const date2Input = document.getElementById('date-array-input2').value;
    const date3Input = document.getElementById('date-array-input3').value;
    const dates = [new Date(date1Input), new Date(date2Input), new Date(date3Input)];
    const minDate = getMinimumDate(dates);
    document.getElementById('minimum-date').innerText = minDate.toDateString();
}

// Task 6: Get Window Size
function displayWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById('window-size').innerText = `Width: ${width}px, Height: ${height}px`;
}

// Add event listener for window resize
window.addEventListener('resize', displayWindowSize);