// Simple interactivity for hover effects or animations (optional)

document.querySelectorAll('.card').forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.transform = 'scale(1.05)';

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform = 'scale(1)';

    });

});