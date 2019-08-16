// const square = function (number) {
//     return number * number;
// };

// const square = (number) => {
//     return number * number;
// }

// const square = (number) => number * number

// console.log(square(3));

const event = {
    name: 'Birthday party',
    guestList: ['Tilek', 'Esen', 'Aibek'],
    printGuestList() {
        console.log('guest list for ' + this.name);
        this.guestList.forEach((eachGuest) => {
            console.log(eachGuest + ' is attending ' + this.name);
        })
    }
}

event.printGuestList();