import { Button, Table } from "react-bootstrap";
import React from "react";
import BarraNavegacao from "../../componentes/barraNavegacao";
import "../styles.css";

export default function Listas(props){
  return (
    <section>
      <header>
        <BarraNavegacao />
      </header>
      <main>
        <h1>Listas de informações</h1>
        <div className="tables">
          <Table className= "table">
            <thead className='table-light'>
              <tr>
                <td>Listas</td>
                <td>Visualizar</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10 clientes que mais consumiram em quantidade.</td>
                <td>
                  <div>
                    <Button variant="light" href="##">Visualizar</Button>{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td>Todos os clientes por gênero.</td>
                <td>
                  <div>
                    <Button variant="light" href="##">Visualizar</Button>{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td>Produtos e serviços gerais mais consumidos.</td>
                <td>
                  <div>
                    <Button variant="light" href="##">Visualizar</Button>{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td>Produtos ou serviços mais consumidos por gênero.</td>
                <td>
                  <div>
                    <Button variant="light" href="##">Visualizar</Button>{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td>10 clientes que menos consumiram produtos ou serviços.</td>
                <td>
                  <div>
                    <Button variant="light" href="##">Visualizar</Button>{" "}
                  </div>
                </td>
              </tr>
              <tr>
                <td>5 clientes que mais consumiram em valor.</td>
                <td>
                  <div>
                    <Button variant="light" href="##">Visualizar</Button>{" "}
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </main>
    </section>
  );
}