import Button from 'react-bootstrap/Button';
import {useState, useContext} from "react";
import CambioBtn from './Bootstrap/CambioBtn';
import { TercerBoton } from './Bootstrap/CambioBtn';
import { CartContext } from './Context/CartContext';



function ItemCount({stock, initial, item}) {

    
    const [boton3, setBoton3] = useState(true)
    const [span, setSpan] = useState(initial)
    
    const {cartList, agregarAlCarrito} = useContext(CartContext)

    const sumar = () => {
        span < stock ? setSpan(span + 1) : alert("no hay más stock.")
    }

    const restar = () => {
        span > 1 ? setSpan(span - 1) : alert("no puedes agregar 0 productos.")
    }

    const onAdd = () => {
        setBoton3(false)    
        agregarAlCarrito({...item, cantidad: span})
        
    }
     console.log(cartList)

    return (
        <div>

            <div className="d-grid gap-2">
                <Button variant="primary" size="lg" onClick={sumar}>            
                    +
                </Button>
                    <span className="border" style={{borderRadius: 4}}>{span}</span>
                <Button variant="secondary" size="lg" onClick={restar}>
                    -
                </Button>
                {
                    boton3 ? <CambioBtn onAdd={onAdd} /> : <TercerBoton />
                }
            </div>
        </div>
    )
}

export default ItemCount
