import Logo from "../imgs/logofarola.jpg"
import Carrito from "./Carrito"
import NavDropdown from 'react-bootstrap/NavDropdown';


/* -- - - - - NAV BAR  - - -- - -*/

function NavBar() { //los componentes se usan con PascalCase.
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        
                    <img src={Logo} alt="" width="30" height="24"/>
                    La Farola
                    </a>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Tienda</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Contacto</a>
                            </li>

                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>

                        </ul>
                    </div>

                    <Carrito></Carrito>

                </div>
            </nav>
        </div>
    )
}

export default NavBar // te permite usarlo en otros archivos.

