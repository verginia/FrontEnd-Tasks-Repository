        // Function to extract numbers from a string
        function extractNumbers() {
            const str = document.getElementById('inputNumbers').value;
            const numbers = str.match(/\d+/g).map(Number);
            document.getElementById('resultNumbers').innerText = `Numbers: ${numbers.join(', ')}`;
        }

        // Function to find capitalized words
        function findCapitalizedWords() {
            const str = document.getElementById('inputCapitalizedWords').value;
            const words = str.match(/\b[A-Z][a-z]*\b/g);
            document.getElementById('resultCapitalizedWords').innerText = `Capitalized Words: ${words ? words.join(', ') : 'None'}`;
        }

        // Function to validate date format 'YYYY-MM-DD'
        function validateDateFormat() {
            const dateStr = document.getElementById('inputDateFormat').value;
            const regex = /^\d{4}-\d{2}-\d{2}$/;
            let isValid = regex.test(dateStr);

            if (isValid) {
                const [year, month, day] = dateStr.split('-').map(Number);
                const date = new Date(year, month - 1, day);
                isValid = date.getFullYear() === year && (date.getMonth() + 1) === month && date.getDate() === day;
            }

            document.getElementById('resultDateFormat').innerText = `Date is ${isValid ? 'valid' : 'invalid'}`;
        }

        // Function to find duplicate words
        function findDuplicateWords() {
            const str = document.getElementById('inputDuplicateWords').value.toLowerCase();
            const words = str.match(/\b\w+\b/g);
            const wordCounts = {};
            const duplicates = [];

            words.forEach(word => {
                wordCounts[word] = (wordCounts[word] || 0) + 1;
                if (wordCounts[word] === 2) duplicates.push(word);
            });

            document.getElementById('resultDuplicateWords').innerText = `Duplicate Words: ${duplicates.join(', ')}`;
        }

        // Function to extract the domain from an email
        function extractDomain() {
            const email = document.getElementById('inputEmail').value;
            const domain = email.substring(email.lastIndexOf("@") + 1);
            document.getElementById('resultEmail').innerText = `Domain: ${domain}`;
        }