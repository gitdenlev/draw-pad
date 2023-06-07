const container = document.querySelector('.container');
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    });

    square.addEventListener('mouseleave', () => {
        removeColor(square);
    });

    container.appendChild(square);
}

function setColor(element) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    element.style.backgroundColor = `#${randomColor}`;
    element.style.boxShadow = `0 0 2px #${randomColor}, 0 0 10px #${randomColor}`;
}

function removeColor(element) {
    element.style.backgroundColor = 'transparent';
    element.style.boxShadow = '0 0 2px #000';
}
