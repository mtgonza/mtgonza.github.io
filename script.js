// document.querySelectorAll('.primary-nav a').forEach

const navLinks = document.querySelectorAll('.primary-nav a');
console.log("num nav links: ", navLinks.length);
console.log("the links are", navLinks);

navLinks.forEach((link, index) => {
    console.log(`Link ${index + 1}:`, link.textContent, "-> goes to", link.getAttribute('href'));
});