import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import BarraNavegacao from '../../componentes/barraNavegacao';
import '../styles.css';
import excluir from "../images/excluir.svg";
import editar from "../images/editar.svg";
import { useNavigate } from "react-router-dom";

export default function ListaClientes(props) {
    const navigate = useNavigate();
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        if (clientes.length > 0) return;
        carregarClientes();
    }, []);

    function carregarClientes() {
        fetch('http://localhost:32832/clientes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json()).then(r => {
            setClientes(r);
            console.log(r);
        });
    }

    function excluirCliente(id) {
        fetch('http://localhost:32832/cliente/excluir', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        }).then(r => {
            alert(r.status === 200 ? 'Cliente excluído com sucesso!' : 'Erro ao excluir cliente.');
            carregarClientes();
        });
    }

    function paginaEditar(cliente) {
        navigate(`/atualizar`, {state:cliente});
    }

    return (
        <section>
            <header>
                <BarraNavegacao />
            </header>
            <main>
                <h1>Clientes</h1>
                <div className='tables'>
                    <Table className="table">
                        <thead className='table-light'>
                            <tr>
                                <td>ID</td>
                                <td>Nome</td>
                                <td>Sobrenome</td>
                                <td>Email</td>
                                <td>Estado</td>
                                <td>Cidade</td>
                                <td>Bairro</td>
                                <td>Rua</td>
                                <td>Número</td>
                                <td>Código Postal</td>
                                <td>Informações Adicionais</td>
                                <td style={{ width: 110 }}>Telefone</td>
                                <td>Editar</td>
                                <td>Excluir</td>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((cliente) => (
                                <tr key={cliente.id}>
                                    <td>{cliente.id}</td>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.sobreNome}</td>
                                    <td>{cliente.email}</td>
                                    <td>{cliente.endereco.estado}</td>
                                    <td>{cliente.endereco.cidade}</td>
                                    <td>{cliente.endereco.bairro}</td>
                                    <td>{cliente.endereco.rua}</td>
                                    <td>{cliente.endereco.numero}</td>
                                    <td>{cliente.endereco.codigoPostal}</td>
                                    <td>{cliente.endereco.informacoesAdicionais}</td>
                                    <td>
                                        {cliente.telefones.map((telefone, index) => (
                                            <p key={index}>{telefone.ddd} {telefone.numero}</p>
                                        ))}
                                    </td>
                                    <td>
                                        <button type='button' onClick={() => paginaEditar(cliente)}><img src={editar} alt="Editar" /></button>
                                    </td>
                                    <td>
                                        <button type='button' onClick={() => excluirCliente(cliente.id)}><img src={excluir} alt="Excluir" /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </main>
        </section>
    );
}