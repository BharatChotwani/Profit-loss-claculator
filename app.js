const initialPrice = document.querySelector('#initial-price');
const quantityStocks = document.querySelector('#quantity-stocks');
const currentPrice = document.querySelector('#current-stocks');
const sumbitBtn = document.querySelector('#sumbit-btn');
const output = document.querySelector('#output-box');

function calculateLossAndProfit(initial, quantity, current) {

    if(initial < 1 || quantity < 1 || current < 1){
        showOutput("Enter values greater than 0");
    output.style.color = 'red';} else{
        if(initial > current) {
            var loss = (initial - current) * quantity;
            var lossPercentage = (loss/current) * 100;
    
            showOutput(`Namaste the loss is ${loss.toFixed(2)} and the percent is ${lossPercentage.toFixed(2)}%`);
            output.style.color = 'red';
        } else if (current > initial){
            var profit = (current - initial) * quantity;
            var profitPercentage = (profit/initial) * 100;
            showOutput(`Namaste the profit is ${profit.toFixed(2)} and the percent is ${profitPercentage.toFixed(2)}%`);
            output.style.color = 'white';
            
        }
    }
}

function submitHandler(){
    var iP = Number(initialPrice.value);
    var qS = Number(quantityStocks.value);
    var currP = Number(currentPrice.value);
    calculateLossAndProfit(iP, qS, currP);
}

function showOutput(message){
    output.innerHTML = message;
    
}




sumbitBtn.addEventListener('click', submitHandler)
