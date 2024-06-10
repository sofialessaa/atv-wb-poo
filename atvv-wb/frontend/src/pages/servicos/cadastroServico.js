import { useState } from 'react';
import { Button } from 'react-bootstrap';
import BarraNavegacao from '../../componentes/barraNavegacao';
import axios from "axios";
import * as React from "react";

export default function CadastroServico(props){

    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');

    const cadastrarServico = async () => {
        try {
            const cleanedValue = preco.replace(/[^\d,]/g, '');
            const precoBanco = parseFloat(cleanedValue.replace(',', '.'));
            const newData = {
                nome: nome,
                preco: precoBanco,
            }; 
            console.log("Adicionando servico", newData);
            await axios.post('http://localhost:8080/cadastrar_servico', newData);
            setNome('')
            setPreco('')
        } catch (error) {
            console.error("Erro ao adicionar servico:", error);
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
                <h1>Cadastrar Serviço</h1>
                <div className="forms">
                    <form className="form-padrao">
                        <div className="field">
                            <label htmlFor="Servico">Serviço:</label>
                            <input type="text"value={nome} onChange={event => setNome(event.target.value)} placeholder="Informe o nome do serviço"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Preco">Preço:</label>
                            <input type="text"value={preco} onChange={formatacaoPreco} placeholder="R$0,00"/>
                        </div>
                        <Button className="submit" type='button' onClick={cadastrarServico}>Cadastrar</Button>{' '}
                    </form>
                </div>
            </main>
        </section>
    );   
}