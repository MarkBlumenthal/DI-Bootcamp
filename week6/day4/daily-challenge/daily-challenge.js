function submitForm() {
    // Retrieve values from input fields
    var name = document.getElementById('name').value;
    var lastName = document.getElementById('lastName').value;

    // Create JSON object
    var jsonOutput = {
        "name": name,
        "lastname": lastName
    };

    // Append JSON string to the DOM
    var output = document.getElementById('output');
    output.textContent = JSON.stringify(jsonOutput, null, 2);
}