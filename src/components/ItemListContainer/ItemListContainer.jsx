import ItemList from "../ItemList/ItemList";
import Spinner from "react-bootstrap/Spinner"
import { useEffect, useState } from "react";
import { getItems } from "../getItems";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"

export const ItemListContainer = ({sloganA}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams();

    useEffect(() => {

        if (id) {
            
            getItems
            .then(res => {setProducts(res.filter(prod => prod.type === id))})
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

        } else{

            getItems
            .then(res => {setProducts(res)})
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }

    }, [id])

    return (
        <div className="container-xxl text-center styleILC">
            {
                loading 
                ? 
                <div className="">
                    <h2><Spinner animation="border" variant="success" />Cargando</h2>
                </div> 
                : 
                
                <div>
                        <h1>{sloganA}</h1>     
                    <div>
                    
                        <ItemList 
                         productos={products}
                        />
                    </div>
               </div>
            }   
        </div>
            
    )
}

export default ItemListContainer;