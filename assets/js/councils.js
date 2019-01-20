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

// let councilElements = document.getElementsByClassName('council');
// let councils = []
// for (var i = councilElements.length - 1; i >= 0; i--) {
//     councils.push({ tween: null, element: councilElements[i] })
// }
// console.log(councils)
// for (var i = councils.length - 1; i >= 0; i--) {
//     let council = councils[i]
//     council.tween = new TweenLite.to(council.element, 
//         5, 
//         { 
//             transform: "translateX(-90vw)", 
//             ease: "linear",
//             immediateRender: true,
//             onComplete: function() {
//                 council.tween.restart();
//             } 
//         });
//     council.tween.play()
//     council.element.addEventListener("mouseover", () => {
//         council.tween.pause();
//     });
//     council.element.addEventListener("mouseout", () => {
//         council.tween.play();
//     });
// }