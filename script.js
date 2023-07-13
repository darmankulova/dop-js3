//TASK
// проверить длинну на четность
// function wordFunc(arg) {
//  if(arg.length % 2){
//      return 'even'
//  }else {
//      return 'odd'
//  }
// }
// console.log(wordFunc('hello world'))

//TASK
// hello world
// 1. вам надо будет проверить и убрать пробелы в начале и в конце
// 2. поменять местами world hello
// 3. не первое o поменять на а
// function worldHello(str){
//         str = str.trim()
//         str = str.slice(str.indexOf(' ')+1)+ ' ' + str.slice(0,str.indexOf(' '))
//         str = str.slice(0, str.lastIndexOf('o'))+ 'a'
//
//         return str
// }
// console.log(worldHello(' hello world '))

//TASK
// 1. lorem ipsum dolor sit amet => LoremIpsumDolorSitAmet
//
// function worldString(str){
//
//         return str.replaceAll(' ','')
// }
//
// console.log(worldString('lorem ipsum dolor sit amet'))


//TASK
// price и discount
// function priceDiscount(price,discount){
//         return price - (price * discount / 100)
// }
//
// console.log(priceDiscount('100','20'))

//TASK
// str в задаче вам надо проверить что это строка.
// function stringChek(str){
//         if (typeof str === "string"){
//                 return 'string'
//         }else {
//                 return 'not string'
//         }
// }
//
// console.log(stringChek(5))

//TASK
// вы проверяете не пустая ли она. длина мин 4 макс 10. четность длины.

// function userChek(user){
//         if(user.length !== 0){
//                 if (user.length >= 4 && user.length < 11) {
//                         if (user.length % 2) {
//                                 return 'even'
//                         } else {
//                                 return 'odd'
//                         }
//                 }else {
//                         return 'must be min 4 char and less then 10 char'
//                 }
//         } else {
//                 return 'empty'
//         }
//
//  }
//
// console.log(userChek('yes'))

