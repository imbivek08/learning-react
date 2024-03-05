import {React,useContext} from 'react';
import { cartContext } from '../context/cart';

const Cart = (props)=>{
    const cart = useContext(cartContext)
    const total = cart.items.reduce((a,b)=>a+b.price,0)
    return(
        <div>
            <h1>Cart</h1>
            {
                cart && cart.items.map((item)=>(
                    <li>{item.name}</li>
                ))
            }
            <h1>Total:${total}</h1>
        </div>
    )
}

export default Cart