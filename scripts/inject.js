// scripts/inject.js

document.addEventListener('DOMContentLoaded', () => {
    // Inject Navbar
    fetch('navbar.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;

            // Re-enable Bootstrap dropdowns (after injection)
            const dropdownTriggerList = [].slice.call(
                document.querySelectorAll('[data-bs-toggle="dropdown"]')
            );
            dropdownTriggerList.map(function (dropdownTriggerEl) {
                return new bootstrap.Dropdown(dropdownTriggerEl);
            });
        });

    // Inject Header Section
    fetch('sections/header.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });

    // Inject Layout 1 Section
    fetch('sections/layout1.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('layout1').innerHTML = data;
        });

    // Inject Layout 2 Section
    fetch('sections/layout2.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('layout2').innerHTML = data;
        });

    // Inject CTA Section
    fetch('sections/cta.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('cta-section').innerHTML = data;
        })
        .catch(error => console.error('Error loading CTA:', error));


    // Inject Footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});
