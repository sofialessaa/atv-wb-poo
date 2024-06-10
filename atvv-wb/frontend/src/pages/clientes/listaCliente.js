import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import BarraNavegacao from '../../componentes/barraNavegacao';
import '../styles.css';
import excluir from "../images/excluir.svg";
import editar from "../images/editar.svg";
import axios from "axios";
import Modal from '../modals/modal';

export default function ListaClientes(props) {
    const [chartData, setChartData] = useState([]);
    const [chartDataTelefone, setChartDataTelefone] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [clienteSelecionado, setClienteSelecionado] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const responseCliente = await axios.get("http://localhost:8080/clientes");
            const dataCliente = responseCliente.data;

            const responseTelefone = await axios.get("http://localhost:8080/telefones");
            const dataTelefone = responseTelefone.data;
            console.log(dataTelefone);

            setChartDataTelefone(dataTelefone);

            setChartData(dataCliente);
            console.log(dataCliente);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    };

    const deletarCliente = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/clientes/${id}`);
            setChartData(chartData.filter(cliente => cliente.id !== id));
            console.log("Cliente Deletado!");
        } catch (error) {
            console.error("Erro ao apagar cliente:", error);
        }
    };

    const acessarCliente = (cliente) => {
        setClienteSelecionado(cliente);
        setOpenModal(true);
    };

/*     const editarCliente = async (id) => {
        try {
            await axios.put(`http://localhost:8080/editar_cliente/${id}`);
            setChartData(chartData.filter(cliente => cliente.id !== id));
            console.log("Cliente Deletado!");
        } catch (error) {
            console.error("Erro ao apagar cliente:", error);
        }
    }; */

    return (
        <section>
            <header>
                <BarraNavegacao/>
            </header>
            <main>
                <h1>Clientes</h1>
                <div className='tables'>
                    <Table className="table">
                        <thead className='table-light'>
                            <tr>
                                <td>ID</td>
                                <td>Nome</td>
                                <td>Nome Social</td>
                                <td>Gênero</td>
                                <td>Email</td>
                                <td>Dados Pessoais</td>
                                <td>Telefone(s)</td>
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
                                    <td>{cliente.email}</td>
                                    <td>
                                        <Button variant="light" onClick={() => acessarCliente(cliente)}>Acessar</Button>{" "}
                                    </td>
                                    <td>
                                        {chartDataTelefone.map((telefones, index) => {
                                            if (cliente.id /* eslint-disable eqeqeq */== telefones.id_cliente) {
                                                return <div key={index}>{telefones.telefone}<br /></div>;
                                            }
                                            return null;
                                        })}
                                    </td>
                                    <td>
                                        <a href="##">
                                            <img src={editar} alt="Editar" /* onClick={() => editarCliente(cliente.id)} *//>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="##">
                                            <img src={excluir} alt="Excluir" onClick={() => deletarCliente(cliente.id)}/>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </main>
            <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}> 
                <div className="container-modal">
                    <div className="title-modal">Dados Pessoais: {/* {clienteSelecionado.nome} */}</div>
                    <div className="content-modal"> 
                        {clienteSelecionado && (
                            <div>
                                <Table className="table table-bordered">
                                    <thead>
                                        <tr class="table-primary">
                                            <th scope="col">CPF</th>
                                            <th scope="col">Data de Emissão-CPF</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr key={clienteSelecionado.id}>
                                            <th scope="row">{clienteSelecionado.cpf}</th>
                                            <td>{clienteSelecionado.dataEmissaoCpf}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Table className="table table-bordered">
                                    <thead>
                                        <tr class="table-primary">
                                            <th scope="col">RG</th>
                                            <th scope="col">UF-RG</th>
                                            <th scope="col">Data de Emissão-RG</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr key={clienteSelecionado.id}>
                                            <td>{clienteSelecionado.rg}</td>
                                            <td>{clienteSelecionado.uf_rg}</td>
                                            <td>{clienteSelecionado.dataEmissaoRG}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Table className="table table-bordered">
                                    <thead>
                                        <tr class="table-secondary">
                                            <th scope="col">Estado</th>
                                            <th scope="col">Cidade</th>
                                            <th scope="col">Bairro</th>
                                            <th scope="col">Rua</th>
                                            <th scope="col">Número</th>
                                            <th scope="col">Código Postal</th>
                                            <th scope="col">Informações Adicionais</th>
                                        </tr> 
                                    </thead>
                                    <tbody>
                                        <tr key={clienteSelecionado.id}>
                                            <td>{clienteSelecionado.estado}</td>
                                            <td>{clienteSelecionado.cidade}</td>
                                            <td>{clienteSelecionado.bairro}</td>
                                            <td>{clienteSelecionado.rua}</td>
                                            <td>{clienteSelecionado.numero}</td>
                                            <td>{clienteSelecionado.cep}</td>
                                            <td>{clienteSelecionado.informacoes_adicionais}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        )}
                    </div>
                </div>      
            </Modal> 
        </section>
    );
}