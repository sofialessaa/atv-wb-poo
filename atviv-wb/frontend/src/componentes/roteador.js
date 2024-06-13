import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/* cliente */
import CadastroClientes from '../pages/clientes/cadastroCliente';
import EditarCliente from '../pages/clientes/editarCliente';
import ListaClientes from '../pages/clientes/listaCliente';

export default function AppRoutes(props){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<ListaClientes />} />
        <Route path='/cadastrar' element={<CadastroClientes />} />
        <Route path='/atualizar' element={<EditarCliente />} />
        <Route path='/clientes' element={<ListaClientes />} />
      </Routes>
    </Router>
  );
};