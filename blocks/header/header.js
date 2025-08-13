import { getMetadata } from '../../scripts/aem.js';

export default function decorate(block) {

  const header = () => {

    return (`
      <!-- Navbar premium -->
      <nav class="navbar navbar-expand-lg bg-white shadow-sm sticky-top navbar-premium">
         <div class="container">
            <a class="navbar-brand d-flex align-items-center gap-2" href="#">
            <img alt="Bradesco" height="28" src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Banco_Bradesco_logo.svg"/>
            </a>
            <button class="navbar-toggler" data-bs-target="#navMain" data-bs-toggle="collapse" type="button">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navMain">
               <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item"><a class="nav-link btn-link-cta" data-bs-target="#modalAcessarConta" data-bs-toggle="modal" href="#">Acessar conta</a></li>
                  <li class="nav-item dropdown">
                     <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">Cartões</a>
                     <ul class="dropdown-menu shadow rounded-4">
                        <li><a class="dropdown-item" href="#">Cartão de Crédito</a></li>
                        <li><a class="dropdown-item" href="#">Cartão de Débito</a></li>
                        <li><a class="dropdown-item" href="#">Benefícios &amp; Pontos</a></li>
                     </ul>
                  </li>
                  <li class="nav-item dropdown">
                     <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">Investimentos</a>
                     <ul class="dropdown-menu shadow rounded-4">
                        <li><a class="dropdown-item" href="#">Renda Fixa</a></li>
                        <li><a class="dropdown-item" href="#">Fundos</a></li>
                        <li><a class="dropdown-item" href="#">Ações</a></li>
                     </ul>
                  </li>
                  <li class="nav-item dropdown">
                     <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">Seguros</a>
                     <ul class="dropdown-menu shadow rounded-4">
                        <li><a class="dropdown-item" href="#">Auto</a></li>
                        <li><a class="dropdown-item" href="#">Residencial</a></li>
                        <li><a class="dropdown-item" href="#">Vida</a></li>
                     </ul>
                  </li>
                  <li class="nav-item dropdown">
                     <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">Pix</a>
                     <ul class="dropdown-menu shadow rounded-4">
                        <li><a class="dropdown-item" href="#">Pagar</a></li>
                        <li><a class="dropdown-item" href="#">Receber</a></li>
                        <li><a class="dropdown-item" href="#">Cobrar</a></li>
                     </ul>
                  </li>
               </ul>
               <form class="d-flex" role="search">
                  <input aria-label="Pesquisar" class="form-control me-2" id="search" placeholder="Pesquisar..." type="search"/>
                  <button class="btn btn-brand" id="search-btn" type="button"><i class="bi bi-search"></i></button>
               </form>
            </div>
         </div>
      </nav>
        `);
  };
  block.innerHTML = header();
}
