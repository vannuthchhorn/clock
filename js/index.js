var clock = () => {
    let time = new Date();
    let hours = (time.getHours()% 12).toString();
    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString(); 
    let clocks = document.getElementById("timer");
    // add 0 to clock
    if (hours.length < 2){
        hours = '0' + hours;
    }
    if (minutes.length < 2){
        minutes = '0' + minutes;
    }
    if (seconds < 2){
        seconds = '0' + seconds;
    }
    //for alert AM OR PM
    if (time.getHours() < 12){
        clocks.innerHTML = hours + ":" + minutes + ":" + seconds + " " + "AM"; 
    }else{
        clocks.innerHTML = hours + ":" + minutes + ":" + seconds + " "+ "PM"; 
    }
    // for alert message 
    if(time.getHours() < 12){
        document.getElementById("message").innerHTML = "Good morning!";
    }
    if (time.getHours() > 12 && time.getHours() < 17){
        document.getElementById("message").innerHTML = "Good afternoon!";
    }
    if (time.getHours() >= 17 && time.getHours() < 19){
        document.getElementById("message").innerHTML = "Good evening!";
    }
    if(time.getHours() >= 19){
        document.getElementById("message").innerHTML = "Good night!";
    }
}
setInterval(clock, 1000);


