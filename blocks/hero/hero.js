import { htmlToElement } from '../../scripts/scripts.js';
import { readBlockConfig } from '../../scripts/aem.js';

export default function decorate(block) {

  const isUE = () =>
      document.documentElement.classList.contains('adobe-ue-edit') ||
      document.documentElement.classList.contains('adobe-ue-preview');

    const logAueProps = () => {
      if (!isUE()) return;
      const els = [...block.querySelectorAll('[data-aue-prop]')];
      console.groupCollapsed(`[UE] data-aue-prop (${els.length})`);
      els.forEach((el, i) => {
        const prop = el.getAttribute('data-aue-prop');
        // opcional: também pegar tipo/label
        const type = el.getAttribute('data-aue-type');
        const label = el.getAttribute('data-aue-label');
        console.log(`#${i}`, prop, { type, label }, el);
      });
      console.groupEnd();

      // 2) >>> NOVO: copiar o valor do campo "title" para o field do bloco "copyTitleField"
      //    - Aqui estamos copiando o **conteúdo** do campo "title" (texto do elemento).
      //    - Se você quiser copiar literalmente o **nome** do atributo (ex.: "title"),
      //      troque a linha do 'titleValue' pela indicada no comentário abaixo.

      const titleEl = block.querySelector('[data-aue-prop="title"]');
      //const titleValue = (titleEl?.textContent || '').trim();
      // (alternativa: copiar o valor literal do atributo data-aue-prop)
      const titleValue = titleEl?.getAttribute('data-aue-prop') || '';

      // Garante um nó “sistêmico” que o UE reconhece e persiste como propriedade do bloco:
      // data-aue-prop="copyTitleField" (tipo texto). Mantemos invisível.
      let sink = block.querySelector(':scope > [data-aue-prop="copyTitleField"]');
      if (!sink) {
        sink = document.createElement('pre');
        sink.setAttribute('data-aue-prop', 'copyTitleField');
        sink.setAttribute('data-aue-type', 'text');
        block.prepend(sink);
      }

      // Só atualiza se mudou (evita updates desnecessários)
      if (sink.textContent !== titleValue) {
        sink.textContent = titleValue;

        // Sinaliza alteração para o UE persistir a propriedade `copyTitleField`
        try {
          sink.setAttribute('contenteditable', 'true');
          sink.dispatchEvent(new InputEvent('input', { bubbles: true }));
          sink.blur();
          sink.removeAttribute('contenteditable');
          console.info('[UE] copyTitleField persisted:', titleValue);
        } catch (e) {
          console.warn('Falha ao persistir copyTitleField:', e);
        }
      }
    };

    // 1) Tenta logar imediatamente (caso as classes já estejam no <html>)
    if (isUE()) logAueProps();

    // 2) Escuta eventos do UE (quando o editor inicializa / altera conteúdo)
    const handler = () => logAueProps();
    ['aue:initialized', 'aue:content-details', 'aue:content-update'].forEach((evt) => {
      document.body.addEventListener(evt, handler, { passive: true });
    });

    // 3) Observa mudanças na classe do <html> (caso o UE aplique depois)
    const mo = new MutationObserver(() => { if (isUE()) logAueProps(); });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

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