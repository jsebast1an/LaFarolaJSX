import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams} from "react-router-dom"
import { getItems } from '../getItems';

function ItemDetailContainer() {
    const [item, setItem] = useState({})

    const { id } = useParams();

    useEffect(() => {
            getItems
            .then(res => setItem(res.find(prod => prod.id === parseInt(id) ) ))
            .catch(err => console.log(err))
            .finally(res => console.log(res +" listo"))
    }, [id])

    return (
        <>
                    <ItemDetail 
                        items={item}
                    />
        </>

    )
}

export default ItemDetailContainer
