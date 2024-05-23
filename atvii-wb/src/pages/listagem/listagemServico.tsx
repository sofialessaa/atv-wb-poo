import { PencilSimple, Eraser, Eye } from 'phosphor-react';
import { Component } from 'react';
import { Table } from "react-bootstrap";
import BarraNavegacao from '../../componentes/barraNavegacao';
import './styles.scss';

export class ListarServicos extends Component {
    render() {
        return (
            <section>
                <header>
                    <BarraNavegacao />
                </header>
                <main>
                    <h1>Lista de todos os pedidos de serviços por cliente</h1>
                    <div className="tables">
                        <Table className= "table">
                            <thead className='table-light'>
                                <tr>
                                    <td>Id</td>
                                    <td>Nome</td>
                                    <td>CPF</td>
                                    <td>IDServico</td>
                                    <td>Serviço</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Taylor Swift</td>
                                    <td>131.313.131-31</td>
                                    <td>3</td>
                                    <td>Pedicure</td>
                                    <td>
                                        <div className="icons">
                                            <a href="/editar_servicos/1">
                                                <PencilSimple size={35} color="#198754" />
                                            </a>
                                            <a href="/clientes/1">
                                                <Eye size={35} color="#0DCAF0" />
                                            </a>
                                            <a href="##">
                                                <Eraser size={35} color="#DC3545" />
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jonathan Calleri</td>
                                    <td>091.845.112-07</td>
                                    <td>5</td>
                                    <td>Modelagem de Barba</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Sofia Lessa</td>
                                    <td>390.891.678-02</td>
                                    <td>1</td>
                                    <td>Corte de Cabelo Feminino</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Gabriel Oliveira</td>
                                    <td>978.123.035-56</td>
                                    <td>2</td>
                                    <td>Remoção de Manchas na Pele</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </main>
            </section>
        );
    }
}
