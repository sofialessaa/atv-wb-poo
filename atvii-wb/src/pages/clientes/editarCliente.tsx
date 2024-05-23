import { Component } from 'react';
import { Button } from 'react-bootstrap';
import BarraNavegacao from '../../componentes/barraNavegacao';

export class EditarCliente extends Component {
    render() {
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
                                <label htmlFor="Nome" >Nome:</label>
                                <input type="text" defaultValue="Taylor"/>
                            </div>
                            <div className="field">
                                <label htmlFor="Sobrenome">Sobrenome:</label>
                                <input type="text" defaultValue="Swift"/>
                            </div>
                            <div className="field">
                                <label htmlFor="Social">Nome social:</label>
                                <input type="text" defaultValue="Swift"/>
                            </div>
                            <div className="field">
                                <label htmlFor="Genero">Gênero:</label>
                                <select name="genero" id="genero">
                                    <option>Selecione seu gênero</option>
                                    <option>Feminino</option>
                                    <option>Masculino</option>
                                    <option>Outro</option>
                                </select>
                            </div>
                            <div className="field">
                                <label htmlFor="cpf">CPF:</label>
                                <input type="text" defaultValue="131.313.131-31"/>
                            </div>
                            <div className="field">
                                <label htmlFor="rg">RG:</label>
                                <input type="text" defaultValue="13.131.313-1"/>
                            </div>
                            <div className="field">
                                <label htmlFor="Telefone">Telefone:</label>
                                <input type="text" defaultValue="(12) 99812-3767"/>
                            </div>
                            <div className='button-editar'>
                                <Button className="submit-editar" variant="outline-dark" type='submit'>Editar</Button>{' '}
                                <Button className="submit-editar" variant="outline-dark" href='/clientes'>Voltar</Button>
                            </div>
                        </form>
                    </div>
                </main>
            </section>
        );
    }
}