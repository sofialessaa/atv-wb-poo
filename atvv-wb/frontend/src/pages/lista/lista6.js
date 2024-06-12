/* Lista dos 5 clientes que mais consumiram em valor */
import React, { useEffect, useState } from 'react';
import BarraNavegacao from "../../componentes/barraNavegacao";
import "../styles.css";
import { Table } from "react-bootstrap";

export default function Lista6(props) {
    const [lista6, setLista6] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/lista6`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setLista6(data)
            })
            .catch((err) => console.log)
    }, []);

    return (
        <section>
            <header>
                <BarraNavegacao />
            </header>
            <main>
                <h1>Lista dos 5 clientes que mais consumiram em valor</h1>
                <div className='tables-lista1'>
                    <div className='campo-cadastro-lista1'>
                        <Table className="table">
                            <thead className='table-light'>
                                <tr>
                                    <th>Posição</th>
                                    <th>Nome</th>
                                    <th>Total Gasto</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lista6.map((cliente, index) => (
                                    <tr key={cliente.cpf}>
                                        <td>#{index + 1}</td>
                                        <td>{cliente.nome}</td>
                                        <td>{cliente.totalPreco}</td>
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