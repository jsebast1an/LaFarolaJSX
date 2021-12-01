import {useContext} from "react";
import { CartContext } from "../Context/CartContext";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { BsTrashFill } from "react-icons/bs";


function Cart() {

    const {cartList, borrarCarrito, borrarProducto, totalCarrito, cartCantidad} = useContext(CartContext)

    console.log(cartList);

    return (
        <>
            { cartCantidad === 0 ? <h2>Ir a comprar</h2> :
            <div className="text-center container">
                <Table striped bordered hover variant="dark" className="m-1">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>NAME</th>
                        <th>YEAR</th>
                        <th>PRICE</th>
                        <th>-</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        cartList.map(prod => 
                                
                                    <tr key={prod.id}>
                                    <td>{prod.cantidad}</td>
                                    <td>{prod.nombre}</td>
                                    <td>{prod.year}</td>
                                    <td>{prod.precio * prod.cantidad}</td>
                                    <td><Button variant="danger" onClick={() => {borrarProducto(prod.id);}} > <BsTrashFill /></Button></td>
                                    </tr>
                                )
                    }
                    </tbody>
                </Table>
                <h4> Total: {totalCarrito} </h4>
                <Button variant="danger" onClick={borrarCarrito}>Empty cart <BsTrashFill /></Button>
            </div>
            }
        </>
    )
}

export default Cart