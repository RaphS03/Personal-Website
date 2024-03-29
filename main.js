const buttons = Array.from(document.querySelectorAll('.toggleButton'));
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const innerToggled = Array.from(button.querySelectorAll('.toggled'));
        innerToggled.forEach((toggled) => {
            toggled.classList.toggle('hidden');
        });

        button.nextElementSibling.classList.toggle('hidden');
    });
})
