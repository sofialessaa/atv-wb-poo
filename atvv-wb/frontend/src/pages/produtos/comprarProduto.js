import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from "react-bootstrap";
import BarraNavegacao from "../../componentes/barraNavegacao";
import InputMask from "react-input-mask";
import axios from "axios";

export default function ComprarProdutos(props){
    const [produto, setProduto] = useState([]);
    const [nomeProduto, setNomeProduto] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [preco, setPreco] = useState('');
    const [precoTotal, setPrecoTotal] = useState('');
    
    const [nomeCliente, setNomeCliente] = useState('');
    const [cpfDigitado, setCpfDigitado] = useState('');
    const [cliente, setCliente] = useState(null); 
    
    useEffect(() => {
        fetch(`http://localhost:8080/produtos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProduto(data)
            })
            .catch((err) => console.log)
    }, []);

    useEffect(() => {
        setPrecoTotal(quantidade*preco)
    }, [quantidade, preco])

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
            cadastrarConsumoProduto();
            console.log("Compra realizada com sucesso!");
        } else {
            alert("CPF não encontrado. Por favor, verifique o CPF digitado.")
            console.log("CPF não encontrado. Por favor, verifique o CPF digitado.");
        }
    };

    const cadastrarConsumoProduto = async () => {
        try {
            const newData = {
                nome: nomeCliente,
                cpf: cpfDigitado,
                produto: nomeProduto,
                quantidade: quantidade,
                preco: precoTotal,
            }; 
            console.log("Adicionando produto", newData);
            await axios.post('http://localhost:8080/cadastrar_consumo_produto', newData);
            setNomeProduto('')
            setPreco('')
            setQuantidade('')
            setNomeCliente('')
            setCpfDigitado('')
        } catch (error) {
            console.error("Erro ao adicionar produto:", error);
        }
    };

    return (
        <section>
            <header>
                <BarraNavegacao />
            </header>
            <main>
                <h1>Comprar Produto</h1>
                <div className="forms">
                    <form className="form-padrao">
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
                            <label htmlFor="produto">Selecione um produto:</label>
                            <select value={nomeProduto} onChange={(event) => {
                                const selectOption = event.target.selectedOptions[0];
                                setNomeProduto(selectOption.getAttribute("value"));
                                setPreco(selectOption.getAttribute("data-valor"));}}>
                                <option value="">- Selecione um produto -</option>
                                {produto.map((produto) => (
                                    <option key={produto.id} value={produto.nome} data-valor={produto.preco}>{produto.nome}</option>
                                ))}
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="Genero">Quantidade:</label>
                            <select name="genero" id="genero" value={quantidade} onChange={event => setQuantidade(event.target.value)}>
                                <option>- Selecione a quantidade -</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="Valor">Valor da compra:</label>
                            <input type="text" value={precoTotal} readOnly="true"/>
                        </div> 
                        <Button className="submit" type="submit" onClick={handleSubmit}>Comprar</Button>{" "}
                    </form>
                </div>
            </main>
        </section>
    );
}