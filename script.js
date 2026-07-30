// smooth scrolling navigation
function handleNavClick(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        console.error("Section not found: ", targerID);
    }
}

document.querySelectorAll('.primary-nav a').forEach(link => {
    link.addEventListener('click', handleNavClick);
});