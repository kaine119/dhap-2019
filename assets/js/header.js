if (window.innerWidth < 900) {
    document.getElementById('toggle').onclick = function() {
        let nav = document.getElementById("nav");
        console.log(nav);
        if (nav.classList.contains("open")) {
            nav.classList.remove("open");
        } else {
            nav.classList.add("open");
        }
    };

    let navButtons = document.getElementsByClassName('nav-button');
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let currentDropdown;
    for (var i = 0; i < navButtons.length; i++) {
        navButtons[i].onclick = function(e) {

            // if a link in the dropdown is clicked, e will trigger with the child target
            // therefore don't hide the menu if a link is clicked
            if (e.target.classList.contains("nav-link")) {
                return;
            }

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