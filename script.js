// document.addEventListener('DOMContentLoaded', function () {
//     const root = document.getElementById('root');

//     const textarea = createEl('textarea', { placeholder: 'Enter your text here...', id: 'textInput' });
//     root.appendChild(textarea);

//     const submitButton = createEl('button', { textContent: 'Submit', id: 'submitBtn' });
//     submitButton.addEventListener('click', function () {
//         const text = textarea.value.trim();
//         const freqTable = text.split(/\s+/).reduce((table, word) => (table[word] = (table[word] || 0) + 1, table), {});
//         console.log('Frequency Table:', freqTable);
//         renderTopWords(freqTable);
//     });
//     root.appendChild(submitButton);
// });

// function createEl(tag, props) {
//     const el = document.createElement(tag);
//     Object.assign(el, props);
//     if (tag === 'textarea') {
//         el.style.width = '100%'; // Set the width to 100% of its container
//         el.style.height = '200px'; // Set the height to 200 pixels
//     }
//     return el;
// }


// function renderTopWords(freqTable) {
//     const root = document.getElementById('root');
//     const topWords = Object.entries(freqTable).sort((a, b) => b[1] - a[1]).slice(0, 5);
//     const resultDiv = createEl('div', { id: 'result' });
//     const table = createEl('table');
//     table.innerHTML = `<tr><th>Word</th><th>Frequency</th></tr>`;
//     topWords.forEach(([word, freq]) => {
//         table.innerHTML += `<tr><td>${word}</td><td>${freq}</td></tr>`;
//     });
//     resultDiv.appendChild(table);
//     root.appendChild(resultDiv);
// }


document.addEventListener('DOMContentLoaded', function () {
    const root = document.getElementById('root');

    const textarea = createEl('textarea', { placeholder: 'Enter your text here...', id: 'textInput' }, 'input-box');
    root.appendChild(textarea);

    const submitButton = createEl('button', { textContent: 'Submit', id: 'submitBtn' }, 'submit-button');
    submitButton.addEventListener('click', function () {
        const text = textarea.value.trim();
        const freqTable = text.split(/\s+/).reduce((table, word) => (table[word] = (table[word] || 0) + 1, table), {});
        console.log('Frequency Table:', freqTable);
        renderTopWords(freqTable);
    });
    root.appendChild(submitButton);
});

function createEl(tag, props, className) {
    const el = document.createElement(tag);
    Object.assign(el, props);
    if (className) {
        el.classList.add(className); // Add the provided class to the element
    }
    if (tag === 'textarea') {
        el.style.width = '100%'; // Set the width to 100% of its container
        el.style.height = '200px'; // Set the height to 200 pixels
    }
    return el;
}

function renderTopWords(freqTable) {
    const root = document.getElementById('root');
    const topWords = Object.entries(freqTable).sort((a, b) => b[1] - a[1]).slice(0, 5);
    const resultDiv = createEl('div', { id: 'result' });
    const table = createEl('table');
    table.innerHTML = `<tr><th>Word</th><th>Frequency</th></tr>`;
    topWords.forEach(([word, freq]) => {
        table.innerHTML += `<tr><td>${word}</td><td>${freq}</td></tr>`;
    });
    resultDiv.appendChild(table);
    root.appendChild(resultDiv);
}
