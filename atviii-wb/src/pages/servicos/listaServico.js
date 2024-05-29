import React from 'react';
import { Table } from 'react-bootstrap';
import BarraNavegacao from '../../componentes/barraNavegacao';
import excluir from "../images/excluir.svg";
import editar from "../images/editar.svg";

export default function ListaServicos(props){
    return (
        <section>
            <header>
                <BarraNavegacao/>
            </header>
            <main>
                <h1>Serviços</h1>
                <div className="tables">
                    <Table className= "table">
                        <thead className='table-light'>
                            <tr>
                                <td>ID</td>
                                <td>Serviço</td>
                                <td>Preço</td>
                                <td>Editar</td>
                                <td>Excluir</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Corte de Cabelo Feminino</td>
                                <td>R$90,00</td>
                                <td>
                                    <a href="/editar_servico">
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
                                <td>Remoção de Manchas na Pele</td>
                                <td>R$180,00</td>
                                <td>
                                    <a href="/editar_servico">
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
                                <td>Pedicure</td>
                                <td>R$35,00</td>
                                <td>
                                    <a href="/editar_servico">
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
                                <td>Corte de Cabelo Masculino</td>
                                <td>R$40,00</td>
                                <td>
                                    <a href="/editar_servico">
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
                                <td>5</td>
                                <td>Modelagem de Barba</td>
                                <td>R$30,00</td>
                                <td>
                                    <a href="/editar_servico">
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