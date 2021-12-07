import ItemList from "../ItemList/ItemList";
import Spinner from "react-bootstrap/Spinner"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"
import { getFirestore } from "../../services/getFirestore";
import Slider from '../Bootstrap/Slider';

export const ItemListContainer = ({sloganA}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams();

    useEffect(() => {
        const dataBase = getFirestore()

        if (id) {
            dataBase.collection("items").where("type","==", id).get()
            .then(res => setProducts(res.docs.map( prod => ({id: prod.id, ...prod.data() }))))
            .catch(err => console.log(err))
            .finally(setLoading(false))
            
        } else {
            
            dataBase.collection("items").get()
            .then(res => setProducts(res.docs.map( prod => ({id: prod.id, ...prod.data() }))))
            .catch(err => console.log(err))
            .finally(setLoading(false))
            
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
                        <Slider /> 
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