document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
  
    let fromCurrency = document.getElementById('fromCurrency');
    let toCurrency = document.getElementById('toCurrency');
    let amountInput = document.getElementById('amount');
    let convertButton = document.getElementById('convertButton');
    let switchButton = document.getElementById('switchButton');
    let clearButton = document.getElementById('clearButton'); 
    let convertedAmount = document.getElementById('convertedAmount');
  
    let apiKey = '38236311085f1daa9468eeb6';
    let apiUrl = 'https://v6.exchangerate-api.com/v6/';
  
    // Fetch and populate currency options
    async function fetchCurrencies() {
        console.log('Fetching currencies...');
        try {
            const response = await fetch(`${apiUrl}${apiKey}/codes`);
            if (!response.ok) {
                console.error('Failed to fetch currencies: Response not OK');
                return; 
            }
            let data = await response.json();
            console.log('Currencies fetched:', data);
            let options = data.supported_codes.map(([code, name]) => 
                `<option value="${code}">${code} - ${name}</option>`
            ).join('');
            document.getElementById('fromCurrencyOptions').innerHTML = options;
            document.getElementById('toCurrencyOptions').innerHTML = options;
        } catch (error) {
            console.error('Failed to fetch currencies:', error);
        }
    }
  
    // Convert currency
    async function convertCurrency() {
        let from = fromCurrency.value.split(' - ')[0]; // Get the code part only
        let to = toCurrency.value.split(' - ')[0]; // Get the code part only
        let amount = amountInput.value;
        console.log(`Converting currency from ${from} to ${to} for amount ${amount}`);
        try {
            let response = await fetch(`${apiUrl}${apiKey}/pair/${from}/${to}/${amount}`);
            if (!response.ok) {
                console.error('Failed to convert currency: Response not OK');
                convertedAmount.textContent = `Conversion failed. Try again.`;
                convertedAmount.style.display = 'block';
                return;
            }
            let data = await response.json();
            console.log('Conversion result:', data);
            convertedAmount.textContent = `${amount} ${from} = ${data.conversion_result} ${to}`;
            convertedAmount.style.display = 'block';
        } catch (error) {
            console.error('Failed to convert currency:', error);
            convertedAmount.textContent = `Conversion failed. Try again.`;
            convertedAmount.style.display = 'block';
        }
    }
  
    // Switch currencies and recalculate
    function switchCurrencies() {
        console.log('Switching currencies');
        let fromValue = fromCurrency.value;
        fromCurrency.value = toCurrency.value;
        toCurrency.value = fromValue;
        // Automatically trigger a recalculation when switching
        convertCurrency();
    }

    // Clear input fields and output
    function clearFields() {
        fromCurrency.value = '';
        toCurrency.value = '';
        amountInput.value = '';
        convertedAmount.style.display = 'none';
        convertedAmount.textContent = '';
    }
  
    fetchCurrencies();
  
    convertButton.addEventListener('click', () => {
        console.log('Convert button clicked');
        convertCurrency();
    });
    
    switchButton.addEventListener('click', () => {
        console.log('Switch button clicked');
        switchCurrencies();
    });

    clearButton.addEventListener('click', () => {
        console.log('Clear button clicked');
        clearFields();
    });
});
