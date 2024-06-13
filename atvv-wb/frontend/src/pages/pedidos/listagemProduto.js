import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import BarraNavegacao from "../../componentes/barraNavegacao";
import "../styles.css";
import axios from "axios";

export default function ListarProdutos(props){
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const responseConsumoProduto = await axios.get("http://localhost:8080/consumo_produto");
            const dataConsumoProduto = responseConsumoProduto.data;

            const processedData = dataConsumoProduto.map(item => ({
                ...item,
                preco: parseFloat(item.preco) 
            }));

            setChartData(processedData);
            console.log(processedData);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    };

    return (
        <section>
            <header>
                <BarraNavegacao />
            </header>
            <main>
                <h1>Lista dos pedidos de produtos por cliente</h1>
                <div className='tables'>
                    <Table className="table">
                        <thead className='table-light'>
                            <tr>
                                <td>ID</td>
                                <td>Nome</td>
                                <td>CPF</td>
                                <td>Produto</td>
                                <td>Quantidade</td>
                                <td>Preço total</td>
                            </tr>
                        </thead>
                        <tbody>
                            {chartData.map((consumoProduto, index) => (
                                <tr key={consumoProduto.id}>
                                    <td>{index + 1}</td>
                                    <td>{consumoProduto.nome}</td>
                                    <td>{consumoProduto.cpf}</td>
                                    <td>{consumoProduto.produto}</td>
                                    <td>{consumoProduto.quantidade}</td>
                                    <td>{consumoProduto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </main>
        </section>
    );
}