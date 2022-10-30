import './styles.css';
import imgFone from '../../img/fone.webp'
import { FaTruck } from "react-icons/fa";

import BotaoQuantidade from '../../components/botao-quantidade';


const Home = ()=>{
    return(
        <main className='main-home'>
            <div className='container-produto'>
                <img src={imgFone} className='img-fone' />
            </div>
            <div className='container-descricao'>
                <h3>Kit 2 Unidades - Fone De Ouvido Bluetooth Earbuds Basic Redmi Airdots 2</h3>
                <p>&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50; 5.0  - 90 Avaliações</p>
                <s><p className='prg-preco-desconto'>R$ 259,00</p></s>
                <h1>R$ 179,90</h1>
                <p className='prg-parcelamento'> Em até 12x de R$ 18,06 <br/>
                    Nos cartões de crédito.</p>
                <br/>
                <p> <FaTruck/> Entrega Grátis </p>

                <BotaoQuantidade/>      
                
                                                    
            </div>
            
        </main>
    );
}

export default Home;