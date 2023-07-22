import React from 'react'
import Item from '../Item'
const ItemList = ({productos}) => {
  return (
    <div className='row g-3'>
        {productos.map((item)=><Item key={item.id} item={item}/>)}
    </div>
  )
}

export default ItemList