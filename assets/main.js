function toggleMenu(displayState) {
    const nav = document.getElementById('header_navigation');
    const closeIco = document.getElementById('close-ico');
    nav.style.display = displayState;
    closeIco.style.display = displayState;
}