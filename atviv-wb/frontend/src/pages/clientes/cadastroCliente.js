import { useState } from 'react';
import { Button } from "react-bootstrap";
import BarraNavegacao from '../../componentes/barraNavegacao';
import '../styles.css';
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom"
import telephone from '../images/telephone.svg'

const dadosCliente = {
    nome: '',
    sobreNome: '', 
    email: '', 
    endereco: { 
        codigoPostal: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        informacoesAdicionais: '',
    },
    telefones: []
}

export default function CadastroClientes(props){
    const navigate = useNavigate()
    
    const [cliente, setCliente] = useState(dadosCliente)

    function adicionarTelefone(){
        const telefones = [...cliente.telefones, { ddd: '', numero: ''} ]
        setCliente({...cliente, telefones})
    }

    function validarCadastro(){
        if(cliente.nome.trim().length === 0) return false
        if(cliente.sobreNome.trim().length === 0) return false
        if(cliente.email.trim().length === 0) return false
        if(cliente.endereco.codigoPostal.trim().length === 0) return false
        if(cliente.endereco.rua.trim().length === 0) return false
        if(cliente.endereco.numero.trim().length === 0) return false
        if(cliente.endereco.bairro.trim().length === 0) return false
        if(cliente.endereco.cidade.trim().length === 0) return false
        if(cliente.endereco.estado.trim().length === 0) return false
        if(cliente.telefones.length === 0) return false

        for (const t of cliente.telefones) {
            if(t.ddd.trim().length === 0) return false;
            if(t.numero.trim().length === 0) return false;
        }

        return true;
    }

    function cadastrar(){
        const isValid = validarCadastro()
        if(!isValid){
            alert('Preencha todos os campos obrigatórios')
            return;
        }

        console.log('Cadastrando cliente:', cliente);

        fetch('http://localhost:32832/cliente/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        }).then(r=> {
            if (r.status === 200) {
                alert('Cliente cadastrado com sucesso!');
                navigate('/');
            } else {
                return r.json().then(data => {
                    alert(`Erro ao cadastrar cliente: ${data.message}`);
                });
            }
        }).catch(error => {
            console.error('Erro ao cadastrar cliente:', error);
            alert('Erro ao cadastrar cliente. Verifique o console para mais detalhes.');
        });
    }

    return (
        <section>
            <header>
                <BarraNavegacao/>
            </header>
            <main>
                <h1>Cadastrar Cliente</h1>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label htmlFor="Nome">Nome:</label>
                            <input type="text" value={cliente.nome} onChange={(e)=> setCliente({...cliente, nome: e.target.value})}/>
                        </div>
                        <div className="field">
                            <label htmlFor="Sobrenome">Sobrenome:</label>
                            <input type="text" value={cliente.sobreNome} onChange={(e)=> setCliente({...cliente, sobreNome: e.target.value})} />
                        </div>
                        <div className="field">
                            <label htmlFor="Email">Email</label>
                            <input type="text" value={cliente.email} onChange={(e)=> setCliente({...cliente, email: e.target.value})} />
                        </div>
                        <div className="field">
                            <label htmlFor="Estado">Estado</label>
                            <input type="text" value={cliente.endereco.estado} onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, estado: e.target.value}})} />
                        </div>
                        <div className="field">
                            <label htmlFor="Cidade">Cidade:</label>
                            <input type="text" value={cliente.endereco.cidade} onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, cidade: e.target.value}})}/>
                        </div>
                        <div className="field">
                            <label htmlFor="Bairro">Bairro:</label>
                            <input type="text" value={cliente.endereco.bairro} onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, bairro: e.target.value}})} />
                        </div>
                        <div className="field">
                            <label htmlFor="Rua">Rua:</label>
                            <input type="text" value={cliente.endereco.rua} onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, rua: e.target.value}})}/>
                        </div>
                        <div className="field">
                            <label htmlFor="Numero">Número:</label>
                            <input type="text" value={cliente.endereco.numero} onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, numero: e.target.value + ''}})}/>
                        </div>
                        <div className="field">
                            <label htmlFor="CEP">Código Postal:</label>
                            <InputMask
                                mask="99999-999"
                                placeholder="00000-000"
                                value={cliente.endereco.codigoPostal}
                                onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, codigoPostal: e.target.value + ''}})}
                                type="text"
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="informacoesAdicionais">Informações Adicionais:</label>
                            <input type="text" value={cliente.endereco.informacoesAdicionais} onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, informacoesAdicionais: e.target.value}})} />
                        </div>
                        <div className="field">
                             <button type="button" className="btn btn-light" onClick={adicionarTelefone}>
                                <img src={telephone} alt="Telefone"></img> Adicionar Telefone
                            </button> 
                        </div>
                        {cliente.telefones.map((telefone, i) => (
                            <div className='campo-telefone' key={i}>
                                <div className="field">
                                <label htmlFor="telefone">Telefone:</label>
                                <InputMask
                                    mask="99"
                                    placeholder="00"
                                    type="text"
                                    value={telefone.ddd} 
                                    onChange={(e)=> {
                                        const telefones = [...cliente.telefones]
                                        telefones[i] = { ...telefones[i], ddd: e.target.value + '' };
                                        setCliente({...cliente, telefones})
                                    }}
                                />
                                </div>
                                <div className="field">
                                <label htmlFor="telefone">Telefone:</label>
                                <InputMask
                                    mask="99999999"
                                    placeholder="00000000"
                                    type="text"
                                    value={telefone.numero} 
                                    onChange={(e)=> {
                                        const telefones = [...cliente.telefones]
                                        telefones[i] = { ...telefones[i], numero: e.target.value + '' };
                                        setCliente({...cliente, telefones})
                                    }}
                                />
                                </div>
                            </div>
                          ))}
                        <Button className="submit" type='button' onClick={cadastrar}>Cadastrar</Button>{' '}
                    </form>
                </div>
            </main>
        </section>
    );
}