const products = [
    {
        id: 1,
        name: 'shoes',
        price: '79.99'
    },
    {
        id: 2,
        name: 'shirt',
        price: '19.99'
    },
    {
        id: 3,
        name: 'shorts',
        price: '29.99'
    },
    {
        id: 4,
        name: 'hat',
        price: '11.99'
    },
    {
        id: 5,
        name: 'watch',
        price: '6,000.00'
    }
]

export function getProducts() {
    return products;
}

export function getOne(id) {
    let product = products.filter(item => {
        return item.id === +id
    })
    return product[0];
}