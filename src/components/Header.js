import React, {useState} from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const showOrders=(props) => {
    return (
        <div>
            {props.orders.map(el => (
                <Order key={el.id} item={el}/>
            ))}
        </div>
    )
}

const showNothing = () => {
    return (
        <div className='empty'>
            <h2>Товаров нет</h2>
        </div>
    )
}

export default function Header(props) {

    let [cartOpen, setCartOpen] =useState(false)

    return (
        <header>
            <div className='header-content'>
                <span className='logo'>Магазин</span>
                <ul className='nav'>
                    <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-card-button ${cartOpen && 'active'}`}/>
                    {cartOpen && (
                        <div className='shop-card'>
                            {props.orders.length > 0 ?
                            showOrders(props) : showNothing()}

                        </div>
                    )}
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>

            </div>
            <div className='present'></div>
        </header>
    )
}
