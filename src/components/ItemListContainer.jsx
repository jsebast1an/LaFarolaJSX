import ItemCount from "./ItemCount";
import ItemList from "./ItemList/ItemList";
import { useEffect, useState } from "react";
import { productos } from "./useFetch";
import { useFetch } from "./useFetch";

export const ItemListContainer = ({sloganA}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        useFetch
        .then(res => {setProducts(res)})
        .catch(err => console.log(err))
        .finally(() => console.log("listo"))
    }, [])

    console.log(products)

    return (
        <div>
            <h1>{sloganA}</h1>
            <ItemList productosA={productos}/>
            <ItemCount nombreItem="ADIDAS FORUM MID CREAM/WHITE" precioItem="3000 ARS" initial={1} stock={5}/>
            
        </div>
    )
}

export default ItemListContainer;