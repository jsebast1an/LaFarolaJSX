import React from 'react'
import Items from '../Items/Items'
import './ItemList.css';

function ItemList({productosA}) {

    return (
        <div className="flexItems">
                {productosA.map( prod => <Items  key={prod.id} prod={prod} />)}
        </div>
    )
}

export default ItemList
