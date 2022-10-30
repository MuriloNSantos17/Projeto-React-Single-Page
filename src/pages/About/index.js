import './styles.css'
import { FaHeadphones } from "react-icons/fa";


const about = ()=>{
    return (
        <div className='div-artigo'>
            <h1>SOBRE A MARCA</h1>
            <p className='prg-about'>
            A Xiaomi é uma empresa chinesa que atua na área de smartphones, acessórios e outros produtos tecnológicos, como Smart TVs, tablets e pulseiras inteligentes. A companhia foi fundada em 10 de abril de 2010 pelo engenheiro eletrônico Lei Jun. No ano de 2015, iniciou as atividades na América Latina, incluindo o mercado brasileiro. A corporação mantém uma fábrica no Brasil para evitar as taxas de importação. Os aparelhos da fabricante rodam o MIUI, sistema Android modificado visualmente, como ocorre com os gadgets lançados no país, como Redmi 2 e Redmi 2 Pro. Além disso, a smartband Mi Band, pulseira inteligente da marca, tem lançamento em 2015 no país.
            </p>
            <div className='produtos'>
                <h2>VÍDEO SOBRE O PRODUTO</h2>
                <iframe width="400" height="270" src="https://www.youtube.com/embed/3EZWnPtBvJo" title="Redmi Airdots 2 Official Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
           
        </div>
    );
}

export default about;