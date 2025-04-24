/* managing buttons dropdown in 768px mode or less */

document.querySelectorAll('.toggleBtn').forEach(button => {
    button.addEventListener('click', () => {
        const linkGroup = button.nextElementSibling;

        button.classList.toggle('open');
        linkGroup.classList.toggle('active');
    });
});