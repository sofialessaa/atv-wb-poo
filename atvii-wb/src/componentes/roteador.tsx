import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Listas } from '../pages/lista/lista';
/* cliente */
import { CadastroClientes } from '../pages/clientes/cadastroCliente';
import { EditarCliente } from '../pages/clientes/editarCliente';
import { ListaClientes } from '../pages/clientes/listaCliente';
/* produto */
import { CadastroProdutos } from '../pages/produtos/cadastroProduto';
import { EditarProduto } from '../pages/produtos/editarProduto';
import { ListaProdutos } from '../pages/produtos/listaProduto';
import { ComprarProdutos } from '../pages/produtos/comprarProduto';
/* servico */
import { CadastroServico } from '../pages/servicos/cadastroServico';
import { EditarServico } from '../pages/servicos/editarServico';
import { ListaServicos } from '../pages/servicos/listaServico';
import { ComprarServicos } from '../pages/servicos/comprarServico';
/* listagem */
import { ListarProdutos } from '../pages/listagem/listagemProduto';
import { ListarServicos } from '../pages/listagem/listagemServico';

class AppRoutes extends Component {
  render() {
    return (
      <Router>
        <Routes>
          {/* <Route path='/' element={< />} /> */}
          <Route path='/listas' element={<Listas />} />
          <Route path='/cadastrar_cliente' element={<CadastroClientes />} />
          <Route path='/editar_cliente' element={<EditarCliente />} />
          <Route path='/' element={<ListaClientes />} />
          <Route path='/cadastrar_produto' element={<CadastroProdutos />} />
          <Route path='/editar_produto' element={<EditarProduto />} />
          <Route path='/produtos' element={<ListaProdutos />} />
          <Route path='/comprar_produtos' element={<ComprarProdutos />} />
          <Route path='/cadastrar_servico' element={<CadastroServico />} />
          <Route path='/editar_servico' element={<EditarServico />} />
          <Route path='/servicos' element={<ListaServicos />} />
          <Route path='/comprar_servicos' element={<ComprarServicos />} />
          <Route path='/listar_produtos' element={<ListarProdutos />} />
          <Route path='/listar_servicos' element={<ListarServicos />} />
        </Routes>
      </Router>
    );
  }
}

export default AppRoutes;
