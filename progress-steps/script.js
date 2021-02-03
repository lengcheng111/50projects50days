const progress = document.getElementById('progress');
const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');


let currentIndex = 1;

btnNext.addEventListener('click', (event) => {
    currentIndex++;
    if (currentIndex > circles.length) {
        currentIndex = circles.length;
    }
    update();
});

btnPrev.addEventListener('click', (event) => {
    currentIndex--;
    if (currentIndex < 1) {
        currentIndex = 1;
    }
    update();
});

function update() {
    circles.forEach((circle, indx) => {
        if (indx < currentIndex) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    });

    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
    if (currentIndex === circles.length) {
        btnNext.disabled = true;
        btnPrev.disabled = false;
    }
    if (currentIndex === 1) {
        btnNext.disabled = false;
        btnPrev.disabled = true;
    }
    if (currentIndex > 1 && currentIndex < circles.length) {
        btnNext.disabled = false;
        btnPrev.disabled = false;
    }
}
