// setTimeout(
//     () => {
//         console.log('Two seconds are up!')
//     },
//     2000
// )

// const names = ['tilek', 'kanybek', 'esen', 'aibek', 'keldibek'];

// const shortNames = names.filter(
//     (eachName) => {
//         return eachName.length <= 5;
//     }
// )

// console.log(shortNames);

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }

        callback(data);
    },
        2000);
}

// geocode('chicago', (data) => {
//     console.log(data)
// })


// const add = (a, b, callback) => {
//     setTimeout(() => {
//         callback(a + b);
//     }, 2000);
// }

// add(1, 2, (sum) => {
//     console.log(sum);
// })
