import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles.css'
import BarraNavegacao from '../../componentes/barraNavegacao';

export default function EditarCliente(props){
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
                            <input type="text" />
                        </div>
                        <div className="field">
                            <label htmlFor="Sobrenome">Sobrenome:</label>
                            <input type="text" />
                        </div>
                        <div className="field">
                            <label htmlFor="Social">Nome social:</label>
                            <input type="text" />
                        </div>
                        <div className="field">
                            <label htmlFor="Genero">Gênero:</label>
                            <select name="genero" id="genero">
                                <option>- Selecione seu gênero -</option>
                                <option>Feminino</option>
                                <option>Masculino</option>
                                <option>Outro</option>
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="cpf">CPF:</label>
                            <input type="text" />
                        </div>
                        <div className="field">
                            <label htmlFor="rg">RG:</label>
                            <input type="text" />
                        </div>
                        <div className="field">
                            <label htmlFor="Telefone">Telefone:</label>
                            <input type="text" />
                        </div>
                        <div className='button-editar'>
                            <Button className="submit-editar" type='submit'>Editar</Button>{' '}
                            <Button className="submit-editar" href='/'>Voltar</Button>
                        </div>
                    </form>
                </div>
            </main>
        </section>
    );
}