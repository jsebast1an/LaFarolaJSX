import {useContext} from "react";
import { CartContext } from "../Context/CartContext";
import Table from "react-bootstrap/Table";

function Cart() {

    const {cartList} = useContext(CartContext)

    console.log(cartList);

    return (
        <div className="text-center container-fluid m-3">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>#</th>
                    <th>PRICE</th>
                    </tr>
                </thead>
                <tbody>
                {
                    cartList.map(prod => 
                            
                                <tr>
                                <td>{prod.id}</td>
                                <td>{prod.nombre}</td>
                                <td>{prod.type}</td>
                                <td>{prod.precio}</td>
                                </tr>
                            )
                }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart