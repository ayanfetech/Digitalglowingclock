//Declaring Variable for light and dark mode


const body = document.querySelector('body');
const btn = document.querySelector('button');
btn.textContent = "Toggle Light Mode"

//Dark and Light Mode toogle button event
btn.addEventListener('click', ()=>{
   //Dark Mode Toggle
   if (!body.classList.contains('active')) {
      body.classList.add('active');
      btn.textContent = "Toggle Dark Mode";
   }else//Light Mode Toggle
   {
      body.classList.remove('active');
      btn.textContent = "Toggle Light Mode";
   }
   
});

//Time Showcasing
setInterval(()=>{
//variable declaration.

const time = document.querySelector('#time');

// getting current time from Date() object.

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let dayNight = "AM"
//Setting it in 12hrs Clock

if(hours > 12){
   dayNight = "PM"
   hours = hours - 12
}
if (hours < 10) {
      hours ="0" + hours
   }
if (minutes < 10) {
   minutes = "0" + minutes
}
if (seconds < 10) {
   seconds = "0" + seconds
}

//Displaying current time on the webpage

time.textContent = hours + ":" + minutes + ":" + seconds + " " +dayNight;
})