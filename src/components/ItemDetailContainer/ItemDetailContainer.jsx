import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams} from "react-router-dom"
import { getFirestore } from '../../services/getFirestore';

function ItemDetailContainer() {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore()
        db.collection('items').doc(id).get()
        .then( res => {        
            console.log('llamada a api') // alguna accion con la respuesta  
            setItem( {id: res.id, ...res.data()} )
        })    
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
        
        // eslint-disable-next-line       
    },[]) 


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
