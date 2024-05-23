import { Component } from "react";
import { Button, Table } from "react-bootstrap";
import BarraNavegacao from "../../componentes/barraNavegacao";
import "./styles.scss";
import { Eraser, Eye, PencilSimple } from "phosphor-react";

export class ListarProdutos extends Component {
    render() {
        return (
            <section>
                <header>
                    <BarraNavegacao />
                </header>
                <main>
                    <h1>Lista de todos os pedidos de produtos por cliente</h1>
                    <div className='tables'>
                        <Table className= "table">
                            <thead className='table-light'>
                                <tr>
                                    <td>Id</td>
                                    <td>Nome</td>
                                    <td>CPF</td>
                                    <td>IDProduto</td>
                                    <td>Produto</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Taylor Swift</td>
                                    <td>131.313.131-31</td>
                                    <td>1</td>
                                    <td>Esmalte</td>
                                    <td>
                                        <div className="icons">
                                            <a href="/editar_cliente/1">
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
                                    <td>2</td>
                                    <td>Shampoo</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Sofia Lessa</td>
                                    <td>390.891.678-02</td>
                                    <td>4</td>
                                    <td>Creme para cabelo cacheado</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Gabriel Oliveira</td>
                                    <td>978.123.035-56</td>
                                    <td>3</td>
                                    <td>Condicionador</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </main>
            </section>
        );
    }
}