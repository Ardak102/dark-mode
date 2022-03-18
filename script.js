const btn = document.getElementById('btn');
const body = document.querySelector('body');
const elements = document.getElementById('n-mod')


btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    body.classList.toggle('active');
    elements.classList.toggle('active');
});

