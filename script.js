// When the whole HTML document has been loaded and parsed...
document.addEventListener('DOMContentLoaded', function () {
    // Find the element in the HTML with the ID 'root' and save it in a variable named 'root'
    const root = document.getElementById('root');

    // Create a textarea element
    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Enter your text here...'; // Set a placeholder text inside the textarea
    textarea.id = 'textInput'; // Give the textarea an ID named 'textInput'
    root.appendChild(textarea); // Put the textarea inside the 'root' element

    // Create a button element
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit'; // Set the text content of the button to 'Submit'
    submitButton.id = 'submitBtn'; // Give the button an ID named 'submitBtn'
    root.appendChild(submitButton); // Put the button inside the 'root' element

    // When the submit button is clicked...
    submitButton.addEventListener('click', function () {
        // Get the text that the user typed inside the textarea
        const text = textarea.value.trim();

        // Split the text into individual words
        const words = text.split(/\s+/);

        // Create an empty object to store the frequency of each word
        const frequencyTable = {};

        // Count the frequency of each word
        words.forEach(word => {
            if (frequencyTable[word]) {
                frequencyTable[word]++; // If the word already exists in the frequency table, increment its count
            } else {
                frequencyTable[word] = 1; // If the word doesn't exist in the frequency table yet, set its count to 1
            }
        });

        // Log the frequency table to the console for grading purposes
        console.log('Frequency Table:', frequencyTable);

        // Render the top 5 most frequent words in the UI
        renderTopWords(frequencyTable);
    });

    // Function to render the top 5 most frequent words in the UI
    function renderTopWords(frequencyTable) {
        // Clear any previous result displayed in the UI
        const resultDiv = document.getElementById('result');
        if (resultDiv) {
            resultDiv.remove();
        }

        // Create an empty array to store the sorted words
        const sortedWords = [];

        // Convert the frequency table into an array of objects
        for (let word in frequencyTable) {
            sortedWords.push({ word: word, frequency: frequencyTable[word] });
        }

        // Sort the array of objects by frequency in descending order
        sortedWords.sort((a, b) => b.frequency - a.frequency);

        // Take the top 5 most frequent words
        const topWords = sortedWords.slice(0, 5);

        // Create a new HTML table element
        const table = document.createElement('table');

        // Create a table row for the table header
        const headerRow = document.createElement('tr');

        // Create table header cells for 'Word' and 'Frequency'
        const wordHeader = document.createElement('th');
        wordHeader.textContent = 'Word';
        const frequencyHeader = document.createElement('th');
        frequencyHeader.textContent = 'Frequency';

        // Append the table header cells to the table header row
        headerRow.appendChild(wordHeader);
        headerRow.appendChild(frequencyHeader);

        // Append the table header row to the table
        table.appendChild(headerRow);

        // Create a table body for the table
        const tableBody = document.createElement('tbody');

        // Loop through the top 5 most frequent words
        topWords.forEach(item => {
            // Create a table row for each word-frequency pair
            const row = document.createElement('tr');

            // Create table cells for the word and its frequency
            const wordCell = document.createElement('td');
            wordCell.textContent = item.word;
            const frequencyCell = document.createElement('td');
            frequencyCell.textContent = item.frequency;

            // Append the table cells to the table row
            row.appendChild(wordCell);
            row.appendChild(frequencyCell);

            // Append the table row to the table body
            tableBody.appendChild(row);
        });

        // Append the table body to the table
        table.appendChild(tableBody);

        // Create a div element to hold the table
        const resultContainer = document.createElement('div');
        resultContainer.id = 'result'; // Give the div an ID named 'result'
        resultContainer.appendChild(table); // Put the table inside the div

        // Put the div inside the 'root' element
        root.appendChild(resultContainer);
    }
});
