const data = document.querySelector(".section");

setInterval(function (){
    let time = new Date();
   
    data.innerHTML = time.toLocaleTimeString();
    
},1000)