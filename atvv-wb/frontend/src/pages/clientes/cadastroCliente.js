import { Button } from "react-bootstrap";
import BarraNavegacao from '../../componentes/barraNavegacao';
import '../styles.css';
import InputMask from "react-input-mask";
import axios from "axios";
import * as React from "react";
import { useState } from 'react';

export default function CadastroClientes(props){

    const [nome, setNome] = useState('');
    const [nomeSocial, setNomeSocial] = useState('');
    const [genero, setGenero] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataEmissaoCpf, setDataEmissaoCpf] = useState('');
    const [rg, setRg] = useState('');
    const [dataEmissaoRG, setDataEmissaoRG] = useState('');
    const [UF_RG, setUF_RG] = useState('');
    const [telefone, setTelefone] = useState('');   
    const [email, setEmail] = useState('');   
    
    const cadastrarCliente = async () => {
        try {
            const newData = {
                nome: nome,
                nomeSocial: nomeSocial,
                genero: genero,
                cpf:cpf,
                dataEmissaoCpf:dataEmissaoCpf,
                rg:rg,
                UF_RG:UF_RG,
                dataEmissaoRG:dataEmissaoRG,
                telefone:telefone,
                email:email,
            }; 
            console.log("Adicionando cliente", newData);
            await axios.post('http://localhost:8080/cadastrar_cliente', newData);
            //window.location.reload();
            setNome('')
            setNomeSocial('')
            setGenero('')
            setCpf('')
            setDataEmissaoCpf('')
            setRg('')
            setDataEmissaoRG('')
            setUF_RG('')
            setTelefone('')
            setEmail('')
        } catch (error) {
            console.error("Erro ao adicionar cliente:", error);
        }
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
                            <input type="text" value={nome} onChange={event => setNome(event.target.value)}/>
                        </div>
                        <div className="field">
                            <label htmlFor="Social">Nome social:</label>
                            <input type="text" value={nomeSocial} onChange={event => setNomeSocial(event.target.value)}/>
                        </div>
                        <div className="field">
                            <label htmlFor="Email">Email:</label>
                            <input type="text" value={email} onChange={event => setEmail(event.target.value)} />
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
                        <label htmlFor="telefone">Telefone: adicionar telefone</label>
                        <InputMask
                            mask="(99) 99999-9999"
                            placeholder="(00) 00000-0000"
                            value={telefone}
                            onChange={event => setTelefone(event.target.value)}
                            type="text"
                        />
                        </div>
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
                            <div className="campo-rg">
                                <div className="field">
                                <label htmlFor="rg">RG:</label>
                                <InputMask
                                    mask="99.999.999-9"
                                    placeholder="00.000.000-0"
                                    value={rg}
                                    onChange={event => setRg(event.target.value)}
                                    type="text"
                                />
                                </div>
                                <div className="field">
                                    <label htmlFor="dataEmissaoRG">Data da Emissao-RG:</label>
                                    <InputMask
                                        mask="99/99/9999"
                                        placeholder="__/__/____"
                                        value={dataEmissaoRG}
                                        onChange={event => setDataEmissaoRG(event.target.value)}
                                    />
                                </div>
                                <div className="field">
                                    <label htmlFor="UF">UF do RG:</label>
                                    <input type="text" value={UF_RG} onChange={event => setUF_RG(event.target.value)}/>
                                </div>
                            </div>
                        </form>

                        {/* campo 3 */}
                        <form className="campo-cadastro3">
                            <h1>Cadastrar endereço</h1>
                            <div className="campo1">
                                <div className="field">
                                    <label htmlFor="Estado">Estado:</label>
                                    <input type="text" /* value={UF_RG} onChange={event => setUF_RG(event.target.value)} *//>
                                </div>
                                <div className="field">
                                    <label htmlFor="Cidade">Cidade:</label>
                                    <input type="text" /* value={UF_RG} onChange={event => setUF_RG(event.target.value)} *//>
                                </div>
                                <div className="field">
                                    <label htmlFor="Bairro">Bairro:</label>
                                    <input type="text" /* value={UF_RG} onChange={event => setUF_RG(event.target.value)} *//>
                                </div>
                            </div>
                            <div className="campo2">
                                <div className="field">
                                    <label htmlFor="Rua">Rua:</label>
                                    <input type="text" /* value={UF_RG} onChange={event => setUF_RG(event.target.value)} *//>
                                </div>
                                <div className="field">
                                    <label htmlFor="Número">Número:</label>
                                    <input type="text" /* value={UF_RG} onChange={event => setUF_RG(event.target.value)} *//>
                                </div>
                            </div>
                            <div className="campo3">
                                <div className="field">
                                    <label htmlFor="CEP">Código Postal:</label>
                                    <InputMask
                                    mask="99999-999"
                                    placeholder="00000-000"
                                    /* value={rg}
                                    onChange={event => setRg(event.target.value)} */
                                    type="text"
                                    />
                                </div>
                                <div className="field">
                                    <label htmlFor="Informações adicionais">Informações adicionais:</label>
                                    <input type="text" /* value={UF_RG} onChange={event => setUF_RG(event.target.value)} *//>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </section>
    );
}