import React from 'react'
import ItemDetail from './ItemDetail'
import Accordion from "react-bootstrap/Accordion"

function ItemDetailContainer() {
    return (
        <div>
                <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Detalles del producto</Accordion.Header>
                                <Accordion.Body>                             
                                    <ItemDetail></ItemDetail>
                                </Accordion.Body>
                            </Accordion.Item>
                </Accordion> 
        </div>
    )
}

export default ItemDetailContainer
