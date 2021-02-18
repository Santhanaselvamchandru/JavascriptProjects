var day = document.getElementById("days");
var hour = document.getElementById("hours");
var minute = document.getElementById("minute");
var second = document.getElementById("sec");

function countDown(){
    const current = new Date();
    const newYear = new Date("1 Jan 2022");
    const totalSeconds = new Date(newYear - current); 
    var days = Math.floor(totalSeconds/(1000 *60 * 60 *24));
    var hours = Math.floor(totalSeconds /(1000 * 60 * 60) % 24);
    var minutes = Math.floor(totalSeconds / (1000 * 60 )% 60);
    var seconds = Math.floor(totalSeconds/(1000 )% 60)
    
    day.innerHTML= days;
    hour.innerHTML=hours;
    minute.innerHTML= minutes;
    second.innerHTML= seconds;
}
countDown();
setInterval(countDown,1000);
function setBackground(){
    var img = ["url('./img/1.jpg')","url('./img/2.jpg')","url('./img/3.jpg')","url('./img/4.jpg')"];
    document.body.style.backgroundImage = img[random()];
};
setInterval(setBackground,2000);
function random(){
    return Math.floor(Math.random()*4);
}