const people = [
    {
        name: 'tilek',
        age: 25,
    },
    {
        name: 'Aibek',
        age: 26,
    },
    {
        name: 'Aziz',
        age: 27
    }
];

const personNames = [];

const names = people.filter(function (person) {
    personNames.push(person.name);
})

console.log(personNames);
