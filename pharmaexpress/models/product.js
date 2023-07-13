const productSchema = {
    title: 'Product',
    type: 'object',
    properties: {
        id: {type: 'string'},
        name: {type:'string'},
        description: {type: 'string'},
        price: {type: 'string'},
        quantity: {type: 'integer', minimum: 0},
    }
}


