import { Component } from 'react';
import { Button } from 'react-bootstrap';
import BarraNavegacao from '../../componentes/barraNavegacao';
import CurrencyInput from 'react-currency-input-field';

export class CadastroServico extends Component {
    render() {
        return (
            <section>
                <header>
                    <BarraNavegacao/>
                </header>
                <main>
                    <h1>Cadastrar Serviço</h1>
                    <div className="forms">
                        <form>
                            <div className="field">
                                <label htmlFor="Servico">Serviço:</label>
                                <input type="text"/>
                            </div>
                            <div className="field">
                                <label htmlFor="Preco">Preço:</label>
                                <CurrencyInput
                                    id="Preco"
                                    name="Preco"
                                    prefix="R$"
                                    decimalsLimit={2}
                                    decimalSeparator=","
                                    groupSeparator="."
                                    placeholder="0,00"
                                />
                            </div>
                            <Button className="submit" variant="outline-dark" type='submit'>Cadastrar</Button>{' '}
                        </form>
                    </div>
                </main>
            </section>
        );
    }      
}