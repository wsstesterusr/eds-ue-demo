import { htmlToElement } from '../../scripts/scripts.js';

export default function decorate(block) {

  const header = () => {

    return (`
            <section class="olho-with-title">
                <div>
                  <h4><strong>Olá</strong></h4>
                </div>
                <div>
                  <p>Estou aqui!</p>
                </div>
            </section>
        `);
  };
  block.innerHTML = header();
}

