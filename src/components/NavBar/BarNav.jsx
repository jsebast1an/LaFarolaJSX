import Logo from "../imgs/adidas-9.svg"
import Cart from './Cart';
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"

function BarNav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                        <Link to={`/`} style={{ textDecoration: 'none' }} className="navbar-brand" >
                            <Navbar.Brand href="#home">
                            <img
                                src={Logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                            </Navbar.Brand>
                                Home
                            </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={`/category/clothes`} style={{ textDecoration: 'none' }} className="nav-link active">
                                Clothes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/category/shoes`} style={{ textDecoration: 'none' }} className="nav-link active">
                                Shoes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/category/accesories`} style={{ textDecoration: 'none' }} className="nav-link active">
                            Accesories
                            </Link>
                        </li>
                        
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>

                    <div className="mx-3">
                        <Cart/>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default BarNav
