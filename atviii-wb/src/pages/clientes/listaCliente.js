import React from 'react';
import { Table } from 'react-bootstrap';
import BarraNavegacao from '../../componentes/barraNavegacao';
import '../styles.css';
import excluir from "../images/excluir.svg";
import editar from "../images/editar.svg";

export default function ListaClientes(props) {
  return (
    <section>
        <header>
            <BarraNavegacao/>
        </header>
        <main>
            <h1>Clientes</h1>
            <div className='tables'>
                <Table className= "table">
                    <thead className='table-light'>
                        <tr>
                            <td>ID</td>
                            <td>Nome</td>
                            <td>Nome Social</td>
                            <td>Gênero</td>
                            <td>CPF</td>
                            <td>RG</td>
                            <td>Telefone</td>
                            <td>Editar</td>
                            <td>Excluir</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Taylor Swift</td>
                            <td>Swift</td>
                            <td>Feminino</td>
                            <td>131.313.131-31</td>
                            <td>13.131.313-1</td>
                            <td>(12) 99812-3767</td>
                            <td>
                                <a href="/editar_cliente">
                                    <img src={editar} alt="Editar"/>
                                </a>
                            </td>
                            <td>
                                <a href="##">
                                    <img src={excluir} alt="Excluir"/>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jonathan Calleri</td>
                            <td>Calleri</td>
                            <td>Masculino</td>
                            <td>091.845.112-07</td>
                            <td>67.492.120-2</td>
                            <td>(11) 90123-9456</td>
                            <td>
                                <a href="/editar_cliente">
                                    <img src={editar} alt="Editar"/>
                                </a>
                            </td>
                            <td>
                                <a href="##">
                                    <img src={excluir} alt="Excluir"/>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Sofia Lessa</td>
                            <td>Sofia</td>
                            <td>Feminino</td>
                            <td>390.891.678-02</td>
                            <td>39.915.865-7</td>
                            <td>(86) 99912-1313</td>
                            <td>
                                <a href="/editar_cliente">
                                    <img src={editar} alt="Editar"/>
                                </a>
                            </td>
                            <td>
                                <a href="##">
                                    <img src={excluir} alt="Excluir"/>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Gabriel Oliveira</td>
                            <td>Fernanda</td>
                            <td>Outro</td>
                            <td>978.123.035-56</td>
                            <td>13.009.547-X</td>
                            <td>(81) 98761-1782</td>
                            <td>
                                <a href="/editar_cliente">
                                    <img src={editar} alt="Editar"/>
                                </a>
                            </td>
                            <td>
                                <a href="##">
                                    <img src={excluir} alt="Excluir"/>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </main>
    </section>
  );
}