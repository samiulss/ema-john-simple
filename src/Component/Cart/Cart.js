import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    let shipping = 0;
    if (total == 0 ) {
        shipping = 0;
    }
    else if(total < 30) {
        shipping = 4.99;
    }
    else {
        shipping = 0;
    }

    let tax = total/10;
    let inTotal = total + shipping + tax;

    const numFormat = num => {
        const twoDigit = num.toFixed(2);
        return Number(twoDigit);
    }
    return (
        <div>
            <h2>Order Summary</h2>
            <h3>Items Order: {cart.length}</h3>
            <p>Product price: {numFormat(total)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax + VAT: {numFormat(tax)}</p>
            <p>Total price: {numFormat(inTotal)}</p>
        </div>
    );
};

export default Cart;