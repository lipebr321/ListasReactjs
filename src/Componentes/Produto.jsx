import React from "react";
import Botoes from './Botoes';
import './Produto.css';


export default function Produto({ nome, texto, image }) {
    return (
        <div className='Produto'>
            <div className='Carro'>
                <img id="village" src={image}></img>
            </div>
            <div className='Descricao'>
                <h1>{nome}</h1>
                <h1>{texto}</h1>
            </div>
            <div>
                <Botoes/>
            </div>
        </div>
    );
}