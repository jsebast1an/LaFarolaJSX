import {useContext} from "react";
import { CartContext } from "../Context/CartContext";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { BsTrashFill } from "react-icons/bs";


function Cart() {

    const {cartList, borrarCarrito} = useContext(CartContext)

    console.log(cartList);

    return (
        <div className="text-center container">
            <Table striped bordered hover variant="dark" className="m-1">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>NAME</th>
                    <th>YEAR</th>
                    <th>PRICE</th>
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
                                </tr>
                            )
                }
                </tbody>
            </Table>
            <Button variant="danger" onClick={borrarCarrito}>Empty cart <BsTrashFill /></Button>
        </div>
    )
}

export default Cart