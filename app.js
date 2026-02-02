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
   
 

// function updateTime() {
// const now =  new Date();

// let day = now.getDate();
// let month = now.getMonth() + 1;
// let  year = now.getFullYear();

// let hour = now.getHours();
// let min = now.getMinutes();
// let sec = now.getSeconds();

// // if(day < 10) day = "0" + day;
// // if(month < 10) month = "0" + month;
// // if(hour < 10) hour = "0" + hour;
// // if(min < 10) min = "0" + min;
// // if(sec < 10) sec = "0" + sec;
// day = day < 10 ? '0' + day : day;
// month = month < 10 ? '0' + month : month;
// hour = hour < 10 ? '0' + hour : hour;
// min = min < 10 ? '0' + min : min;
// sec = sec < 10 ? '0' + sec : sec;


// time.textContent = `Date : ${day}/${month}/${year} 
//                     Time : ${hour}:${min}:${sec}`;

// };
// //updateTime();
// setInterval(updateTime, 1000);
//👉 Digital Clock → Counter App → To-Do List → Quiz App
 









