/* managing buttons dropdown in 768px mode or less */

document.querySelectorAll('.toggleBtn').forEach(button => {
    button.addEventListener('click', () => {
        const linkGroup = button.nextElementSibling;

        button.classList.toggle('open');
        linkGroup.classList.toggle('active');
    });
});

/* sidenav toggle and overlay */
const sideBtn = document.querySelector('.sideNavigation');
const sideNav = document.getElementById('sidenav');
const overlay = document.getElementById('darkOverlay');

sideBtn.addEventListener('click', () => {
    sideNav.classList.toggle('open');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    sideNav.classList.remove('open');
    overlay.classList.remove('active');
});

document.querySelectorAll('.sidenavDropdown .arrow').forEach(arrow => {
    arrow.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const navDropdown = arrow.parentElement;
        const container = navDropdown.parentElement;
        const dropdown = container.querySelector('.dropdownContent');

        arrow.classList.toggle('open');
        dropdown.classList.toggle('active');
        navDropdown.classList.toggle('open')
    });
});

document.querySelector('.closeButton').addEventListener('click', () => {
    document.getElementById('sidenav').classList.remove('open');
    document.getElementById('darkOverlay')?.classList.remove('active');
});

/* toolbar slider */
const slider = document.querySelector('.headerButtonsLine');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; // se non sto cliccando, non succede nulla
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX);
    slider.scrollLeft = scrollLeft - walk;
});