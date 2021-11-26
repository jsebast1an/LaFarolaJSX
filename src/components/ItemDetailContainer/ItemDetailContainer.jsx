import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams} from "react-router-dom"
import { getItems } from '../getItems';

function ItemDetailContainer() {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams();

    useEffect(() => {

        setTimeout(() => {
            getItems
            .then(res => setItem(res.find(prod => prod.id === parseInt(id) ) ))
            .catch(err => console.log(err))
            .finally(setLoading(false))
            
        }, 1000);
    }, [id])

    return (
        <> { loading ? <div className="text-center">
            <               h2> Cargando </h2>
                        </div> :
                    <ItemDetail 
                        items={item}
                    />
            }
        </>

    )
}

export default ItemDetailContainer
