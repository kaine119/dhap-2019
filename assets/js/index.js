// 17 Jan 2019, 1am
let deadline = new Date(2019, 5, 6, 0, 0, 0);

let showCountdown = function() {
    let diff = deadline - new Date();

    if (diff > 0) {
        let days = Math.floor(diff / 86400000).toString().padStart(2, '0'); // (24 * 60 * 60 * 1000)
        diff -= days * 86400000;
        let hours = Math.floor(diff / 3600000).toString().padStart(2, '0'); // (60 * 60 * 1000)
        diff -= hours * 3600000;
        let minutes = Math.floor(diff / 60000).toString().padStart(2, '0'); // (60 * 1000)

        // padding
        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
    } else {
        let digits = document.getElementsByClassName('countdown__digits');
        for (var i = 0; i < digits.length; i++) {
            digits[i].style.display = "none";
        }
        document.getElementById("countdown__subtitle").style.display = "none"
        document.getElementById('countdown__over').style.display = "block";
    }

};

showCountdown();

setInterval(showCountdown, 1000)