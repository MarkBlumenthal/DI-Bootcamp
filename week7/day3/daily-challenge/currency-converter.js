// This function will fetch the list of supported currencies and populate the dropdowns
async function fetchSupportedCurrencies() {
  try {
      const response = await fetch('https://v6.exchangerate-api.com/v6/38236311085f1daa9468eeb6/codes');
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data); // Check the fetched data
      populateCurrencyOptions(data.supportedCodes);
  } catch (error) {
      console.error('Error fetching supported currencies:', error);
      displayError('Could not fetch supported currencies. Please try again later.');
  }
}


// This function will convert the amount from one currency to another
async function convertCurrency(fromCurrency, toCurrency, amount) {
  try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/38236311085f1daa9468eeb6/pair/${fromCurrency}/${toCurrency}/${amount}`);
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      displayConvertedAmount(data.conversion_result);
  } catch (error) {
      console.error('Error converting currency:', error);
      // Display the error to the user
      displayError('Error during currency conversion. Please try again later.');
  }
}

// Function to populate currency options in dropdowns
function populateCurrencyOptions(supportedCodes) {
  const fromCurrencyDropdown = document.getElementById('fromCurrency');
  const toCurrencyDropdown = document.getElementById('toCurrency');

  supportedCodes.forEach(code => {
      const option = document.createElement('option');
      option.value = code[0]; // Assuming code is an array with [currencyCode, currencyName]
      option.textContent = `${code[0]} - ${code[1]}`;
      fromCurrencyDropdown.appendChild(option.cloneNode(true));
      toCurrencyDropdown.appendChild(option);
  });
}

// Display an error message to the user
function displayError(message) {
  const errorElement = document.getElementById('error');
  errorElement.textContent = message;
  errorElement.style.display = 'block'; 
}

// Hide the error message from the user
function clearError() {
  const errorElement = document.getElementById('error');
  errorElement.style.display = 'none'; 
}

// Function to switch currencies
function switchCurrencies() {
  const fromCurrency = document.getElementById('fromCurrency');
  const toCurrency = document.getElementById('toCurrency');
  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;
}


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


fetchSupportedCurrencies();

  