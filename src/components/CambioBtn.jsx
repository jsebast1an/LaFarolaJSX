import {useState} from "react";
import Button from "react-bootstrap/Button"

const PrimerBoton = ({primerCambio}) => {
    return  (<Button variant="success" size="lg" onClick={primerCambio}>
                    Agregar
                </Button>
    )
}

const SegundoBoton = ({onAdd}) => {
    return (
    <Button variant="warning" size="lg" onClick={onAdd}>
                    ¿Confirmas?
                </Button>
    )
}

export default function CambioBtn({onAdd}) {

    const [boton, setBoton] = useState("botonAdd")

    const botonAgregar = () => {
        setBoton("botonConfirmar")
    }

    return (
        <>
            {
                boton === "botonAdd" ?
                <PrimerBoton primerCambio={botonAgregar} /> :
                <SegundoBoton onAdd={onAdd} />

            }
        </>
    )
}
