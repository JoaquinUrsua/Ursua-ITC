// Toggle dropdown menu
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');

    dropdown.addEventListener('mouseover', () => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        dropdownContent.style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', () => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        dropdownContent.style.display = 'none';
    });
});
