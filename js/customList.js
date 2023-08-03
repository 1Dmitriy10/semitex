export function getList() {
    let list = [], num = 0;
    list = document.querySelectorAll(".whom__item-title-wrap");
    function getMarker(){
        for(let el of list) {
            ++num;
            el.insertAdjacentHTML('afterbegin',
            `
            <span class="whom__item-title-number">${num}</span>
            `);
        }
    }
    getMarker()

}