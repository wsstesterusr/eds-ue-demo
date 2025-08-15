import { htmlToElement } from '../../scripts/scripts.js';
import { readBlockConfig } from '../../scripts/aem.js';

// 1) Captura estrutural (publicado): primeira linha/duas colunas
const getTitleFromStructure = (block) => {
  const el = block.querySelector(':scope > div:nth-child(1) > div:nth-child(1)')
           || block.querySelector('h1,h2,h3,h4,h5,h6');
  return (el?.textContent || '').trim();
};

const setDataTitle = (block, val) => {
  if (val) block.dataset.title = val;
  else delete block.dataset.title;
};

// 2) Integração com o UE (edição): escuta eventos e sincroniza
const wireUEListeners = (block) => {

  // Executa apenas quando a página estiver totalmente carregada
  const onLoad = (fn) => {
    if (document.readyState === 'complete') fn();
    else window.addEventListener('load', fn, { once: true });
  };

  onLoad(() => {
    const isUE =
      document.documentElement.classList.contains('adobe-ue-edit') ||
      document.documentElement.classList.contains('adobe-ue-preview');

      if (!isUE) {
        console.log("estou fora!");
      } else {
        console.log("estou dentro!");
      }

  });




  return;
};

export default function decorate(block) {

  // Editor: sincroniza enquanto o autor edita
  wireUEListeners(block);

  console.log("Hi!");

  /*
  const cfg = readBlockConfig(block);
  console.log("info hero: " + cfg.title);
  console.log("info hero: " + cfg.description);
  console.log("info hero: " + cfg);
  */

  //const title = block?.children[0];
  //const description = block?.children[1];
  //const image = block?.children[2];

  //const titleText = title?.textContent?.trim();
  //const descriptionText = description?.textContent?.trim();

  //const refs = block.querySelectorAll('[data-aue-prop="image"]');
  //image.querySelector('img')?.classList.add('d-block', 'w-100');

/*
  const header = () => {

    return (`
      <!-- Hero -->
      <header class="hero-gradient text-white py-5">
         <div class="container py-4">
            <div class="row align-items-center g-4">
               <div class="col-lg-6">
                  <h1 class="display-5 fw-bold mb-3">${titleText}</h1>
                  <p class="lead mb-4">${descriptionText}</p>
                  <div class="d-flex gap-2">
                     <a class="btn btn-light btn-lg" href="#solicitar-cartao">Peça seu cartão</a>
                     <a class="btn btn-outline-light btn-lg" data-bs-target="#modalAcessarConta" data-bs-toggle="modal" href="#">Acessar conta</a>
                  </div>
               </div>
               <div class="col-lg-6">
                  <div class="carousel slide rounded-4 overflow-hidden shadow-lg" data-bs-ride="carousel" id="heroCarousel">
                     <div class="carousel-indicators">
                        <button aria-current="true" class="active" data-bs-slide-to="0" data-bs-target="#heroCarousel" type="button"></button>
                        <button data-bs-slide-to="1" data-bs-target="#heroCarousel" type="button"></button>
                        <button data-bs-slide-to="2" data-bs-target="#heroCarousel" type="button"></button>
                     </div>
                     <div class="carousel-inner">
                        <div class="carousel-item active">
                           ${image.innerHTML}
                        </div>
                        <div class="carousel-item">
                           ${image.innerHTML}
                        </div>
                        <div class="carousel-item">
                           ${image.innerHTML}
                        </div>
                     </div>
                     <button class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#heroCarousel" type="button">
                     <span class="carousel-control-prev-icon"></span>
                     <span class="visually-hidden">Anterior</span>
                     </button>
                     <button class="carousel-control-next" data-bs-slide="next" data-bs-target="#heroCarousel" type="button">
                     <span class="carousel-control-next-icon"></span>
                     <span class="visually-hidden">Próximo</span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </header>
        `);
  };
  block.innerHTML = header();*/
}





















































