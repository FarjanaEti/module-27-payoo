
document.getElementById('out-money')
.addEventListener('click',function(event){
    event.preventDefault();
    const cashOut=document.getElementById('amount-to-withdraw').value;
    const pin=document.getElementById('pinNumber').value;
    console.log(cashOut,pin) ;
    
    if(pin=== '1234'){
        console.log('withdraw from your account')
        const accountMoney=document.getElementById('account-money').innerText;
        const accountMoneyNumber=parseFloat(accountMoney);
        const cashOutNumber=parseFloat(cashOut);
        const afterWithdraw=accountMoneyNumber-cashOutNumber;
         document.getElementById('account-money').innerText=afterWithdraw;
        console.log(afterWithdraw)                      
    }
    else{
       alert('please try again')                       
    }
})