// 17 Jan 2019, 1am
let deadline = new Date(2019, 5, 6, 0, 0, 0);
let launchDate = new Date(2019, 0, 1, 0, 0, 0);
let totalDays = (deadline - launchDate) / 86400000;
console.log(totalDays);

let showCountdown = function() {
    let diff = deadline - new Date();

    if (diff > 0) {
        let days = Math.floor(diff / 86400000); // (24 * 60 * 60 * 1000)
        diff -= days * 86400000;
        let hours = Math.floor(diff / 3600000); // (60 * 60 * 1000)
        diff -= hours * 3600000;
        let minutes = Math.floor(diff / 60000); // (60 * 1000)
        diff -= minutes * 60000
        let seconds = Math.floor(diff / 1000);



        document.getElementById('days').innerText = days.toString().padStart(2, '0');
        document.getElementById('days__rect').style.strokeDashoffset = (1000 - (days / totalDays) * 1000);
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('hours__rect').style.strokeDashoffset = (1000 - (hours/60) * 1000);
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('minutes__rect').style.strokeDashoffset = (1000 - (minutes / 60) * 1000);
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