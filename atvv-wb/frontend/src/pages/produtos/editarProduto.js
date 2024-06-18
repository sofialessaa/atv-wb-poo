import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import BarraNavegacao from '../../componentes/barraNavegacao';
import axios from "axios"; 
import { useParams } from 'react-router-dom';
import '../styles.css';

export default function EditarProduto(props){
    const { id } = useParams();
    const [produto, setProduto] = useState({ nome: '', preco: '' });

    useEffect(() => {
        fetch(`http://localhost:8080/produtos/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProduto(data)
                setNome(data.nome)
                setPreco(data.preco)
            })
            .catch((err) => console.log)
    }, [id]);

    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');

    const editarProduto = async () => {
        console.log(nome, preco)
        try {
            const cleanedValue = preco.replace(/[^\d,]/g, '').replace(',', '.');
            const precoBanco = parseFloat(cleanedValue);
            const newData = {
                id: id,
                nome: nome,
                preco: precoBanco,
            }
            await axios.put('http://localhost:8080/editar_produto', newData);
        } catch (error) {
            console.error("Erro ao editar produto:", error);
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
                <BarraNavegacao />
            </header>
            <main>
                <h1>Editar Produto</h1>
                <div className="forms-editar">
                    <form>
                        <div className="field">
                            <label htmlFor="Produto">Produto:</label>
                            <input type="text" value={nome} placeholder={produto.nome} onChange={event => setNome(event.target.value)} />
                        </div>
                        <div className="field">
                            <label htmlFor="Preco">Preço:</label>
                            <input type="text" value={preco} placeholder={produto.preco} onChange={formatacaoPreco}/>
                        </div>
                        <div className='button-editar'>
                            <Button className="submit-editar" type='button' onClick={editarProduto} href='/produtos'>Editar</Button>{' '}
                            <Button className="submit-editar" href='/produtos'>Voltar</Button>
                        </div>
                    </form>
                </div>
            </main>
        </section>
    );
}