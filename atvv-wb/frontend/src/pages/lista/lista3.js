/* Produtos e serviços gerais mais consumidos. */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BarraNavegacao from "../../componentes/barraNavegacao";
import { Table } from "react-bootstrap";
import "../styles.css";

export default function Lista3(props) {
    const [consumos, setConsumos] = useState([]);

    const fetchData = async () => {
        try {
            const responseServico = await axios.get("http://localhost:8080/consumo_servico");
            const dataServico = responseServico.data;

            const responseProduto = await axios.get("http://localhost:8080/consumo_produto");
            const dataProduto = responseProduto.data;

            const consumosServicos = dataServico.map(consumo => ({
                nome: consumo.servico,
                quantidade: 1, 
                preco: parseInt(consumo.preco)
            }));
            
            const consumosProdutos = dataProduto.map(consumo => ({
                nome: consumo.produto,
                quantidade: parseInt(consumo.quantidade), 
                preco: parseInt(consumo.preco)
            }));

            const consumosTotais = [...consumosServicos, ...consumosProdutos];

            const consumosAgrupados = consumosTotais.reduce((acc, consumo) => {
                const existingConsumo = acc.find(item => item.nome === consumo.nome);
                if (existingConsumo) {
                    existingConsumo.quantidade += consumo.quantidade;
                } else {
                    acc.push(consumo);
                }
                return acc;
            }, []);

            consumosAgrupados.sort((a, b) => b.quantidade - a.quantidade);

            setConsumos(consumosAgrupados);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section>
            <header>
                <BarraNavegacao />
            </header>
            <main>
                <h1>Lista dos produtos ou serviços gerais mais consumidos.</h1>
                <div className='tables-lista1'>
                    <div className='campo-cadastro-lista1'>
                        <Table className="table">
                            <thead className='table-light'>
                                <tr>
                                    <th>Posição</th>
                                    <th>Nome</th>
                                    <th>Quantidade Consumida</th>
                                </tr>
                            </thead>
                            <tbody>
                                {consumos.map((consumo, index) => (
                                    <tr key={index}>
                                        <td>#{index + 1}</td>
                                        <td>{consumo.nome}</td>
                                        <td>{consumo.quantidade}</td>
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