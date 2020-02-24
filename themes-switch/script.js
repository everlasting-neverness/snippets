const sunMoomContainer = document.querySelector('.sun-moon-container');

document.querySelector('.theme-toggle-button').addEventListener('click', () => {
    document.body.classList.toggle('dark');

    const currentRotation = parseInt(getComputedStyle(sunMoomContainer).getPropertyValue('--rotation'));
    sunMoomContainer.style.setProperty('--rotation', currentRotation + 180);
})