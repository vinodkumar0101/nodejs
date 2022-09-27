var wakeuptime= 7;
var noon = 12 ;
var lunchtime=12;
var naptime = lunchtime+2;
var partytime;
var evening =18;

var showCurrentTime = function()
{
    var clock = document.getElementById('clock');
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
    //set hours
    if (hours >= noon){
        meridian = "PM";
    }
    if(hours > noon){
        hours = hours-12
    }
    //set minutes
    if(minutes<10){
        minutes = "0" +minutes;
    }
    //set seconds
    if(seconds<10){
        seconds = "0" + seconds;
    }
    //putting together the string that displays the time
    var clockTime = hours + ":"+minutes+":"+seconds+" "+meridian+"!";
    clock.innerText = clockTime;
};
//getting the clock to increment on its own and change out messages and pictures
var updateClock = function()
{
    var time = new Date().getHours();
    var messagesText;
    var imgage = "clock.jpg";
    var timeEventJS = document.getElementById("timeEvent");
    var mycatImageJS = document.getElementById("clockimg");
    
    if (time==partytime)
    {
        image = "party.jpg";
        messagesText = "Let's party";
    }
    else if (time == wakeuptime)
    {
        image = "wakeup.jpg";
        messagesText = "Wakeup time";
    }
    else if (time == lunchtime)
    {
        image = "lunch.jpg";
        messagesText = "Lunch Time";
    }
    else if (time == naptime)
    {
        image = "sleep.jpg";
        messagesText = "Sleeping Time";
    }
    else if (time < noon ){
        image = "gm.png";
        messagesText = "Good morning ";
    }
    else if (time>=evening){
        image ="sleep.jpg";
        messagesText = "good afternoon";
    }

    else{
        image = "bed.jpg"
        messagesText = "Good Day!"
    }
    console.log(messagesText);
    timeEventJS.innerText = messagesText;
    mycatImageJS.src = image;

    showCurrentTime();

};
updateClock();

//getting the clock to increment once a second
var oneSecond = 1000;
setInterval(updateClock,oneSecond);

//getting the party time button to work
var partybutton = document.getElementById("partytimebutton");
 
var partyEvent = function()
{
    if(partytime < 0)
    {
        partytime = new Date().getHours();
        partytimebutton.innerText = "Party Over";
        partytimebutton.style.backgroundColor = "#0A8DAB";

    }
    else{
        partytime = -1;
        partytimebutton.innerText = "Party Time!";
        partytimebutton.style.backgroundColor = "#222";
    }
};
partybutton.addEventListener("click",partyEvent);
partyEvent();
//Activate wakeup selector
var wakeuptimeselect = document.getElementById("wakeuptimeselect");

var wakeupEvent = function()
{
    wakeuptime = wakeuptimeselect.value;
    document.write(wakeuptime)
};
wakeupTimeselector.addEventListener("change",wakeupEvent);
//activate lulnch selector
var lunchtimeselect = document.getElementById("lunchtimeselect");

var lunchEvent = function()
{
    lunchtime = lunchtimeselect.value;

};
lunchTimeSelector.addEventListener("change",lunchEvent);

//active nap time selector
var naptimeselect = document.getElementById("naptimeselect");

var napEvent = function()
{
    naptime = naptimeselect.value;

};
napTimeSelector.addEventListener("change",napEvent);