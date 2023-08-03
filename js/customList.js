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
            el.insertAdjacentHTML('afterbegin',
            `
            <span class="whom__item-title-number">${num}</span>
            `);
        }
    }
    getNumbersWhyList()
    getNumbersSchemeList()
}