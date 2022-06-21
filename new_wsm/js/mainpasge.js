const toggleMenu = (toggleID, navListID) => {
    //html->js
    const toggle = document.getElementById(toggleID);
    const navlist = document.getElementById(navListID);
    const toggleIcon = toggle.getElementsByTagName("i")[0];

    if (toggle && navlist) {
        //toggle click
        toggle.addEventListener('click', () => {
            //show/hide menu: .show-menu
            navlist.classList.toggle('show-menu');
            //change toggle icon : bx-menu <-> bx-x
            toggleIcon.classList.toggle("bx-menu");
            toggleIcon.classList.toggle("bxs-square");
        });
    }
}
toggleMenu("nav-toggle", "nav-list");