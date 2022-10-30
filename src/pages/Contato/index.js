import { useState } from 'react';
import './styles.css'
const Contato = ()=>{

    var nomeDigitado = "";

    const [nome,setNome] = useState(0);

    function registraContato(){
        setNome(nomeDigitado);
        var inputNome = document.getElementById('input-nome');
        var inputSobreNome = document.getElementById('input-sobrenome');
        var textArea = document.getElementById('input-motivo');

        textArea.value='';
        inputNome.value='';
        inputSobreNome.value='';

        inputNome.focus();
    }

    return (
        <div className="container-form">
            <h2>Contato</h2>

            <label for={"input-nome"}>Nome:</label>
            <input id={"input-nome"} onChange={
                (txt)=>{
                    nomeDigitado = txt.target.value;
                }
            }/>

            <label for={"input-sobrenome"}>Sobrenome:</label>
            <input id={"input-sobrenome"}/>

            <label for={"input-motivo"}>Informe o motivo do contato:</label>
            <textarea rows={5} id={'input-motivo'}></textarea>

            <button onClick={registraContato}>Enviar</button>

            {nome==0 ? null : <h4>Obrigado por entrar em contato {nome} &#x1F60A;</h4>}
        </div>
    );
}

export default Contato;