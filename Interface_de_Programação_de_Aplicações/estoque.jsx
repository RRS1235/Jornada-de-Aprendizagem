import React from 'react';
import './estoque.css'; // Certifique-se de que o CSS está no mesmo diretório

const Estoque = () => {
  return (
    <div className="container">
      {/* Menu lateral */}
      <aside className="sidebar">
        <div className="logo">
          <div className="icon"></div>
          <div>
            <h2>Almoxarifado</h2>
            <p>Sistema de Gestão</p>
          </div>
          <button className="darkMode">Dark Mode</button>
        </div>

        {/* Aba do menu */}
        <nav className="menu">
          <a href="index.html">Dashboard</a>
          <a href="estoque.html" className="active">Estoque</a>
          <a href="#">Requisições</a>
          <a href="#">Solicitar Compra</a>
        </nav>

        {/* Aba do usuário */}
        <div className="user">
          <div className="user-info">
            <p><strong>Usuário</strong></p>
            <span>Administrador</span>
          </div>
          <button className="logout">Sair</button>
        </div>
      </aside>

      {/* Conteúdo principal */}
      <main className="main-content">
        <header>
          <h1>Controle de Estoque</h1>
          <p>Gerencie os itens disponíveis no almoxarifado</p>
        </header>

        {/* Ações */}
        <div className="actions">
          <button className="add">➕ Novo Item</button>
          <input type="text" placeholder="Pesquisar item..." className="search" />
        </div>

        {/* Tabela */}
        <section className="table-section">
          <table>
            <thead>
              <tr>
                <th>Código</th>
                <th>Descrição</th>
                <th>Categoria</th>
                <th>Quantidade</th>
                <th>Mínimo</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PAP001</td>
                <td>Papel A4 500 folhas</td>
                <td>Material de Escritório</td>
                <td>5</td>
                <td>20</td>
                <td><span className="status low">Baixo</span></td>
                <td>
                  <button className="edit">✏️</button>
                  <button className="delete">🗑️</button>
                </td>
              </tr>
              <tr>
                <td>TIN001</td>
                <td>Tinta Branca 18L</td>
                <td>Manutenção</td>
                <td>3</td>
                <td>5</td>
                <td><span className="status low">Baixo</span></td>
                <td>
                  <button className="edit">✏️</button>
                  <button className="delete">🗑️</button>
                </td>
              </tr>
              <tr>
                <td>CAN001</td>
                <td>Caneta Azul</td>
                <td>Material de Escritório</td>
                <td>150</td>
                <td>50</td>
                <td><span className="status ok">OK</span></td>
                <td>
                  <button className="edit">✏️</button>
                  <button className="delete">🗑️</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Estoque;
