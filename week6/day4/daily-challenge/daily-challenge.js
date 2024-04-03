

function submitForm() {

    const name = document.querySelector('#name').value;
    const lastName = document.querySelector('#lastName').value;
    
    const jsonOutput = { name, lastname: lastName };
    
    const pre = document.createElement('pre');
    
    pre.textContent = JSON.stringify(jsonOutput, null, 2);
    
    let outputElement = document.querySelector('#output');
    if (outputElement) {
        outputElement.textContent = pre.textContent;
    } else {
        pre.id = 'output';
        document.body.appendChild(pre);
    }
}
