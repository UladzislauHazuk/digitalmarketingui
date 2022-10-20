document.querySelector('.first-question .img-plus').addEventListener('click', () => {
    const li = document.querySelector('.first-question li');
    if (li.hidden) {
        li.hidden = false;
        document.querySelector('.first-question .img-plus').className = 'img-min';
    } else {
        li.hidden = true;
        document.querySelector('.first-question .img-min').className = 'img-plus';
    }
});

document.querySelector('.second-question .img-plus').addEventListener('click', () => {
    const li = document.querySelector('.second-question li');
    if (li.hidden) {
        li.hidden = false;
        document.querySelector('.second-question .img-plus').className = 'img-min';
    } else {
        li.hidden = true;
        document.querySelector('.second-question .img-min').className = 'img-plus';
    }
});

document.querySelector('.third-question .img-plus').addEventListener('click', () => {
    const li = document.querySelector('.third-question li');
    if (li.hidden) {
        li.hidden = false;
        document.querySelector('.third-question .img-plus').className = 'img-min';
    } else {
        li.hidden = true;
        document.querySelector('.third-question .img-min').className = 'img-plus';
    }
});

document.querySelector('.fourth-question .img-plus').addEventListener('click', () => {
    const li = document.querySelector('.fourth-question li');
    if (li.hidden) {
        li.hidden = false;
        document.querySelector('.fourth-question .img-plus').className = 'img-min';
    } else {
        li.hidden = true;
        document.querySelector('.fourth-question .img-min').className = 'img-plus';
    }
});