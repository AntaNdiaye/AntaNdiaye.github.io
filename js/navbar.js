// Load navbar from navbar.html and inject it into the page
function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
            // Re-initialize navbar scripts after loading
            if (window.bootstrap) {
                var navbarElement = document.querySelector('.navbar-collapse');
                if (navbarElement) {
                    new bootstrap.Collapse(navbarElement, {toggle: false});
                }
            }
        })
        .catch(error => console.error('Error loading navbar:', error));
}

// Load navbar immediately
loadNavbar();

// Also load on DOMContentLoaded as fallback
document.addEventListener('DOMContentLoaded', loadNavbar);
