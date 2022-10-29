import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0, 50);
    const [items, setItems] = useState(first10);
    const [cart, setCart] = useState([])
    const handleAddProduct = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    };
    return (
        <div className='shop-container'>
            <div className="shop-product">
                {
                    items.map(item => <Product product = {item} key ={item.key} handleAddProduct={handleAddProduct}></Product> )
                }
            </div>
            <div className="shop-card">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;