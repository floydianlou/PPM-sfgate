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

        const container = arrow.closest('.sidenavDropdown');
        const dropdown = container.querySelector('.dropdownContent');

        arrow.classList.toggle('open');
        dropdown.classList.toggle('active');
    });
});