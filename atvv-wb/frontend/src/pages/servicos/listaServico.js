import React from 'react';
import { Table } from 'react-bootstrap';
import BarraNavegacao from '../../componentes/barraNavegacao';
import excluir from "../images/excluir.svg";
import editar from "../images/editar.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function ListaServicos(props){
    const [chartData, setChartData] = useState([]);

  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const responseProduto = await axios.get("http://localhost:8080/servicos");
        const dataProduto = responseProduto.data;

        const processedData = dataProduto.map((itemServico) => ({
          ...itemServico,
          preco: typeof itemServico.preco === 'number' ? itemServico.preco : parseFloat(itemServico.preco)
        }));
  
        setChartData(processedData);
        console.log(processedData);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    const deletarServico = async (id) => {
        try {
            
            setChartData(chartData.filter(servico => servico.id !== id));
            await axios.delete(`http://localhost:8080/servicos/${id}`);
            console.log("Servico Deletado!")

        } catch (error) {
          console.error("Erro ao apagar servico:", error);
        }
      };
      
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
                        {chartData.map((servico, index) => (
                            <tr key={servico.id}>
                            <td>{index + 1}</td>
                            <td>{servico.nome}</td>
                            <td>{servico.preco}</td>
                            <td>
                            <Link to={`/editar_servico/${servico.id}`}><img src={editar} alt="Editar"/></Link>
                            </td>
                            <td>
                                <a href="##">
                                    <img src={excluir} alt="Excluir" onClick={() => deletarServico(servico.id)}/>
                                </a>
                            </td>
                            </tr>
                        ))}
                            
                            {/* <tr>
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
                            </tr> */}
                        </tbody>
                    </Table>
                </div>
            </main>
        </section>
    ); 
}