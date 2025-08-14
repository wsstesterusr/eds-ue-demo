import { decorateBlock, loadBlock, readBlockConfig } from '../../scripts/aem.js';

export default function decorate(block) {

  // Set additional params for the carousel div
  const carousel = document.createElement('div');
  carousel.className = 'carousel slide rounded-4 overflow-hidden shadow-lg';
  carousel.setAttribute('data-bs-ride', 'carousel');
  carousel.id = 'heroCarousel';

  // Retrieve all children (carousel items)
  const items = block.children;

  // Add indications to carousel
  const indicators = document.createElement('div');
  indicators.className = 'carousel-indicators';

  // Create inner element
  const inner = document.createElement('div');
  inner.className = 'carousel-inner';

  for (let i = 0; i < items.length; i++) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('data-bs-target', `#${carousel.id}`);
    btn.setAttribute('data-bs-slide-to', String(i));

    if (i === 0) {
      btn.className = 'active';
      btn.setAttribute('aria-current', 'true');
    }
    indicators.append(btn);

    //decorateBlock(items[i]);
    //inner.append(items[i]);
  }

  // Render children
  const cfg = readBlockConfig(block);
  console.log(cfg);

  // Select all elements that have the attribute "data-role"
  const elements = document.querySelectorAll('[data-aue-prop]');
  console.log(elements);

  console.log(items);
  console.log(items.length);

  carousel.prepend(indicators);
  carousel.append(inner);
  block.prepend(carousel);

  //block.innerHTML = '';

  console.log("Hello!");
}