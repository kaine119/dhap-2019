let progressBar = document.getElementById('progressbar__filled');
let progressText = document.getElementById('progressbar__label');

let startTime = new Date(2019, 0, 24, 0, 0);
let endTime = new Date(2019, 0, 24, 23, 0);
let totalProgress = endTime - startTime;

let updateProgress = function() {
  let now = new Date();
  if (now > endTime) {
    progressBar.style.width = "100%";
    progressText.innerText = "100%";
  } else if (now < startTime) {
    progressBar.style.width = "0%";
    progressText.innerText = "0%"
  } else {
    let currentProgress = now - startTime;
    let percent = Math.floor(currentProgress / totalProgress * 100);
    let percentText = percent.toString() + "%";
    progressBar.style.width = percentText;
    progressText.innerText = percentText;
    if (percent > 50) {
      progressBar.classList.add("over_50")
    }
  }
}

updateProgress();

setInterval(updateProgress, 60000)