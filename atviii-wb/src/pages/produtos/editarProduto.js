import React from 'react';
import CurrencyInput from 'react-currency-input-field';
import { Button } from 'react-bootstrap';
import BarraNavegacao from '../../componentes/barraNavegacao';

export default function EditarProduto(props){
    return (
        <section>
            <header>
                <BarraNavegacao/>
            </header>
            <main>
                <h1>Editar Produto</h1>
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
                        <div className='button-editar'>
                            <Button className="submit-editar" type='submit'>Editar</Button>{' '}
                            <Button className="submit-editar" href='/produtos'>Voltar</Button>
                        </div>
                    </form>
                </div>
            </main>
        </section>
    );
}