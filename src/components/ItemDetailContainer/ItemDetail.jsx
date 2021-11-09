import Form from "react-bootstrap/Form"
import ItemCount from "../ItemCount"

function ItemDetail() {
    return (
        <>  
            <div>
            <Form.Label htmlFor="exampleColorInput">Choose color</Form.Label>
            <Form.Control
                type="color"
                id="exampleColorInput"
                defaultValue="#563d7c"
                title="Choose your color"/>
            </div>
            <div className="py-2">
            <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                <option value="0">Talle...</option>
                <option value="1">S</option>
                <option value="2">M</option>
                <option value="3">L</option>
            </Form.Select>
            </div>

            <div className="py-3"> 
                <ItemCount stock={5} initial={1} className=""/>
            </div>
        </>
    )
}

export default ItemDetail
