import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name,img, seller, price, stock} = props.product;
    return (
        <div className='products'>
            <div className='prodcuts-img'>
                <img src={img} alt={name} />
            </div>
            <div className='product-item'>
                <h3 className='products-name'>{name}</h3>
                <p>by: <small className='seller'>{seller}</small></p>
                <p><small>Price: {price}</small></p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button onClick={() => props.handleAddProduct(props.product)} className='buy-btn'><i class="fa-solid fa-cart-shopping"></i> add to cart</button>
            </div>
        </div>
    );
};

export default Product;