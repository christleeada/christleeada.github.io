const toggle = document.querySelector('.dark-mode-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
    this.classList.toggle('active');
});