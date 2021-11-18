import Figure from 'react-bootstrap/Figure'

function Slider() {

    const img = "https://realsportantofagasta.cl/wp-content/uploads/2020/05/banner-adidas-principal12211221.jpg"

    return (
        <div>
            <Figure>
            <Figure.Image
                width={"auto"}
                max-height={109}
                alt="171x180"
                src={img}

                /> 
            </Figure>
        </div>
    )
}

export default Slider
