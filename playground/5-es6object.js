// Object property shorthand

const name = 'Tilek';
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Chicago'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label;
// const stock = product.stock;

const { label: productLabel, stock } = product

console.log(productLabel, stock)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock);
}

transaction('order', product);