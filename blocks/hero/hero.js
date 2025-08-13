import { htmlToElement } from '../../scripts/scripts.js';

export default function decorate(block) {

  const title = block?.children[0];
  const description = block?.children[1];

  const titleText = title?.textContent?.trim();
  const descriptionText = description?.textContent?.trim();

  // All reference elements for the multi-field
  const refs = [...block.querySelectorAll('[data-aue-prop="image"]')];

  // Will contain only refs where at least one <img> got a new class added
  const finalArray = [];

  refs.forEach((refEl) => {
    // Find imgs within this ref (handles <img> and <picture>...<img>)
    const imgs = refEl.tagName === 'IMG' ? [refEl] : [...refEl.querySelectorAll('img')];

    let changed = false;

    imgs.forEach((img) => {
      const before = img.className;
      img.classList.add('d-block', 'w-100'); // idempotent; no duplicate classes
      if (img.className !== before) changed = true; // only mark as changed if something was added
    });

    if (changed) {
      finalArray.push(refEl);          // push the element itself
      // Or, if you prefer strings, use: finalArray.push(refEl.outerHTML);
    }
  });

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
                           ${finalArray[0].innerHtml}
                        </div>
                        <div class="carousel-item">
                           ${finalArray[1].innerHtml}
                        </div>
                        <div class="carousel-item">
                           ${finalArray[2].innerHtml}
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






































