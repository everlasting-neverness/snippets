window.onload = function() {

    const wrapper = document.querySelector('.wrapper');
    const resultContainer = document.querySelector('.result');
    const errorContainer = document.querySelector('.error-container');
    const form = document.getElementById('form');
    const userInputEl = document.querySelector('.user-input');
    const resetEl = document.querySelector('.reset-btn');

    let timer;

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * max) + min;
    }

    function getResult(value) {
        let result;
        while (result == null) {
            result = getRandomInt(1, value);
        }
        return result;
    } 

    function getUserQuantity(input) {
        const parsedValue = Number(input);
        if (typeof parsedValue === 'number' && parsedValue > 0) {
            return parsedValue;
        }
        return null;
    }

    function showValidation() {
        errorContainer.classList.add('active');
    }

    function hideValidation() {
        errorContainer.classList.remove('active');
    }

    function showResult(result) {
        resultContainer.innerText = result;
    }

    function hideResult() {
        resultContainer.innerText = '...';
    }

    function showSpinner() {
        wrapper.classList.add('spinner-active');
    }

    function hideSpinner() {
        wrapper.classList.remove('spinner-active');
    }

    function reset(e) {
        e.preventDefault();
        if (timer != null) {
            clearTimeout(timer);
        }
        hideSpinner();
        hideValidation();
        hideResult();
        userInputEl.value = '';
    }

    function handlSubmit(e) {
        e.preventDefault();
        hideResult();
        const value = getUserQuantity(userInputEl.value);
        if (value == null) {
            showValidation();
            return false;
        }
        hideValidation();
        const result = getResult(value);
        showSpinner();
        timer = setTimeout(() => {
            hideSpinner();
            return showResult(result);
        }, 3000);
        return false;
    }

    form.addEventListener('submit', handlSubmit);
    resetEl.addEventListener('click', reset);
}

