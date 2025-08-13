import { htmlToElement } from '../../scripts/scripts.js';

export default function decorate(block) {

  const title = block?.children[0];
  const description = block?.children[1];
  const image = block?.children[2];
  const image2 = block?.children[3];
  const image3 = block?.children[4];

  const titleText = title?.textContent?.trim();
  const descriptionText = description?.textContent?.trim();

  image?.querySelector('img')?.classList.add('d-block', 'w-100');
  image2?.querySelector('img')?.classList.add('d-block', 'w-100');
  image3?.querySelector('img')?.classList.add('d-block', 'w-100');

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
                           ${image?.innerHTML}
                        </div>
                        <div class="carousel-item">
                           ${image2?.innerHTML}
                        </div>
                        <div class="carousel-item">
                           ${image3?.innerHTML}
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
  block.innerHTML = header();
}
























