// This function will fetch the list of supported currencies and populate the dropdowns
async function fetchSupportedCurrencies() {
    try {
      const response = await fetch('https://api.yourcurrencyapi.com/supported-currencies');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      populateCurrencyOptions(data.supportedCodes);
    } catch (error) {
      console.error('Error fetching supported currencies:', error);
      // Display the error to the user
      displayError('Could not fetch supported currencies. Please try again later.');
    }
  }
  
  // This function will convert the amount from one currency to another
  async function convertCurrency(fromCurrency, toCurrency, amount) {
    try {
      const response = await fetch(`https://api.yourcurrencyapi.com/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      displayConvertedAmount(data.convertedAmount);
    } catch (error) {
      console.error('Error converting currency:', error);
      // Display the error to the user
      displayError('Error during currency conversion. Please try again later.');
    }
  }
  
  // Display an error message to the user
  function displayError(message) {
    const errorElement = document.getElementById('error');
    errorElement.textContent = message;
    errorElement.style.display = 'block'; // Ensure the error is visible
  }
  
  // Hide the error message from the user
  function clearError() {
    const errorElement = document.getElementById('error');
    errorElement.style.display = 'none'; // Hide the error element
  }
  
  // Add the clearError function call to the beginning of event listeners
  document.getElementById('convertButton').addEventListener('click', () => {
    clearError();
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = document.getElementById('amount').value;
  
    if (fromCurrency && toCurrency && amount) {
      convertCurrency(fromCurrency, toCurrency, amount);
    } else {
      displayError('Please fill in all the fields.');
    }
  });
  document.getElementById('switchButton').addEventListener('click', () => {
    clearError();
    switchCurrencies();
  });
  