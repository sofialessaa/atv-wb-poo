import React from 'react';
import { Button } from 'react-bootstrap';
import BarraNavegacao from '../../componentes/barraNavegacao';
import CurrencyInput from 'react-currency-input-field';

export default function CadastroProdutos(props){
    return (
        <section>
            <header>
                <BarraNavegacao/>
            </header>
            <main>
                <h1>Cadastrar Produto</h1>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label htmlFor="Produto">Produto:</label>
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
                        <Button className="submit" type='submit'>Cadastrar</Button>{' '}
                    </form>
                </div>
            </main>
        </section>
    );  
}