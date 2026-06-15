const container = document.getElementById('scroll')
const scrollAmount = window.innerWidth * 0.7

function smoothScroll(direction) {
    const baseTarget = container.scrollLeft + direction * scrollAmount;

    container.scrollTo({
        left: baseTarget,
        behavior: 'smooth'
    });
}

document.getElementById('next').addEventListener('click', () => {
    smoothScroll(1)
})

document.getElementById('prev').addEventListener('click', () => {
    smoothScroll(-1)
})