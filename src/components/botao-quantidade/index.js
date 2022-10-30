import './styles.css'
import { useState } from 'react';



const BotaoQuantidade = ()=>{

   
    const [valor,setValor] = useState(0);
    const [total,setValorTotal] = useState(0);

    function adicionar(){
        var num = valor;
        num++;        
        setValor(num);
    }

    function remover(){
        var num = valor;
        if(num==0){
            
            return;    
        }
        num--;
        setValor(num);
    }

    function calc(){

        var num = valor;
        var calc = num * 179.90;
        calc = Number(calc).toFixed(2);
        calc = 'R$ ' + String(calc).replace('.',',')
        setValorTotal(calc);
    }

    return (    
        <div>
            <div className='div-botao'>
                <button onClick={remover}>-</button>
                <input type={"number"} value={valor}/>
                <button onClick={adicionar}>+</button>
                <button onClick={calc}>
                    Comprar
                </button>                            
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {total==0 ? null : <h3>Obrigado por Comprar<br/>Total: {total} </h3>}
        </div>    
       
        
       
    );
}

export default BotaoQuantidade;