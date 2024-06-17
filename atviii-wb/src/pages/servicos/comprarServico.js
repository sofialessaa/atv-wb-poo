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
                        <Button className="submit" type="submit">Comprar</Button>{" "}
                    </form>
                </div>
            </main>
        </section>
    );
}