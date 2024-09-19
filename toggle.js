document.getElementById('btn-cash-out')
.addEventListener('click',function(){
       document.getElementById('cash-out-form')
       .classList.remove('hidden')
       document.getElementById('add-money-form')
       .classList.add('hidden');                    
})
document.getElementById('btn-add-moey')
.addEventListener('click',function(){
  document.getElementById('cash-out-form')
 .classList.add('hidden')
       document.getElementById('add-money-form')
       .classList.remove('hidde'); 
                       
})
const a= document.getElementById("container").innerHTML = "<p>Hello</p>";
 const b= document.getElementById("container").innerHTML += "<p>World</p>";
 console.log(a,b)