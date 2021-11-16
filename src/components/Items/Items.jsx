import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './Items.css';

function Items({prod}) {

    return (
        <>  
            <Card style={{ width: '22rem' }} className="my-3 itemsStyle">
                <Card.Img variant="top" src={prod.img} alt="" width="400" height="300" />

                <Card.Body>
                    <Card.Title as="h3">{prod.nombre}</Card.Title>
                    <Card.Text as="h4">{prod.year}</Card.Text>
                    <Card.Text >Precio: {prod.precio} ARS</Card.Text>
                    <Link to={`/detail/${prod.id}`}>
                        <Button variant="primary">Detalles del producto</Button>
                    </Link>
                </Card.Body>
            </Card>

        </>
    )
}

export default Items
 