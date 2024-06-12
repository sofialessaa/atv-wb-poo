import React, { useEffect, useState } from 'react';
import { Button, FormLabel } from 'react-bootstrap';
import '../styles.css'
import BarraNavegacao from '../../componentes/barraNavegacao';
import axios from "axios"; 
import { useParams } from 'react-router-dom';
import InputMask from "react-input-mask";

export default function EditarCliente(props){
    const { id } = useParams();
    const { id_cliente, setId_cliente } = useState('');
    const [cliente, setCliente] = useState([]);
    const [rgs, setRgs] = useState([]);
    const [telefones, setTelefones] = useState([]);

    const [nome, setNome] = useState('');
    const [nomeSocial, setNomeSocial] = useState('');
    const [genero, setGenero] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataEmissaoCpf, setDataEmissaoCpf] = useState('');  
    const [email, setEmail] = useState('');   
    const [estado, setEstado] = useState('');   
    const [cidade, setCidade] = useState('');   
    const [bairro, setBairro] = useState('');   
    const [rua, setRua] = useState('');   
    const [numero, setNumero] = useState('');   
    const [cep, setCep] = useState('');   
    const [informacoes_adicionais, setInformacoes] = useState(''); 
    const [rg, setRg] = useState('');
    const [uf_rg, setUf_rg] = useState('');
    const [dataEmissaoRG, setDataEmissaoRg] = useState('');
    const [telefone, setTelefone] = useState('');

    useEffect(() => {
        fetchData(id);
        fetch(`http://localhost:8080/clientes/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCliente(data)
                setNome(data.nome)
                setNomeSocial(data.nomeSocial)
                setGenero(data.genero)
                setCpf(data.cpf)
                setDataEmissaoCpf(data.dataEmissaoCpf)
                setEmail(data.email)
                setEstado(data.estado)
                setCidade(data.cidade)
                setBairro(data.bairro)
                setRua(data.rua)
                setNumero(data.numero)
                setCep(data.cep)
                setInformacoes(data.informacoes_adicionais)
            })
            .catch((err) => console.log)
    }, [id]);

    const fetchData = async (id) => {
        console.log('id', id)
        try {
            const responseTelefone = await axios.get(`http://localhost:8080/telefones/${id}`);
            const dataTelefone = responseTelefone.data;
            console.log(dataTelefone);

            setTelefones(dataTelefone);

            const responseDadosRG = await axios.get(`http://localhost:8080/rgs/${id}`);
            const dataDadosRG = responseDadosRG.data;
            console.log(dataDadosRG);

            setRgs(dataDadosRG);

        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    };


    const editarCliente = async () => {
        console.log(cliente.id, rgs.id_cliente, telefones.id_cliente)
        try{
            const newData = {
                id: id,
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
            }
            await axios.put('http://localhost:8080/editar_cliente', newData)
            
            for(let telefone of telefones){
                const newDataTelefone = {
                    id:telefone.id,
                    telefone: telefone.telefone,
                }
                await axios.put('http://localhost:8080/editar_telefones', newDataTelefone)
            }

            for(let rg of rgs) {
                const newDataRg = {
                    id:rg.id,
                    rg: rg.rg,
                    uf_rg: rg.uf_rg,
                    dataEmissaoRG: rg.dataEmissaoRG,
                }
                await axios.put('http://localhost:8080/editar_rgs', newDataRg)
            }
        }catch (error) {
            console.error("Erro ao editar cliente:", error);
        }
    };


    const editarTelefone = (e, index) => {
        const { name, value } = e.target;
        const atualizarTelefone = [...telefones];
        atualizarTelefone[index] = {
            ...atualizarTelefone[index], 
            [name]: value 
        };
        setTelefones(atualizarTelefone);
        console.log('TELEFONE EDITAR', atualizarTelefone)
    };

    const editarRg = (e, index) => {
        const { name, value } = e.target;
        const atualizarRg = [...rgs];
        atualizarRg[index][name]= value;

        setRgs(atualizarRg);
        console.log('RG EDITAR', atualizarRg)
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
                            <input type="text" value={nome} onChange={event => setNome(event.target.value)} placeholder={cliente.nome}/>
                        </div>
                        <div className="field">
                            <label htmlFor="Social">Nome social:</label>
                            <input type="text" value={nomeSocial} onChange={event => setNomeSocial(event.target.value)} placeholder={cliente.nomeSocial}/>
                        </div>
                        <div className="field">
                            <label htmlFor="Email">Email:</label>
                            <input type="text" value={email} onChange={event => setEmail(event.target.value)} placeholder={cliente.email}/>
                        </div>
                        <div className="field">
                            <label htmlFor="Genero">Gênero:</label>
                            <select name="genero" id="genero" value={genero} onChange={event => setGenero(event.target.value)} placeholder={cliente.genero}>
                                <option>- Selecione seu gênero -</option>
                                <option>Feminino</option>
                                <option>Masculino</option>
                                <option>Outro</option>
                            </select>
                        </div>
                        {console.log('telefones', telefones)}
                        {
                            telefones.map((telefone, index) => (
                                <div className="field" key={index}>
                                    <FormLabel for={`telefone-${index+1}`}>{`Telefone ${index+1}:`}</FormLabel>
                                    <div className="telefone">
                                        <InputMask
                                            type="text"
                                            mask="(99) 99999-9999"
                                            id={`telefone-${index+1}`}
                                            placeholder={telefones.telefone}
                                            name='telefone'
                                            value={telefone.telefone}
                                            onChange={(e) => editarTelefone(e, index)}
                                        />
                                    </div>
                                </div>
                            ))
                        } 
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
                                    placeholder={cliente.cpf}
                                    value={cpf}
                                    onChange={event => setCpf(event.target.value)}
                                    type="text"
                                />
                                </div>
                                <div className="field">
                                    <label htmlFor="dataEmissaoCPF">Data da Emissao-CPF:</label>
                                    <InputMask
                                        mask="99/99/9999"
                                        placeholder={cliente.dataEmissaoCpf}
                                        value={dataEmissaoCpf}
                                        onChange={event => setDataEmissaoCpf(event.target.value)}
                                    />
                                </div>
                            </div>
                            {console.log('rgs',rgs)}
                                {rgs.map((rg, index) => (
                                    <div className="campo-rg" key={index}>
                                        <div className="field">
                                            <label htmlFor="rg">RG:</label>
                                            <InputMask
                                                mask="99.999.999-9"
                                                placeholder={rgs.rg}
                                                type="text"
                                                name="rg"
                                                value={rg.rg}
                                                onChange={(e) => editarRg(e, index)}
                                            />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="dataEmissaoRG">Data da Emissao-RG:</label>
                                            <InputMask
                                                mask="99/99/9999"
                                                placeholder={rgs.dataEmissaoRG}
                                                name="dataEmissaoRG"
                                                value={rg.dataEmissaoRG}
                                                onChange={(e) => editarRg(e, index)}
                                            />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="uf_rg">UF do RG:</label>
                                            <input
                                                type="text"
                                                placeholder={rgs.uf_rg}
                                                name="uf_rg"
                                                value={rg.uf_rg}
                                                onChange={(e) => editarRg(e, index)}
                                            />
                                        </div>
                                    </div>
                                ))}
                        </form>

                        {/* campo 3 */}
                        <form className="campo-cadastro3">
                            <h1>Cadastrar endereço</h1>
                            <div className="campo1">
                                <div className="field">
                                    <label htmlFor="Estado">Estado:</label>
                                    <input type="text" value={estado} onChange={event => setEstado(event.target.value)} placeholder={cliente.estado}/>
                                </div>
                                <div className="field">
                                    <label htmlFor="Cidade">Cidade:</label>
                                    <input type="text" value={cidade} onChange={event => setCidade(event.target.value)} placeholder={cliente.cidade}/>
                                </div>
                                <div className="field">
                                    <label htmlFor="Bairro">Bairro:</label>
                                    <input type="text" value={bairro} onChange={event => setBairro(event.target.value)} placeholder={cliente.bairro}/>
                                </div>
                            </div>
                            <div className="campo2">
                                <div className="field">
                                    <label htmlFor="Rua">Rua:</label>
                                    <input type="text" value={rua} onChange={event => setRua(event.target.value)}placeholder={cliente.rua}/>
                                </div>
                                <div className="field">
                                    <label htmlFor="Número">Número:</label>
                                    <input type="text" value={numero} onChange={event => setNumero(event.target.value)} placeholder={cliente.numero}/>
                                </div>
                            </div>
                            <div className="campo3">
                                <div className="field">
                                    <label htmlFor="CEP">Código Postal:</label>
                                    <InputMask
                                    mask="99999-999"
                                    placeholder={cliente.cep}
                                    value={cep}
                                    onChange={event => setCep(event.target.value)}
                                    type="text"
                                    />
                                </div>
                                <div className="field">
                                    <label htmlFor="Informações adicionais">Informações adicionais:</label>
                                    <input type="text" value={informacoes_adicionais} onChange={event => setInformacoes(event.target.value)} placeholder={cliente.informacoes_adicionais}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='button-editar'>
                    <Button className="submit-editar" type='button' onClick={editarCliente}  href='/' >Editar</Button>{' '}
                    <Button className="submit-editar" href='/'>Voltar</Button>
                </div>
            </main>
        </section>
    );
}