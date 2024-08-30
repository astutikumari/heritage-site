document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.festival-card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            card.classList.toggle('expanded');
        });
    });
});
