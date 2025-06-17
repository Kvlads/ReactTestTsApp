export interface productInfoInterface {
    title: string, 
    origin: string, 
    price: number, 
    imageUrl: string,
    currency: 'USD'|'RUB'|'EUR',
}

export interface productDataInterface {
    data: productInfoInterface
}