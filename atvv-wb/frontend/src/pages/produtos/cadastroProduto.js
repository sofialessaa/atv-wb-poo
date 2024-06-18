import * as React from "react";
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import BarraNavegacao from '../../componentes/barraNavegacao';
import axios from "axios";

export default function CadastroProdutos(props){
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');

    function validarCadastro(){
        if(nome.trim().length === 0) return false
        if(preco.trim().length === 0) return false
        return true;
    }

    const cadastrarProduto = async () => {
        const isValid = validarCadastro()
        if(!isValid){
            alert('Preencha todos os campos obrigatórios')
            return;
        }
        try {
            const cleanedValue = preco.replace(/[^\d,]/g, '').replace(',', '.');
            const precoBanco = parseFloat(cleanedValue);
            const newData = {
                nome: nome,
                preco: precoBanco,
            }; 
            console.log("Adicionando produto", newData);
            await axios.post('http://localhost:8080/cadastrar_produto', newData);
            setNome('')
            setPreco('')
        } catch (error) {
            console.error("Erro ao adicionar produto:", error);
        }
    };

    const formatacaoPreco = (event) => {
        const rawValue = event.target.value;
        const cleanedValue = rawValue.replace(/\D/g, '');
        const numberValue = parseFloat(cleanedValue) / 100;
        const formattedValue = numberValue.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        });
        setPreco(formattedValue);
    };

    return (
        <section>
            <header>
                <BarraNavegacao/>
            </header>
            <main>
                <h1>Cadastrar Produto</h1>
                <div className="forms">
                    <form className="form-padrao">
                        <div className="field">
                            <label htmlFor="Produto">Produto:</label>
                            <input type="text" value={nome} onChange={event => setNome(event.target.value)} placeholder="Informe o nome do produto"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Preco">Preço:</label>
                            <input type="text" value={preco} onChange={formatacaoPreco} placeholder="R$0,00"/>
                        </div>
                        <Button className="submit" type='button' onClick={cadastrarProduto}>Cadastrar</Button>{' '}
                    </form>
                </div>
            </main>
        </section>
    );  
}