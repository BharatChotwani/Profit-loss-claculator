const initialPrice = document.querySelector("#initial-price");
const quantityStocks = document.querySelector("#quantity-stocks");
const currentPrice = document.querySelector("#current-stocks");
const sumbitBtn = document.querySelector("#sumbit-btn");
const output = document.querySelector("#output-box");

function calculateLossAndProfit(initial, quantity, current) {
  switch (true) {
    case (initial == '' || quantity == '' || current == ''):
      showOutput("Please fill the inputs");
      break;
    case (initial === current):
      // code for this condition here
      showOutput("No profit and No loss");
      break;
  
    case (initial < 1 || quantity < 1 || current < 1):
      // code for this condition here
      showOutput("Enter values greater than 0");
      output.style.color = "red";
      break;
  
    case (initial > current):
      // code for this condition here
      var loss = (initial - current) * quantity;
      var lossPercentage = (loss / current) * 100;

      showOutput(
        `Namaste the loss is ${loss.toFixed(
          2
        )} and the percent is ${lossPercentage.toFixed(2)}%`
      );
      output.style.color = "red";
      break;
  
    case (current > initial):
      // code for this condition here
      var profit = (current - initial) * quantity;
      var profitPercentage = (profit / initial) * 100;
      showOutput(
        `Namaste the profit is ${profit.toFixed(
          2
        )} and the percent is ${profitPercentage.toFixed(2)}%`
      );
      output.style.color = "green";
      break;

      default:
      showOutput("Please fill the inputs");
      break;
  }
}

function submitHandler() {
  var iP = Number(initialPrice.value);
  var qS = Number(quantityStocks.value);
  var currP = Number(currentPrice.value);
  calculateLossAndProfit(iP, qS, currP);
}

function showOutput(message) {
  output.innerHTML = message;
}

sumbitBtn.addEventListener("click", submitHandler);
