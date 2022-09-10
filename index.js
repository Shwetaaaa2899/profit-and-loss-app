var initial = document.querySelector('#initial-price');
var quant = document.querySelector('#stocks-quantity');
var current = document.querySelector('#current-price');
var getOutput = document.querySelector('#result');
var outPut = document.querySelector('#output');
function showMsg(msg){
    outPut.innerText = msg;
}
function calculateAns(initial,current,quant){
    if(initial < current){
        // alert("prof");
        var profit = (current-initial)*quant;
        var profPer = ((profit/initial)*100).toFixed(2);
        outPut.innerHTML =  `Yeahh 🤑 it's a profit of Rs. ${profit} and the profit percentage is ${profPer}% `;
        }
    else if(current < initial){
        // alert('loss');
        var loss = (initial-current) * quant;
        var lossPer = ((loss/initial)/100).toFixed(2);
        outPut.innerHTML =  `Oops ⬇️ it's a loss of Rs. ${loss} and the profit percentage is ${lossPer}% `;
    }
    else{
        outPut.innerHTML = "No profit no loss 💯";
    }
};
   
function getAns(){
    if(initial.value == ""  || quant.value == "" || current.value == ''){
        outPut.innerText = "Kindly enter valid values 👀";

    }
    else{
        calculateAns(Number(initial.value),Number(current.value),Number(quant.value));
    }
}
getOutput.addEventListener('click',getAns);