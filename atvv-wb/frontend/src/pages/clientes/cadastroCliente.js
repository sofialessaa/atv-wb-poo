import { Button, FormLabel } from "react-bootstrap";
import BarraNavegacao from '../../componentes/barraNavegacao';
import '../styles.css';
import InputMask from "react-input-mask";
import axios from "axios";
import * as React from "react";
import { useState } from 'react';
import telephone from '../images/telephone.svg'
import trash from '../images/trash.svg'

export default function CadastroClientes(props){

    const [dadosRG, setDadosRG] = useState([{ rg: '', uf_rg: '', dataEmissaoRG: '' }]);
    const [nome, setNome] = useState('');
    const [nomeSocial, setNomeSocial] = useState('');
    const [genero, setGenero] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataEmissaoCpf, setDataEmissaoCpf] = useState('');
    const [telefones, setTelefones] = useState([]);   
    const [email, setEmail] = useState('');   
    const [estado, setEstado] = useState('');   
    const [cidade, setCidade] = useState('');   
    const [bairro, setBairro] = useState('');   
    const [rua, setRua] = useState('');   
    const [numero, setNumero] = useState('');   
    const [cep, setCep] = useState('');   
    const [informacoes_adicionais, setInformacoes] = useState('');   

    function validarCadastro(){
        if(nome.trim().length === 0) return false
        if(nomeSocial.trim().length === 0) return false
        if(genero.trim().length === 0) return false
        if(cpf.trim().length === 0) return false
        if(dataEmissaoCpf.trim().length === 0) return false
        if(email.trim().length === 0) return false
        if(estado.trim().length === 0) return false
        if(cidade.trim().length === 0) return false
        if(bairro.trim().length === 0) return false
        if(rua.trim().length === 0) return false
        if(numero.trim().length === 0) return false
        if(cep.trim().length === 0) return false
        if(informacoes_adicionais.trim().length === 0) return false
        if (telefones.some(telefone => telefone.trim().length === 0)) return false;
        if (dadosRG.length === 0 || dadosRG.some(dado => dado.rg.trim().length === 0 || dado.uf_rg.trim().length === 0 || dado.dataEmissaoRG.trim().length === 0)) return false;
        return true;
    }
    
    const cadastrarCliente = async () => {
        const isValid = validarCadastro()
        if(!isValid){
            alert('Preencha todos os campos obrigatórios')
            return;
        }
        try {
            const newData = {
                nome: nome,
                nomeSocial: nomeSocial,
                genero: genero,
                cpf:cpf,
                dataEmissaoCpf:dataEmissaoCpf,
                email:email,
                estado:estado,
                cidade:cidade,
                bairro:bairro,
                rua:rua,
                numero:numero,
                cep:cep,
                informacoes_adicionais:informacoes_adicionais,
            }; 

            console.log("Adicionando cliente", newData);
            await axios.post('http://localhost:8080/cadastrar_cliente', newData);

            const responseCliente = await axios.get("http://localhost:8080/clientes");
            const dataCliente = responseCliente.data;
            let id_cliente = dataCliente.length;
            console.log(dataCliente.length)

            for (let telefone of telefones){
                const newDataTelefone = {
                    id_cliente: id_cliente,
                    telefone: telefone,
                }
                await axios.post('http://localhost:8080/cadastrar_telefone', newDataTelefone);
            }

            for (let item of dadosRG) {
                const newDataDadosRG = {
                    id_cliente: id_cliente,
                    rg: item.rg,
                    uf_rg: item.uf_rg,
                    dataEmissaoRG: item.dataEmissaoRG,
                };
                try {
                    await axios.post('http://localhost:8080/cadastrar_dadosRG', newDataDadosRG);
                } catch (error) {
                    console.error('Erro ao cadastrar RG:', error);
                }
            }
            //window.location.reload();
            setNome('')
            setNomeSocial('')
            setGenero('')
            setCpf('')
            setDataEmissaoCpf('')
            setDadosRG([])
            setTelefones([])
            setEmail('')
            setEstado('')
            setCidade('')
            setBairro('')
            setRua('')
            setNumero('')
            setCep('')
            setInformacoes('')
        } catch (error) {
            console.error("Erro ao adicionar cliente:", error);
        }
    };

     const adicionarTelefone = (e) => {
        e.preventDefault();
        setTelefones([...telefones, ""]);
    };

     const handleChangeTelefone = (e, index) => {
        telefones[index] = e.target.value;
        setTelefones([...telefones]);
    };
    
    const removerTelefone = (position) => {
        setTelefones([...telefones.filter((_, index)=> index !== position)]);
    }; 

    const adicionarDadosRgs = (e) => {
        e.preventDefault();
        setDadosRG([...dadosRG, { rg: '', uf_rg: '', dataEmissaoRG: '' }]);
    };    

    const handleChangeDadosRgs = (e, index) => {
        const { name, value } = e.target;
        const updatedDadosRG = [...dadosRG];
        updatedDadosRG[index][name] = value;
        setDadosRG(updatedDadosRG);
    };    
    
    const removerDadosRgs = (index) => {
        index = 1;
        const updatedDadosRG = dadosRG.filter((_, i) => i !== index);
        setDadosRG(updatedDadosRG);
    };    

    return (
        <section>
            <header>
                <BarraNavegacao/>
            </header>
            <main>
                <div className="forms">
                    <form className="campo-cadastro1">
                        <h1>Cadastrar Cliente</h1>
                        <div className="field">
                            <label htmlFor="Nome">Nome completo:</label>
                            <input type="text" value={nome} onChange={event => setNome(event.target.value)} placeholder="Digite seu nome completo"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Social">Nome social:</label>
                            <input type="text" value={nomeSocial} onChange={event => setNomeSocial(event.target.value)} placeholder="Digite seu nome social"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Email">Email:</label>
                            <input type="text" value={email} onChange={event => setEmail(event.target.value)} placeholder="Digite seu email"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Genero">Gênero:</label>
                            <select name="genero" id="genero" value={genero} onChange={event => setGenero(event.target.value)}>
                                <option>- Selecione seu gênero -</option>
                                <option>Feminino</option>
                                <option>Masculino</option>
                                <option>Outro</option>
                            </select>
                        </div>
                        <div className="field">
                             <button type="button" class="btn btn-light" onClick={adicionarTelefone}>
                                <img src={telephone} alt="Telefone"></img> Adicionar Telefone
                            </button> 
                        </div>
                        {
                            telefones.map((telefone, index) => (
                                <div className="field" key={index}>
                                    <FormLabel for={`telefone-${index+1}`}>{`Telefone ${index+1}:`}</FormLabel>
                                    <div className="telefone">
                                        <InputMask
                                            type="text"
                                            mask="(99) 99999-9999"
                                            id={`telefone-${index+1}`}
                                            placeholder="(00) 00000-0000"
                                            value={telefone}
                                            onChange={(e) => handleChangeTelefone(e, index)}
                                        />
                                        <button type="button" class="btn btn-light" onClick={() => {removerTelefone(index)}}>
                                            <img src={trash} alt="Lixo"></img>
                                        </button>
                                    </div>
                                </div>
                            ))
                        } 
                        <Button className="submit" type='button' onClick={cadastrarCliente}>Cadastrar</Button>{' '}
                    </form>
                    <div className="campo-direita">
                        {/* campo 2 */}
                        <form className="campo-cadastro2">
                            <h1>Cadastrar dados pessoais</h1>
                            <div className="campo-cpf">
                                <div className="field">
                                <label htmlFor="cpf">CPF:</label>
                                <InputMask
                                    mask="999.999.999-99"
                                    placeholder="000.000.000-00"
                                    value={cpf}
                                    onChange={event => setCpf(event.target.value)}
                                    type="text"
                                />
                                </div>
                                <div className="field">
                                    <label htmlFor="dataEmissaoCPF">Data da Emissao-CPF:</label>
                                    <InputMask
                                        mask="99/99/9999"
                                        placeholder="__/__/____"
                                        value={dataEmissaoCpf}
                                        onChange={event => setDataEmissaoCpf(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <button type="button" class="btn btn-light" onClick={adicionarDadosRgs}> Adicionar Dados do(s) RG(s)</button> 
                            </div>
                                {dadosRG.map((item, index) => (
                                    <div className="campo-rg" key={index}>
                                        <div className="field">
                                            <label htmlFor="rg">RG:</label>
                                            <InputMask
                                                mask="99.999.999-9"
                                                placeholder="00.000.000-0"
                                                type="text"
                                                name="rg"
                                                value={item.rg}
                                                onChange={(e) => handleChangeDadosRgs(e, index)}
                                            />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="dataEmissaoRG">Data da Emissao-RG:</label>
                                            <InputMask
                                                mask="99/99/9999"
                                                placeholder="__/__/____"
                                                name="dataEmissaoRG"
                                                value={item.dataEmissaoRG}
                                                onChange={(e) => handleChangeDadosRgs(e, index)}
                                            />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="uf_rg">UF do RG:</label>
                                            <input
                                                type="text"
                                                placeholder="Informe a UF do RG"
                                                name="uf_rg"
                                                value={item.uf_rg}
                                                onChange={(e) => handleChangeDadosRgs(e, index)}
                                            />
                                        </div>
                                        <button type="button" className="btn btn-light" onClick={() => removerDadosRgs(index)}>
                                            <img src={trash} alt="Lixo" />
                                        </button>
                                    </div>
                                ))}
                        </form>

                        {/* campo 3 */}
                        <form className="campo-cadastro3">
                            <h1>Cadastrar endereço</h1>
                            <div className="campo1">
                                <div className="field">
                                    <label htmlFor="Estado">Estado:</label>
                                    <input type="text" value={estado} onChange={event => setEstado(event.target.value)} placeholder="Informe seu estado"/>
                                </div>
                                <div className="field">
                                    <label htmlFor="Cidade">Cidade:</label>
                                    <input type="text" value={cidade} onChange={event => setCidade(event.target.value)} placeholder="Informe sua cidade"/>
                                </div>
                                <div className="field">
                                    <label htmlFor="Bairro">Bairro:</label>
                                    <input type="text" value={bairro} onChange={event => setBairro(event.target.value)} placeholder="Informe seu bairro"/>
                                </div>
                            </div>
                            <div className="campo2">
                                <div className="field">
                                    <label htmlFor="Rua">Rua:</label>
                                    <input type="text" value={rua} onChange={event => setRua(event.target.value)}placeholder="Informe sua rua"/>
                                </div>
                                <div className="field">
                                    <label htmlFor="Número">Número:</label>
                                    <input type="text" value={numero} onChange={event => setNumero(event.target.value)} placeholder="Informe seu número"/>
                                </div>
                            </div>
                            <div className="campo3">
                                <div className="field">
                                    <label htmlFor="CEP">Código Postal:</label>
                                    <InputMask
                                    mask="99999-999"
                                    placeholder="00000-000"
                                    value={cep}
                                    onChange={event => setCep(event.target.value)}
                                    type="text"
                                    />
                                </div>
                                <div className="field">
                                    <label htmlFor="Informações adicionais">Informações adicionais:</label>
                                    <input type="text" value={informacoes_adicionais} onChange={event => setInformacoes(event.target.value)} placeholder="Digite as informações adicionais "/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </section>
    );
}