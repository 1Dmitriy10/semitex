// export function list() {
// const items = document.querySelectorAll('.chois__item');
// const wrap = document.querySelector('.chois__item-box');
// let i = 0;
// let result = 0;
// let x = 0;
// let a = 0
// for (const el of items) {
//     i++
//   if (i % 2 !== 0) {
//     x = el.clientHeight + 16;
//     result += x;
//   } else if(i % 2 === 0) {
//     if(el.clientHeight > items[i-2].clientHeight) {
//         result = result - x + el.clientHeight + 16
//     }
//   }
 
// }
// wrap.style.cssText = `height: ${result}px`
// // let y = Math.floor((items.length+1 )/ 2) + 1
// //   for (const el of items){
// //     if(y === items.length+1 ) {
// //       break
// //     }
// //     if (el.clientHeight < items[y].clientHeight) {
// //       el.style.cssText = `height: ${items[y].clientHeight}px`
// //     }else{
// //       items[y+1].style.cssText = `height: ${el.clientHeight}px`;
// //     }
// //  y++
//   // console.log(el.getBoundingClientRect().top)
//   // if(el.getBoundingClientRect().top === items[0].getBoundingClientRect().top) {
//   //   console.log('ok')
//   //   el.style.cssText = `height: ${items[0].clientHeight}px`
//   // }
// // }
// }
// list()