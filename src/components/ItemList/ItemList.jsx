import React from 'react'
import Items from '../Items/Items'

function ItemList({productosA}) {

    return (
        <>
                {productosA.map( prod => <Items  key={prod.id} prod={prod} />)}
        </>
    )
}

export default ItemList
