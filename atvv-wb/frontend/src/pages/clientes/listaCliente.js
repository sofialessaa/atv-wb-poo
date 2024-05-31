import React from 'react';
import { Table } from 'react-bootstrap';
import BarraNavegacao from '../../componentes/barraNavegacao';
import '../styles.css';
import excluir from "../images/excluir.svg";
import editar from "../images/editar.svg";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ListaClientes(props) {
    const [chartData, setChartData] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const responseCliente = await axios.get("http://localhost:8080/clientes");
        const dataCliente = responseCliente.data;

        const processedData = dataCliente.map((itemCliente) => ({
          ...itemCliente
        }));
  
        setChartData(processedData);
        console.log(processedData);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    const deletarCliente = async (id) => {
        try {
            
            setChartData(chartData.filter(cliente => cliente.id !== id));
            await axios.delete(`http://localhost:8080/clientes/${id}`);
            console.log("Cliente Deletado!")

        } catch (error) {
          console.error("Erro ao apagar cliente:", error);
        }
    };

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
                            <td>Data de Emissão-CPF</td>
                            <td>RG</td>
                            <td>UF-RG</td>
                            <td>Data de Emissão-RG</td>
                            <td>Telefone</td>
                            <td>Editar</td>
                            <td>Excluir</td>
                        </tr>
                    </thead>
                    <tbody>
                        {chartData.map((cliente, index) => (
                            <tr key={cliente.id}>
                            <td>{index + 1}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.nomeSocial}</td>
                            <td>{cliente.genero}</td>
                            <td>{cliente.cpf}</td>
                            <td>{cliente.dataEmissaoCpf}</td>
                            <td>{cliente.rg}</td>
                            <td>{cliente.UF_RG}</td>
                            <td>{cliente.dataEmissaoRG}</td>
                            <td>{cliente.telefone}</td>
                            <td>
                                <a href="##">
                                    <img src={editar} alt="Editar"/>
                                </a>
                            </td>
                            <td>
                                <a href="##">
                                    <img src={excluir} alt="Excluir" onClick={() => deletarCliente(cliente.id)}/>
                                </a>
                            </td>
                            </tr>
                        ))}
                        {/* <tr>
                            <td>1</td>
                            <td>Taylor Swift</td>
                            <td>Swift</td>
                            <td>Feminino</td>
                            <td>131.313.131-31</td>
                            <td>13.131.313-1</td>
                            <td>PI</td>
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
                            <td>SP</td>
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
                            <td>MA</td>
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
                            <td>RJ</td>
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
                        </tr> */}
                    </tbody>
                </Table>
            </div>
        </main>
    </section>
  );
}