const btn = document.getElementById("getDate");
const date =document.getElementById("date")
let today = new Date();
today.setHours (0,0,0,0);

btn.addEventListener("click", changeDate)


function changeDate (e) {
    date.innerHTML = "Today's Date is: " +today;
// setTimeout(()=>{
//     date.innerHTML = "";
// },3000)
} 


btn.style.background = "green";
btn.classList.add("btn-success");
date.style.fontSize = "30px";













