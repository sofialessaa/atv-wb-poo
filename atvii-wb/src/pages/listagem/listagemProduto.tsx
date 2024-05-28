import { Component } from "react";
import { Table } from "react-bootstrap";
import BarraNavegacao from "../../componentes/barraNavegacao";
import '../styles.scss';

export class ListarProdutos extends Component {
    render() {
        return (
            <section>
                <header>
                    <BarraNavegacao />
                </header>
                <main>
                    <h1>Lista dos pedidos de produtos por cliente</h1>
                    <div className='tables'>
                        <Table className= "table">
                            <thead className='table-light'>
                                <tr>
                                    <td>ID</td>
                                    <td>Nome</td>
                                    <td>CPF</td>
                                    <td>ID_Produto</td>
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
