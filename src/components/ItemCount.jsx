import Button from 'react-bootstrap/Button';
import {useState} from "react";

function ItemCount({stock, initial}) {

    const [span, setSpan] = useState(initial)

    const sumar = () => {
        span < stock ? setSpan(span + 1) : alert("no hay más stock.")
    }

    const restar = () => {
        span > 1 ? setSpan(span - 1) : alert("no puedes agregar 0 productos.")
    }

    const onAdd = () => {
        alert(`Agregaste ${span} productos.`)
    }


    return (
        <div>

            <div className="d-grid gap-2">
                <Button variant="primary" size="lg" onClick={sumar}>            
                    +
                </Button>
                    <span className="border border-1" style={{borderRadius: 4}}>{span}</span>
                <Button variant="secondary" size="lg" onClick={restar}>
                    -
                </Button>
                <Button variant="success" size="lg" onClick={onAdd}>
                    Agregar
                </Button>
            </div>
        </div>
    )
}

export default ItemCount
