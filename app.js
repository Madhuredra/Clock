setInterval(() => {
    d = new Date();
    hourTime = d.getHours();
    minutesTime = d.getMinutes();
    secondsTime = d.getSeconds();
    /*
    12 hours = 360deg
    1 hours = 30deg;
    h hours = 30*h deg + due to 1 minutes + due to 1 seconds;
    60 minutes = 30 deg => 1 minutes = 1/2 => m minutes = m/2;
    60 seconds = 1/2 => 1 seconds = 1/120 => s seconds = s/120;
    
    final value for h hours = 30*h + m/2 + s/120;
    
    60 min = 360deg => 1 min = 6deg => m min = 6*m;

    60 seconds = 360deg => 1 s  = 6deg => s seondes = 6s;
    */
    hourRotation = 30*hourTime+minutesTime/2+secondsTime/210;
    minutesRotation = 6*minutesTime;
    secondsRotation = 6*secondsTime;
    document.querySelector('#hour').style.transform = `rotate(${hourRotation}deg)`;
    document.querySelector('#minutes').style.transform = `rotate(${minutesRotation}deg)`;
    document.querySelector('#seconds').style.transform = `rotate(${secondsRotation}deg)`;
}, 1000);