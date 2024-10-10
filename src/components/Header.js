import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
    return (
        <header>
            <div className='header-content'>
                <span className='logo'>Магазин</span>
                <ul className='nav'>
                    <FaShoppingCart className='shop-card-button' />
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>

            </div>
            <div className='present'></div>
        </header>
    )
}
