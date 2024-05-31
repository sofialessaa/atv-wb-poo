import React from "react";
import { Button } from "react-bootstrap";
import BarraNavegacao from "../../componentes/barraNavegacao";

export default function ComprarServicos(props){
    return (
        <section>
            <header>
                <BarraNavegacao />
            </header>
            <main>
                <h1>Comprar Serviço</h1>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label htmlFor="Nome">CPF de quem irá realizar a compra:</label>
                            <input type="text" />
                        </div>
                        <div className="field">
                            <label htmlFor="Sobrenome">ID ou nome do serviço:</label>
                            <input type="text" />
                        </div>
                        <div className="field">
                            <label htmlFor="Genero">Quantidade:</label>
                            <select name="genero" id="genero">
                                <option>- Selecione a quantidade -</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </div>
                        <Button className="submit" type="submit">Comprar</Button>{" "}
                    </form>
                </div>
            </main>
        </section>
    );
}