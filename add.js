document.getElementById('btn-click').addEventListener('click', function(event){
//   prevent default behavior(reload browser)
  event.preventDefault();
  console.log('click')
  //get phn number
  const phnNumber=document.getElementById('number').value
  const pinNUmber=document.getElementById('pin-number').value;
  console.log(phnNumber,pinNUmber)
  if(phnNumber==='1234' && pinNUmber === 'eti'){
       console.log('loged in');  
       window.location.href='/home.html'                    
  }
  else{
     alert('wrong phn number or pin');                        
  }
})