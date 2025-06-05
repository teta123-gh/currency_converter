const currencies = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75,
    RWF: 9.86,
    NRA: 1200,
    SHL: 2900,
};

function convertCurrency() {
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const amount = parseFloat(document.getElementById('amount').value);

    const resultField = document.getElementById('result');

    if (!currencies[fromCurrency] || !currencies[toCurrency]) {
        resultField.textContent = "Currency not found!";
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        resultField.textContent = "Please enter a valid amount.";
        return;
    }

    const convertedAmount = (amount * currencies[toCurrency]) / currencies[fromCurrency];
    resultField.textContent = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
}

