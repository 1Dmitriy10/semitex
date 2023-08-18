export function list() {
  const mediaQuery = window.matchMedia('(min-width: 650px)')
    if (mediaQuery.matches){
      const items = document.querySelectorAll('.chois__item');
const wrap = document.querySelector('.chois__item-box');
let i = 0;
let result = 0;
let x = 0;
let a = 0
for (const el of items) {
    i++
  if (i % 2 !== 0) {
    x = el.clientHeight + 11;
    result += x;
  } else if(i % 2 === 0) {
    if(el.clientHeight > items[i-2].clientHeight) {
        result = result - x + el.clientHeight + 16
    }
  }
 
}
wrap.style.cssText = `height: ${result}px`

let length = items.length;
let lastElementFistColumn = Math.floor(length/2)
for (let i = 0; lastElementFistColumn< length; i++) {
    if(items[i].clientHeight > items[lastElementFistColumn].clientHeight) {
      items[lastElementFistColumn].style.cssText = `height: ${items[i].clientHeight}px`
    }
    else if(items[i].clientHeight < items[lastElementFistColumn].clientHeight) {
      items[i].style.cssText = `height: ${items[lastElementFistColumn].clientHeight}px`
    }
    lastElementFistColumn++

}
    }
}
list()