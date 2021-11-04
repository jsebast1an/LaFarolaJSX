
function Items({prod}) {

    return (
        <>
            <div className="text-center">
                <img src={prod.img} alt="" width="400" height="300" />
                <h4>{prod.nombre}</h4>
                <p>{prod.year}</p>
                <p>{prod.precio}</p>
            </div>
        </>
    )
}

export default Items
 
