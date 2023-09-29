import "./Header.css";
import Boton from "../Boton"

function Header(){
    return <header className="header">
            <img src= "/img/logo.png" alt="Logo aluraflix" />
            <Boton>
                Nuevo video
            </Boton>
        </header>
}

export default Header