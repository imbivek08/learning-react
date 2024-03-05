import React from 'react'
import './App.css'
import Item from './components/Item'
import Cart from './components/Cart'

const App = () => {
  return (
    <div className='app'>
      <Item name = "Redmi Book" price = {42000}/>
      <Item name = "Note 10 Pro" price = {19000}/>
      <Item name = "oppo earbuds" price = {1200}/>
      <Cart/>
    </div>
  )
}

export default App
