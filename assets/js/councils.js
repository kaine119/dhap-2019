let updateWindow = debounce(function(positionY) {
    console.log(window.innerHeight * 0.2)
    console.log(positionY)
    if (positionY <= window.innerHeight * 0.2) {
        document.getElementById('title').classList.add("open");
    } else if (positionY > window.innerHeight * 0.2) {
        console.log("hi")
        document.getElementById('title').classList.remove("open");
    }
});

window.addEventListener('scroll', function() {
    updateWindow(window.scrollY)
});