class Client {
    constructor() {
        this.getMoreInfo();
    }

    getMoreInfo() {
        const iconPlus = document.querySelectorAll('.img-plus');
        const info = document.querySelectorAll('.question li');

        for (let i = 0; i < iconPlus.length; i++) {
            iconPlus[i].addEventListener('click', () => {
                if (info[i].hidden) {
                    info[i].hidden = false;
                    iconPlus[i].className = 'img-min';
                } else {
                    info[i].hidden = true;
                    document.querySelector('.img-min').className = 'img-plus';
                }
            });
        }
    }
}

const client = new Client();