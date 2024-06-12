import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/* cliente */
import CadastroClientes from '../pages/clientes/cadastroCliente';
import EditarCliente from '../pages/clientes/editarCliente';
import ListaClientes from '../pages/clientes/listaCliente';
/* produto */
import CadastroProdutos from '../pages/produtos/cadastroProduto';
import EditarProduto from '../pages/produtos/editarProduto';
import ListaProdutos from '../pages/produtos/listaProduto';
import ComprarProdutos from '../pages/produtos/comprarProduto';
/* servico */
import CadastroServico from '../pages/servicos/cadastroServico';
import EditarServico from '../pages/servicos/editarServico';
import ListaServicos from '../pages/servicos/listaServico';
import ComprarServicos from '../pages/servicos/comprarServico';
/* listagem */
import ListarProdutos from '../pages/pedidos/listagemProduto';
import ListarServicos from '../pages/pedidos/listagemServico';
/* listas */
import Listas from '../pages/lista/lista';
import Lista1 from '../pages/lista/lista1';
import Lista2 from '../pages/lista/lista2';
import Lista3 from '../pages/lista/lista3';
import Lista4 from '../pages/lista/lista4';
import Lista5 from '../pages/lista/lista5';
import Lista6 from '../pages/lista/lista6';

export default function AppRoutes(props){
  return(
    <Router>
      <Routes>
        {/* <Route path='/' element={< />} /> */}
        <Route path='/cadastrar_cliente' element={<CadastroClientes />} />
        <Route path='/editar_cliente/:id' element={<EditarCliente />} />
        <Route path='/' element={<ListaClientes />} />
        <Route path='/cadastrar_produto' element={<CadastroProdutos />} />
        <Route path='/editar_produto/:id' element={<EditarProduto />} />
        <Route path='/produtos' element={<ListaProdutos />} />
        <Route path='/comprar_produtos' element={<ComprarProdutos />} />
        <Route path='/cadastrar_servico' element={<CadastroServico />} />
        <Route path='/editar_servico/:id' element={<EditarServico />} />
        <Route path='/servicos' element={<ListaServicos />} />
        <Route path='/comprar_servicos' element={<ComprarServicos />} />
        <Route path='/listar_produtos' element={<ListarProdutos />} />
        <Route path='/listar_servicos' element={<ListarServicos />} />
        <Route path='/listas' element={<Listas />} />
        <Route path='/lista1' element={<Lista1 />} />
        <Route path='/lista2' element={<Lista2 />} />
        <Route path='/lista3' element={<Lista3 />} />
        <Route path='/lista4' element={<Lista4 />} />
        <Route path='/lista5' element={<Lista5 />} />
        <Route path='/lista6' element={<Lista6 />} />
      </Routes>
    </Router>
  );
};