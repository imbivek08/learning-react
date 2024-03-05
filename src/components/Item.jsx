import {React,useContext} from 'react';
import {cartContext} from '../context/cart'


const Item = (props)=>{
    const cart = useContext(cartContext);
    console.log(cart)
    return(
        <div>
            <h1>Item - {props.name}</h1>
            <h1>Price - ${props.price}</h1>
            <button onClick={()=>cart.setItems([...cart.items,{name:props.name,price:props.price}])}>Add to cart</button>
        </div>
    )
}

export default Item