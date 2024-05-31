import React from 'react';
import { Table } from 'react-bootstrap';
import BarraNavegacao from '../../componentes/barraNavegacao';
import excluir from "../images/excluir.svg";
import editar from "../images/editar.svg";
import axios from "axios";
import { useEffect, useState/* , useNavigate */ } from "react";

export default function ListaProdutos(props){
    const [chartData, setChartData] = useState([]);
   /*  const [selecionado, setSelecionado] = useState('');  
    const navigate = useNavigate(); */
    
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

/*      const editarProduto = (id) => 
      {
        setSelecionado(id)
        navigate(`/atualizar/${selecionado}`);
      };  */

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
                            <td>{`R$ ${produto.preco.toFixed(2)}`}</td>
                            <td>
                                <img src={editar} alt="Editar" /* onClick={editarProduto(produto.id)} *//>
                            </td>
                            <td>
                                <a href="##">
                                    <img src={excluir} alt="Excluir" onClick={() => deletarProduto(produto.id)}/>
                                </a>
                            </td>
                            </tr>
                        ))}

{/*                             <tr>
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
                            </tr> */}
                        </tbody>
                    </Table>
                </div>
            </main>
        </section>
    );
}