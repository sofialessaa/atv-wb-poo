import React, { useEffect, useState } from 'react';
import BarraNavegacao from "../../componentes/barraNavegacao";
import { Table } from "react-bootstrap";
import "../styles.css";

export default function Lista4(props) {
    const [lista4, setLista4] = useState({ Feminino: [], Masculino: [], Outro: []});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/lista4', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error('Erro ao buscar os dados');
                }
                const data = await response.json();
                setLista4(data);
                console.log(data); 
            } catch (error) {
                console.error('Erro na requisição:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section>
            <header>
                <BarraNavegacao />
            </header>
            <main>
                <h1>Lista dos produtos ou serviços mais consumidos por gênero.</h1>
                <div className='tables-lista'>
                    <div className='campo-cadastro-lista'>
                        <h1>Produtos ou serviços mais consumidos pelo gênero FEMININO</h1>
                        <Table className="table">
                            <thead className='table-light'>
                                <tr>
                                    <th>Posição</th>
                                    <th>Produto ou Serviço</th>
                                    <th>Quantidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lista4.Feminino.map((consumo, index) => (
                                    <tr key={index}>
                                        <td>#{index + 1}</td>
                                        <td>{consumo.nome}</td>
                                        <td>{consumo.totalQuantidade}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                    <div className='campo-cadastro-lista'>
                        <h1>Produtos ou serviços mais consumidos pelo gênero MASCULINO</h1>
                        <Table className="table">
                            <thead className='table-light'>
                                <tr>
                                    <th>Posição</th>
                                    <th>Produto ou Serviço</th>
                                    <th>Quantidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lista4.Masculino.map((consumo, index) => (
                                    <tr key={index}>
                                        <td>#{index + 1}</td>
                                        <td>{consumo.nome}</td>
                                        <td>{consumo.totalQuantidade}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                    <div className='campo-cadastro-lista'>
                        <h1>Produtos ou serviços mais consumidos pelo gênero OUTRO</h1>
                        <Table className="table">
                            <thead className='table-light'>
                                <tr>
                                    <th>Posição</th>
                                    <th>Produto ou Serviço</th>
                                    <th>Quantidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lista4.Outro.map((consumo, index) => (
                                    <tr key={index}>
                                        <td>#{index + 1}</td>
                                        <td>{consumo.nome}</td>
                                        <td>{consumo.totalQuantidade}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </main>
        </section>
    );
}