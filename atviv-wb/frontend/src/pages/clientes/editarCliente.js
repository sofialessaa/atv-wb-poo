import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../styles.css'
import BarraNavegacao from '../../componentes/barraNavegacao';
import InputMask from "react-input-mask";
import { useLocation, useNavigate } from "react-router-dom";

export default function EditarCliente(props){
    const location = useLocation();
    const navigate = useNavigate()
    const [cliente, setCliente] = useState(location.state);
    if(!location.state){
        navigate('/')
        return <></>
    }

    function carregarCliente(){
        fetch(`http://localhost:32832/clientes`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(r=> r.json()).then(r=>{
            setCliente(r);
            console.log('dados',r);
        }).catch(error => {
            console.error('Erro ao buscar cliente:', error);
        });
    }

    function editarCliente(){
        fetch(`http://localhost:32832/cliente/atualizar`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        }).then(r=> {
            if (r.status === 200) {
                alert('Cliente atualizado com sucesso!');
                carregarCliente();
            } else {
                alert('Erro ao atualizar cliente.');
            }
        }).catch(error => {
            console.error('Erro ao atualizar cliente:', error);
        });
    }

    return (
        <section>
            <header>
                <BarraNavegacao/>
            </header>
            <main>
                <h1>Editar Cliente</h1>
                <div className="forms">
                    <form>
                    <div className="field">
                            <label htmlFor="Nome">Nome:</label>
                            <input type="text" value={cliente.nome}  onChange={(e)=> setCliente({...cliente, nome: e.target.value})} />
                        </div>
                        <div className="field">
                            <label htmlFor="Sobrenome">Sobrenome:</label>
                            <input type="text" value={cliente.sobreNome}  onChange={(e)=> setCliente({...cliente, sobreNome: e.target.value})} />
                        </div>
                        <div className="field">
                            <label htmlFor="Email">Email</label>
                            <input type="text" value={cliente.email}  onChange={(e)=> setCliente({...cliente, email: e.target.value})} />
                        </div>
                        <div className="field">
                            <label htmlFor="Estado">Estado</label>
                            <input type="text" value={cliente.endereco.estado}  onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, estado: e.target.value}})}/>
                        </div>
                        <div className="field">
                            <label htmlFor="Cidade">Cidade:</label>
                            <input type="text" value={cliente.endereco.cidade} onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, cidade: e.target.value}})} />
                        </div>
                        <div className="field">
                            <label htmlFor="Bairro">Bairro:</label>
                            <input type="text" value={cliente.endereco.bairro}  onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, bairro: e.target.value}})} />
                        </div>
                        <div className="field">
                            <label htmlFor="Rua">Rua:</label>
                            <input type="text" value={cliente.endereco.rua}  onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, rua: e.target.value}})} />
                        </div>
                        <div className="field">
                            <label htmlFor="Numero">Número:</label>
                            <input type="text" value={cliente.endereco.numero}  onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, numero: e.target.value}})} />
                        </div>
                        <div className="field">
                            <label htmlFor="codigoPostal">Código Postal:</label>
                            <InputMask
                                mask="99999-999"
                                value={cliente.endereco.codigoPostal}
                                onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, codigoPostal: e.target.value}})}
                                type="text"
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="informacoesAdicionais">Informações Adicionais:</label>
                            <input type="text" value={cliente.endereco.informacoesAdicionais}  onChange={(e)=> setCliente({...cliente, endereco: { ...cliente.endereco, informacoesAdicionais: e.target.value}})} />
                        </div>
                        {cliente.telefones.map((telefone, i) => (
                            <div className='campo-telefone' key={i}>
                                <div className="field">
                                <label htmlFor="telefone">DDD:</label>
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
                        <div className='button-editar'>
                            <Button type='button' className="submit-editar" onClick={editarCliente} href='/clientes'>Editar</Button>
                            <Button className="submit-editar" href='/'>Voltar</Button>
                        </div>
                    </form>
                </div>
            </main>
        </section>
    );
}