function submitForm() {
  
    const name = document.querySelector('#name').value;
    const lastName = document.querySelector('#lastName').value;

    
    const jsonOutput = { name, lastname: lastName };


    document.querySelector('#output').textContent = JSON.stringify(jsonOutput, null, 2);
}
