import React, { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import BarraNavegacao from '../../componentes/barraNavegacao';
import '../styles.css';
import axios from "axios";

export default function ListarServicos(props){
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const responseConsumoServico = await axios.get("http://localhost:8080/consumo_servico");
            const dataConsumoServico = responseConsumoServico.data;

            setChartData(dataConsumoServico);
            console.log(dataConsumoServico);
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
                <h1>Lista dos pedidos de serviços por cliente</h1>
                <div className="tables">
                    <Table className= "table">
                        <thead className='table-light'>
                            <tr>
                                <td>ID</td>
                                <td>Nome</td>
                                <td>CPF</td>
                                <td>Serviço</td>
                                <td>Preço total</td>
                            </tr>
                        </thead>
                        <tbody>
                            {chartData.map((consumoServico, index) => (
                                <tr key={consumoServico.id}>
                                    <td>{index + 1}</td>
                                    <td>{consumoServico.nome}</td>
                                    <td>{consumoServico.cpf}</td>
                                    <td>{consumoServico.servico}</td>
                                    <td>{consumoServico.preco}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </main>
        </section>
    );   
}