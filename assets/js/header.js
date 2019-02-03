if (window.innerWidth < 900) {
    document.getElementById('toggle').onclick = function() {
        let main = document.getElementsByTagName('main')[0];
        main.classList.toggle("main--shifted")

        let nav = document.getElementById("nav");
        nav.classList.toggle("open");
    };

    document.getElementsByTagName('main')[0].onclick = function() {
        this.classList.remove("main--shifted")
        document.getElementById('nav').classList.remove('open');
    }

    let navButtons = document.getElementsByClassName('nav-button');
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let currentDropdown;
    for (var i = 0; i < navButtons.length; i++) {
        navButtons[i].onclick = function(e) {

            // if a link in the dropdown is clicked, e will trigger with the child target
            // therefore don't hide the menu if a link is clicked
            if (e.target.classList.contains("nav-link")) {
                // if they clicked an about link on the about page, open the blinds
                if (e.target.classList.contains("nav-link__about") && window.location.pathname.match(/about/)) {
                    document.getElementById("nav").classList.toggle("open");
                    document.getElementsByTagName('main')[0].classList.toggle("main--shifted");
                }
                return;
            }

            // if a button doesn't have any dropdowns don't prevent the default event
            if (this.classList.contains("nav-button--no-menu")) {
                return;
            }

            e.preventDefault();

            // for (var i = 0; i < dropdowns.length; i++) {
            //     dropdowns[i].classList.remove("open")
            // }

            // // get the first (only) child of the button pressed with classname dropdown-content
            // console.log(e.currentTarget)
            let targetDropdown = e.currentTarget.getElementsByClassName('dropdown-content')[0];
            // if (targetDropdown != currentDropdown) {
            //     console.log(targetDropdown);
            //     currentDropdown = targetDropdown;
            //     targetDropdown.classList.add("open");
            // } else {
            //     currentDropdown = null;
            // }
            // 
            targetDropdown.classList.toggle("open");
        }
    }
}

let updateLogo = debounce(function(positionY) {
    if (positionY == 0) {
        document.getElementsByTagName('header')[0].classList.add("logo--expanded")
    } else {
        document.getElementsByTagName('header')[0].classList.remove("logo--expanded")
    }
});

updateLogo(window.scrollY);

window.addEventListener('scroll', function() {
    updateLogo(window.scrollY)
});