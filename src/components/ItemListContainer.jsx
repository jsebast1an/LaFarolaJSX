import ItemCount from "./ItemCount";

export const ItemListContainer = ({sloganA, subSloganA}) => {
    return (
        <div>
            <h1>{sloganA}</h1>
            <ItemCount nombreItem="ADIDAS FORUM MID CREAM/WHITE" precioItem="3000 ARS" initial={1} stock={5}/>
        </div>
    )
}

export default ItemListContainer;