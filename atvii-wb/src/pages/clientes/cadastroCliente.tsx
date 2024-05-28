import { Component } from 'react';
import { Button } from "react-bootstrap";
import BarraNavegacao from '../../componentes/barraNavegacao';
import '../styles.scss'
import InputMask from "react-input-mask";

export class CadastroClientes extends Component {
    render() {
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
                                <input type="text"/>
                            </div>
                            <div className="field">
                                <label htmlFor="Sobrenome">Sobrenome:</label>
                                <input type="text"/>
                            </div>
                            <div className="field">
                                <label htmlFor="Social">Nome social:</label>
                                <input type="text"/>
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
                            <InputMask
                                mask="999.999.999-99"
                                placeholder="000.000.000-00"
                                type="text"
                            />
                            </div>
                            <div className="field">
                            <label htmlFor="rg">RG:</label>
                            <InputMask
                                mask="99.999.999-9"
                                placeholder="00.000.000-0"
                                type="text"
                            />
                            </div>
                            <div className="field">
                                <label htmlFor="UF">UF do RG:</label>
                                <input type="text"/>
                            </div>
                            <div className="field">
                            <label htmlFor="telefone">Telefone:</label>
                            <InputMask
                                mask="(99) 99999-9999"
                                placeholder="(00) 00000-0000"
                                type="text"
                            />
                            </div>
                            <Button className="submit" type='submit'>Cadastrar</Button>{' '}
                        </form>
                    </div>
                </main>
            </section>
        );
    }
}
