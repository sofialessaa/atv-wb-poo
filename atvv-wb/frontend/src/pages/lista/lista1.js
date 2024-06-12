/* Lista dos 10 clientes que mais consumiram em quantidade.*/
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BarraNavegacao from "../../componentes/barraNavegacao";
import { Table } from "react-bootstrap";
import "../styles.css";

export default function Lista1(props) {
    const [lista1, setLista1] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/lista1`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setLista1(data)
            })
            .catch((err) => console.log)
    }, []);

    return (
        <section>
            <header>
                <BarraNavegacao />
            </header>
            <main>
                <h1>Lista dos 10 clientes que mais consumiram em quantidade.</h1>
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
                                {lista1.map((cliente, index) => (
                                    <tr key={cliente.id}>
                                        <td>#{index + 1}</td>
                                        <td>{cliente.nome}</td>
                                        <td>{cliente.totalQuantidade}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </main>
        </section>
    );
};