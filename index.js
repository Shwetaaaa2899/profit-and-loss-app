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
        var profPer = ((profit/(initial*quant))*100).toFixed(2);
        showMsg(`Yeahh 🤑 it's a profit of Rs. ${profit} and the profit percentage is ${profPer}% `);
        }
    else if(current < initial){
        // alert('loss');
        var loss = (initial-current) * quant;
        var lossPer = ((loss/(initial*quant)*100)).toFixed(2);
        showMsg(`Oops ⬇️ it's a loss of Rs. ${loss} and the loss percentage is ${lossPer}%`);
    }
    else{
        showMsg("No profit no loss 💯");
    }
};
   
function getAns(){
    if(initial.value == ""  || quant.value == "" || current.value == ''){
        showMsg("Blank values are not valid to see the results 👀");

    }
    else if(initial.value ==0 || quant.value == 0 || current.value == 0){
        showMsg("Zero as  a value for inputs  is  not valid to see the results 👀");
    }
    
    else if(initial.value < 0 || quant.value < 0 || current.value < 0){
        showMsg("Negative values for  inputs  is  not valid to see the results 👀");
    }
    else{
        return calculateAns(Number(initial.value),Number(current.value),Number(quant.value));
    }
};
getOutput.addEventListener('click',getAns);