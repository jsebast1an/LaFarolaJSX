import {useContext} from "react";
import {Link} from "react-router-dom"
import { CartContext } from "../Context/CartContext";
import { BsTrashFill } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Formu from "../Form/Formu";
import "../Form/Formu.css"


function Cart() {

    const {cartList, borrarCarrito, borrarProducto, totalCarrito, cartCantidad} = useContext(CartContext)

    console.log(cartList);

    const generarOrden = () => {

        const orden = {}
        orden.buyer = {name:"", email:"", cellphone:""}
        orden.total = totalCarrito
        orden.items = cartList.map( items => {
            const id = items.id
            const nombre = items.nombre
            const precio = items.precio * items.cantidad
            return {id, nombre, precio}
        })

        console.log(orden) 

    }

    return (
        <div>
            { cartCantidad === 0  ? 
                <div className="text-center container mt-4" data-aos="fade-right">
                    <div data-aos="flip-left">
                            <h2>¡No tienes items agregados a tu carrito!</h2> 
                            <Link to="/"><Button> Ir a la tienda</Button></Link>
                    </div>
                </div>

                            :

                    <div className="text-center container mt-4">

                        <div data-aos="fade-left"> 
                        <Table striped bordered hover variant="light" className="m-1">
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
                            <Button className="mx-2" variant="danger" onClick={borrarCarrito}>Empty cart <BsTrashFill /></Button>
                            <Button className="mx-2" variant="success" onClick={generarOrden}>Order <BsCheck2 /></Button>
                        </div>


                        <div className="my-4 border rounded formuStyle" data-aos="fade-right">

                            <h2 className="my-2"> Data and delivery</h2>

                            <Formu></Formu>

                        </div>

                    </div>
                    
                    
            }
        </div>
    )
}

export default Cart