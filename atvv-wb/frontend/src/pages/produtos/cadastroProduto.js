import * as React from "react";
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import BarraNavegacao from '../../componentes/barraNavegacao';
import axios from "axios";

export default function CadastroProdutos(props){
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');

    const cadastrarProduto = async () => {
        try {
            const newData = {
                nome: nome,
                preco: preco,
            }; 
            console.log("Adicionando produto", newData);
            await axios.post('http://localhost:8080/cadastrar_produto', newData);
            setNome('')
            setPreco('')
        } catch (error) {
            console.error("Erro ao adicionar produto:", error);
        }
    };

    return (
        <section>
            <header>
                <BarraNavegacao/>
            </header>
            <main>
                <h1>Cadastrar Produto</h1>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label htmlFor="Produto">Produto:</label>
                            <input type="text" value={nome} onChange={event => setNome(event.target.value)}/>
                        </div>
                        <div className="field">
                            <label htmlFor="Preco">Preço:</label>
                            <input type="text" value={preco} onChange={event => setPreco(event.target.value)}/>
                        </div>
                        <Button className="submit" type='button' onClick={cadastrarProduto}>Cadastrar</Button>{' '}
                    </form>
                </div>
            </main>
        </section>
    );  
}