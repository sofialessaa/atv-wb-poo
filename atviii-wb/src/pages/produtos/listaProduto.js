import React from 'react';
import { Table } from 'react-bootstrap';
import BarraNavegacao from '../../componentes/barraNavegacao';
import excluir from "../images/excluir.svg";
import editar from "../images/editar.svg";

export default function ListaProdutos(props){
    return (
        <section>
            <header>
                <BarraNavegacao/>
            </header>
            <main>
                <h1>Produtos</h1>
                <div className="tables">
                    <Table className= "table">
                        <thead className='table-light'>
                            <tr>
                                <td>ID</td>
                                <td>Produto</td>
                                <td>Preço</td>
                                <td>Editar</td>
                                <td>Excluir</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Esmalte</td>
                                <td>R$14,00</td>
                                <td>
                                    <a href="/editar_produto">
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
                                <td>Shampoo</td>
                                <td>R$24,99</td>
                                <td>
                                    <a href="/editar_produto">
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
                                <td>Condicionador</td>
                                <td>R$23,99</td>
                                <td>
                                    <a href="/editar_produto">
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
                                <td>Creme para cabelo cacheado</td>
                                <td>R$50,00</td>
                                <td>
                                    <a href="##">
                                        <img src={editar} alt="Editar"/>
                                    </a>
                                </td>
                                <td>
                                    <a href="##">
                                        <img src={excluir} alt="Editar"/>
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