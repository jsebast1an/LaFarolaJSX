import ItemList from "../ItemList/ItemList";
import Spinner from "react-bootstrap/Spinner"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"
import { getFirestore } from "../../services/getFirestore";

export const ItemListContainer = ({sloganA}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams();

    useEffect(() => {

        const dataBase = getFirestore()
        
        dataBase.collection("items").get()
        .then(res => setProducts(res.docs.map( prod => ({id: prod.id, ...prod.data() }))))
        .catch(err => console.log(err))
        .finally(setLoading(false))

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