---
---
// 17 Jan 2019, 1am
let launchDate = new Date("{{ site.dates.launch_time }}");
let startDate = new Date("{{ site.dates.start_time }}");
let totalDays = (startDate - launchDate) / 86400000;
console.log(totalDays);

let showCountdown = function() {
    let diff = startDate - new Date();

    if (diff > 0) {
        let days = Math.floor(diff / 24 / 60 / 60 / 1000); // (24 * 60 * 60 * 1000)
        diff -= days * 24 * 60 * 60 * 1000;
        let hours = Math.floor(diff / 60 / 60 / 1000); // (60 * 60 * 1000)
        diff -= hours * 60 * 60 * 1000;
        let minutes = Math.floor(diff / 60 / 1000); // (60 * 1000)
        diff -= minutes * 60 * 1000
        let seconds = Math.floor(diff / 1000);

        document.getElementById('days').innerText = days.toString().padStart(2, '0');
        if (days / totalDays < 1) {
            // document.getElementById('days__rect').style.strokeDashoffset = (1000 - (days / totalDays) * 1000);
            document.getElementById('days__rect').style.strokeDashoffset = (1000 - (hours / 24) * 1000);
            document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
            document.getElementById('hours__rect').style.strokeDashoffset = (1000 - (minutes / 40) * 1000);
            document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
            document.getElementById('minutes__rect').style.strokeDashoffset = (1000 - (seconds / 60) * 1000);
        } else {
            document.getElementById('days__rect').style.strokeDashoffset = 0;
        } 
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