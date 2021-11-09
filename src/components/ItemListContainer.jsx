import ItemList from "./ItemList/ItemList";
import Spinner from "react-bootstrap/Spinner"
import { useEffect, useState } from "react";
import { productos } from "./getItems";
import { getItems } from "./getItems";

export const ItemListContainer = ({sloganA}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getItems
        .then(res => {setProducts(res)})
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])

    console.log(products)

    return (
        <>
            
            {loading ? <div className="py-5">
                            <h2><Spinner animation="border" variant="success" />Cargando</h2>
                        </div> :            
                        <div>
                            <h1>{sloganA}</h1><ItemList productosA={productos}/>
                        </div>}
            
        </>
    )
}

export default ItemListContainer;