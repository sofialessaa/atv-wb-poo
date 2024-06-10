import React, { useEffect, useState } from 'react';
import BarraNavegacao from "../../componentes/barraNavegacao";
import "../styles.css";
import axios from "axios";
import { Table } from "react-bootstrap";

export default function Lista2(props) {
    const [mulheres, setMulheres] = useState([]);
    const [homens, setHomens] = useState([]);
    const [outros, setOutros] = useState([]);

    useEffect(() => {
        fetchData();
    });

    const fetchData = async () => {
        try {
            const responseCliente = await axios.get("http://localhost:8080/clientes");
            const dataCliente = responseCliente.data;

            filterClientsByGender(dataCliente);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    };

    const filterClientsByGender = (clientes) => {
        setMulheres(clientes.filter(cliente => cliente.genero === 'Feminino'));
        setHomens(clientes.filter(cliente => cliente.genero === 'Masculino'));
        setOutros(clientes.filter(cliente => cliente.genero === 'Outro'));
    };

    return (
        <section>
          <header>
            <BarraNavegacao />
          </header>
          <main>
            <h1>Lista de todos os clientes por gênero.</h1>
            <div className='tables-lista'>
                <div className='campo-cadastro-lista'>
                    <h1>Clientes do gênero FEMININO</h1>
                    <Table className= "table">
                    <thead className='table-light'>
                        <tr>
                            <td>Nome</td>
                            <td>CPF</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {mulheres.map(cliente => (
                                    <p key={cliente.cpf}>{cliente.nome}</p>
                                ))}
                            </td>
                            <td>
                                {mulheres.map(cliente => (
                                    <p key={cliente.cpf}>{cliente.cpf}</p>
                                ))}
                            </td>
                        </tr>
                    </tbody>
                    </Table>
                </div>
                <div className='campo-cadastro-lista'>
                    <h1>Clientes do gênero MASCULINO</h1>
                    <Table className= "table">
                    <thead className='table-light'>
                        <tr>
                            <td>Nome</td>
                            <td>CPF</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                            {homens.map(cliente => (
                                <p key={cliente.cpf}>{cliente.nome}</p>
                            ))}
                            </td>
                            <td>
                            {homens.map(cliente => (
                                <p key={cliente.cpf}>{cliente.cpf}</p>
                            ))}
                            </td>
                        </tr>
                    </tbody>
                    </Table>
                </div>
                <div className='campo-cadastro-lista'>
                    <h1>Clientes do gênero OUTRO</h1>
                    <Table className= "table">
                    <thead className='table-light'>
                        <tr>
                            <td>Nome</td>
                            <td>CPF</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                            {outros.map(cliente => (
                                <p key={cliente.cpf}>{cliente.nome}</p>
                            ))}
                            </td>
                            <td>
                            {outros.map(cliente => (
                                <p key={cliente.cpf}>{cliente.cpf}</p>
                            ))}
                            </td>
                        </tr>
                    </tbody>
                    </Table>
                </div>
            </div>
          </main>
        </section>
    );
}