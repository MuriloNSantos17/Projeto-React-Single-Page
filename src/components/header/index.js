import {Link} from 'react-router-dom';
import './styles.css'
import Logo from '../../img/logo_xiaomi.png'

const header =()=>{
    return (
        <main className="container-header">
            <img src={Logo} />
            <h1>MI BRASIL</h1>
            <ul>
                <li><Link to="/"><a>Home</a></Link></li>
                <li><Link to="/sobre"><a>Sobre o Produto/Marca</a></Link></li>
                <li><Link to="/contato"><a>Contato</a></Link></li>
            </ul>
        </main>
    );
} 

export default header;