import React, { useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import BarraNavegacao from "../../componentes/barraNavegacao";
import InputMask from "react-input-mask";
import axios from "axios";

export default function ComprarServicos(props) {

    const [servico, setServico] = useState([]);
    const [nomeServico, setNomeServico] = useState('');
    const [preco, setPreco] = useState('');

    const [nomeCliente, setNomeCliente] = useState('');
    const [cpfDigitado, setCpfDigitado] = useState('');
    const [cliente, setCliente] = useState(null); 

    useEffect(() => {
        fetch(`http://localhost:8080/servicos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setServico(data)
            setPreco(data.preco)
            console.log(data.preco)
        })
        .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        if (cpfDigitado) {
            fetch(`http://localhost:8080/clientes/cpf/${cpfDigitado}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((resp) => resp.json())
            .then((data) => {
                setCliente(data.cpf)
                setNomeCliente(data.nome)
                console.log(data.nome)
            })
            .catch((err) => console.error(err));
        }
    }, [cpfDigitado]);

    const handleCpfChange = (event) => {
        setCpfDigitado(event.target.value);
    };

    const handleSubmit = async (event) => {
        console.log(cliente)
        console.log('ALERTAAAA', cpfDigitado)
        event.preventDefault();
        if (cpfDigitado !== null && cpfDigitado === cliente) {
            cadastrarConsumoServico();
            console.log("Compra realizada com sucesso!");
        } else {
            alert("CPF não encontrado. Por favor, verifique o CPF digitado.")
            console.log("CPF não encontrado. Por favor, verifique o CPF digitado.");
        }
    };

    const cadastrarConsumoServico = async () => {
        try {
            const newData = {
                nome: nomeCliente,
                cpf: cpfDigitado,
                servico: nomeServico,
                preco: preco,
            }; 
            console.log("Adicionando servico", newData);
            await axios.post('http://localhost:8080/cadastrar_consumo_servico', newData);
            setNomeServico('')
            setPreco('')
            setNomeCliente('')
            setCpfDigitado('')
        } catch (error) {
            console.error("Erro ao adicionar servico:", error);
        }
    };

    return (
        <section>
            <header>
                <BarraNavegacao />
            </header>
            <main>
                <h1>Comprar Serviço</h1>
                <div className="forms">
                    <form className="form-padrao" onSubmit={handleSubmit}>
                        <div className="field">
                            <label htmlFor="cpf">CPF de quem irá realizar a compra:</label>
                            <InputMask
                                mask="999.999.999-99"
                                placeholder="000.000.000-00"
                                type="text"
                                value={cpfDigitado}
                                onChange={handleCpfChange}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="servico">Selecione um serviço:</label>
                            <select value={nomeServico} onChange={(event) => {
                                const selectOption = event.target.selectedOptions[0];
                                setNomeServico(selectOption.getAttribute("value"));
                                setPreco(selectOption.getAttribute("data-valor"));}}>
                                <option value="">- Selecione um serviço -</option>
                                {servico.map((servico) => (
                                    <option key={servico.id} value={servico.nome} data-valor={servico.preco}>{servico.nome}</option>
                                ))}
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="Valor">Valor da compra:</label>
                            <input type="text" value={preco} readOnly="true"/>
                        </div> 
                        <Button className="submit" type="submit" onClick={handleSubmit}>Comprar</Button>{" "}
                    </form>
                </div>
            </main>
        </section>
    );
}