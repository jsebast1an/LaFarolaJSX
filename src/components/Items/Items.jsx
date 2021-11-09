import Card from 'react-bootstrap/Card';
import './Items.css';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

function Items({prod}) {

    return (
        <>  
            <Card style={{ width: '22rem' }} className="my-3">
                <Card.Img variant="top" src={prod.img} alt="" width="400" height="300" />

                <Card.Body>
                    <Card.Title><h2>{prod.nombre}</h2></Card.Title>
                    <Card.Text>
                        <h4>{prod.year}</h4>
                        <h5>Precio: {prod.precio} ARS</h5>
                        
                        <ItemDetailContainer/>

                    </Card.Text>
                    
                </Card.Body>
            </Card>

        </>
    )
}

export default Items
 
