import { getMetadata } from '../../scripts/aem.js';

export default function decorate(block) {

  const header = () => {

    return (`
          <header class="top-bar">
            <div class="container">
              <a href="#" class="logo">
                <img src="https://banco.bradesco/assets/classic/logo-bradesco-classic.svg" alt="Bradesco Logo">
              </a>
              <nav class="main-nav">
                <ul>
                  <li><a href="#">Para Você</a></li>
                  <li><a href="#">Para Empresas</a></li>
                  <li><a href="#">Private Bank</a></li>
                  <li><a href="#">Ajuda</a></li>
                </ul>
              </nav>
              <div class="search-box">
                <input type="text" id="search" placeholder="Buscar no site">
                <button id="search-btn">🔍</button>
              </div>
            </div>
          </header>
        
          <nav class="sub-nav">
            <div class="container">
              <ul>
                <li><a href="#">Acessar minha conta</a></li>
                <li><a href="#">Cartões</a></li>
                <li><a href="#">Investimentos</a></li>
                <li><a href="#">Seguros</a></li>
                <li><a href="#">Crédito</a></li>
              </ul>
            </div>
          </nav>
        `);
  };
  block.innerHTML = header();
}
