document.getElementById('add-money')
.addEventListener('click',function(event){
  event.preventDefault();
  const addMoney=document.getElementById('amount').value; 
  const addpin=document.getElementById('pinnumber').value; 
  console.log(addMoney,addpin) 

  if(addpin === 'eti'){
      const amount=document.getElementById('my-money').innerText;                        
      const addedmoney=parseFloat(addMoney)                        
       const  ownmoney=parseFloat(amount) 
      const finalMoney=addedmoney+ownmoney;
      console.log(finalMoney)
      document.getElementById('my-money').innerText=finalMoney;                     
  }
  else{
     alert('wrong pin number')                         
  }
                      
})   
