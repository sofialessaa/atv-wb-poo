import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import BarraNavegacao from '../../componentes/barraNavegacao';
import axios from 'axios';

export default function EditarServico(props){
    const { id } = useParams();
    const [servico, setServico] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/servicos/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setServico(data)
                setNome(data.nome)
                setPreco(data.preco)
            })
            .catch((err) => console.log)
    }, [id]);

    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');

    const editarServico = async () => {
        console.log(nome, preco)
        try{
            const cleanedValue = preco.replace(/[^\d,]/g, '');
            const precoBanco = parseFloat(cleanedValue.replace(',', '.'));

            const newData = {
                id: id,
                nome: nome,
                preco: precoBanco,
            }
            await axios.put('http://localhost:8080/editar_servico', newData)
        }catch (error) {
            console.error("Erro ao editar servico:", error);
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
                <h1>Editar Serviço</h1>
                <div className="forms-editar">
                    <form>
                        <div className="field">
                            <label htmlFor="Servico">Serviço:</label>
                            <input type="text" value={nome} placeholder={servico.nome} onChange={event => setNome(event.target.value)}/>
                        </div>
                        <div className="field">
                            <label htmlFor="Preco">Preço:</label>
                            <input type="text" value={preco} placeholder={servico.preco} onChange={formatacaoPreco}/>
                        </div>
                        <div className='button-editar'>
                            <Button className="submit-editar" type='submit' onClick={editarServico} href='/servicos'>Editar</Button>{' '}
                            <Button className="submit-editar" href='/servicos'>Voltar</Button>
                        </div>
                    </form>
                </div>
            </main>
        </section>
    );
}