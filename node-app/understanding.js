console.log(process.argv);
console.log(process.argv[2]);

const name = process.argv[2];

if (name === 'add') {
    console.log('adding note')
} else if(name === 'remove') {
    console.log('removing note');
}

console.log(process.argv);

