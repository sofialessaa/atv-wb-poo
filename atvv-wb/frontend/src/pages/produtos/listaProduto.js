import React from 'react';
import { Table } from 'react-bootstrap';
import BarraNavegacao from '../../componentes/barraNavegacao';
import excluir from "../images/excluir.svg";
import editar from "../images/editar.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function ListaProdutos(props){
    const [chartData, setChartData] = useState([]);
    
    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      try {
        const responseProduto = await axios.get("http://localhost:8080/produtos");
        const dataProduto = responseProduto.data;

        const processedData = dataProduto.map((itemProduto) => ({
          ...itemProduto,
          preco: typeof itemProduto.preco === 'number' ? itemProduto.preco : parseFloat(itemProduto.preco)
        }));
  
        setChartData(processedData);
        console.log(processedData);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    const deletarProduto = async (id) => {
        try {
            
            setChartData(chartData.filter(produto => produto.id !== id));
            await axios.delete(`http://localhost:8080/produtos/${id}`);
            console.log("Produto Deletado!")

        } catch (error) {
          console.error("Erro ao apagar produto:", error);
        }
    };

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
                        {chartData.map((produto, index) => (
                            <tr key={produto.id}>
                            <td>{index + 1}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.preco}</td>
                            <td>
                                <Link to={`/editar_produto/${produto.id}`}><img src={editar} alt="Editar"/></Link>
                            </td>
                            <td>
                                <img src={excluir} alt="Excluir" onClick={() => deletarProduto(produto.id)}/>
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