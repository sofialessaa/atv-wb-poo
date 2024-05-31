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
            const newData = {
                nome: nome,
                preco: preco,
            }; 
            console.log("Adicionando servico", newData);
            await axios.post('http://localhost:8080/cadastrar_servico', newData);
            setNome('')
            setPreco('')
        } catch (error) {
            console.error("Erro ao adicionar servico:", error);
        }
    };

    return (
        <section>
            <header>
                <BarraNavegacao/>
            </header>
            <main>
                <h1>Cadastrar Serviço</h1>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label htmlFor="Servico">Serviço:</label>
                            <input type="text"value={nome} onChange={event => setNome(event.target.value)}/>
                        </div>
                        <div className="field">
                            <label htmlFor="Preco">Preço:</label>
                            <input type="text"value={preco} onChange={event => setPreco(event.target.value)}/>
                        </div>
                        <Button className="submit" type='button' onClick={cadastrarServico}>Cadastrar</Button>{' '}
                    </form>
                </div>
            </main>
        </section>
    );   
}