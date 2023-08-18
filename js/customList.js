export function getList() {
    function getNumbersWhyList() {
        let list = [], num = 0;
        list = document.querySelectorAll(".whom__item-title-wrap");
        for(let el of list) {
            ++num;
            el.insertAdjacentHTML('afterbegin',
            `
            <span class="whom__item-title-number">${num}</span>
            `);
        }
    }
    function getNumbersSchemeList() {
        let list = [], num = 0;
        list = document.querySelectorAll(".scheme__item-list-wrap");
        for(let el of list) {
            ++num;
            if(num < 10) {
                el.insertAdjacentHTML('afterbegin',
            `
            <span class="scheme__item-number">0${num}</span>
            `);
            }else{
                el.insertAdjacentHTML('afterbegin',
            `
            <span class="scheme__item-number">${num}</span>
            `);
            }
        }
    }

    function getNumbersChoisList() {
        let list = [], num = 0;
        list = document.querySelectorAll(".chois__item");
        for(let el of list) {
            ++num;
            if(num < 10) {
                el.insertAdjacentHTML('afterbegin',
            `
            <span class="chois__item-number">0${num}</span>
            `);
            }else{
                el.insertAdjacentHTML('afterbegin',
            `
            <span class="chois__item-number">${num}</span>
            `);
            }
        }
    }
    getNumbersChoisList()
    getNumbersWhyList()
    getNumbersSchemeList()
}
getList()