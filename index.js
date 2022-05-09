// var a = prompt('Birinchi raqamnni kiriting:', 0);

// var x = a-0

// var number = 5

// if(x > 5) {

//     if(typeof x === 'number') {
//         console.log('Raqam katta beshdan va tipi number')
//     }else if(typeof x === 'string') {
//         console.log('Raqam katta beshdan va tipi string')
//     }
// }else if(x === 5) {
//     console.log('Raqam beshga teng')
// }
// else {
//     console.log('Raqam beshdan kichik')
// }



var a = prompt('Birinchi raqam:', 0)

var b = prompt('Ikkinchi raqam:', 0)

var result = prompt(`${a}+${b}:`)

if(Number(a)+ Number(b) === Number(result) ) {
    alert(`To'g'ri bajardiz`)
}else if(Number(a)+ Number(b) < Number(result) ) {
    alert(`To'g'ri javobdan o'tib ketdiz`)
}else {
    alert(`Yana yaxshi o'qishga to'g'ri kelar ekan`)
}



// var elHeader = document.querySelector(`.heading`);

// var usdToUzs = 9433.34;
// var euroToUzs = 10354.03;

// var planedUsd = 500;
// var hotelUsd = 250;
// var museumEuro = 120;

// var morePerce = Number(10000000);
// var userBudget2 = Number(8317500)

// var totalExpance = usdToUzs * (planedUsd + hotelUsd) + museumEuro * euroToUzs

// var userBudget = Number(prompt(`Hisobingizni kiriting:`, 0))

// if(totalExpance <= userBudget) {
//     elHeader.textContent = `Xurmatli mijoz mablag'ingiz yetarli Oq yo'l!`;
// }else {
//         elHeader.textContent = `Xurmatli mijoz yana ozgina ishlash kerak ekan.`;
// }

// // else if(userBudget2 => morePerce) {
// //     elHeader.textContent = `Bu mablag' bilan yillab sayohat qilishiz mumkin`;
// // }

// //Minimal mablag': 8.317.500

// console.log(userBudget) 