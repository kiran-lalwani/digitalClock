let clock = document.querySelector(".clock-box");
 let count = document.querySelector("#count");
 let btnPlus = document.querySelector("#btn-plus");
let btnMinus = document.querySelector("#btn-minus");
 let rstbtn = document.querySelector("#rst");
 let currentVal = 0;


 function updateColor() {
     if(currentVal < 0){
    count.style.color = "red";
    }else{
    count.style.color = "#461220"; 
    }
 }
    btnPlus.addEventListener("click",()=>{
    currentVal++;
    count.innerText = "Count ="+ currentVal;
    updateColor()
    })
     btnMinus.addEventListener("click",()=>{
      currentVal--;
    count.innerText = "Count ="+ currentVal;
    updateColor()
    })
     rstbtn.addEventListener("click",()=>{
    count.innerText= "Count = 0";
   updateColor()
    });
   
 



 









