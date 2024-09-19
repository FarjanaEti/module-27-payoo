document.getElementById('add-money').addEventListener('click',function(event){
     event.preventDefault();
     //console.log('skdf') ; 
     const addMoney=document.getElementById('amount').value;
     const addPInNumber=document.getElementById('pinnumber').value;
     console.log(addMoney,addPInNumber)
     if(addPInNumber=== '1234'){
          console.log('adding money to your account')
          const balance=document.getElementById('account-money').innerText;
          const balanceNumber=parseFloat(balance)
          const addMoneyNumber=parseFloat(addMoney)
          const finalMoney=balanceNumber+addMoneyNumber;
          console.log(finalMoney);
          document.getElementById('account-money').innerText=finalMoney;     }  
     else{
          alert('invalid pin')
     }        
     
    
});
