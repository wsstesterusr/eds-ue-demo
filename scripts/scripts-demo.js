// Scoped product scroller arrows
(function(){
  document.querySelectorAll('.product-scroller-wrapper').forEach(wrapper => {
    const scroller = wrapper.querySelector('.product-scroller');
    const btnL = wrapper.querySelector('.scroller-btn.left');
    const btnR = wrapper.querySelector('.scroller-btn.right');
    if(!scroller || !btnL || !btnR) return;
    function updateButtons(){
      btnL.disabled = scroller.scrollLeft <= 0;
      btnR.disabled = scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 2;
    }
    btnL.addEventListener('click', ()=> scroller.scrollBy({left: -Math.max(280, scroller.clientWidth - 80), behavior: 'smooth'}));
    btnR.addEventListener('click', ()=> scroller.scrollBy({left: Math.max(280, scroller.clientWidth - 80), behavior: 'smooth'}));
    scroller.addEventListener('scroll', updateButtons);
    window.addEventListener('resize', updateButtons);
    setTimeout(updateButtons, 150);
  });
})();

// Premium dropdown hover behavior
(function(){
  if (window.matchMedia('(min-width: 992px)').matches) {
    document.querySelectorAll('.navbar-premium .dropdown').forEach(dd => {
      let timeout;
      dd.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        const menu = dd.querySelector('.dropdown-menu');
        dd.classList.add('show'); menu && menu.classList.add('show');
      });
      dd.addEventListener('mouseleave', () => {
        const menu = dd.querySelector('.dropdown-menu');
        timeout = setTimeout(() => { dd.classList.remove('show'); menu && menu.classList.remove('show'); }, 120);
      });
    });
  }
})();

/* --- v9 consent --- */

// v9: Consent modal behavior
(function(){
  const modalEl = document.getElementById('modalConsent');
  if(!modalEl) return;
  const chkPrivacy = document.getElementById('chkPrivacy');
  const chkCookies = document.getElementById('chkCookies');
  const btnAccept = document.getElementById('btnConsentAccept');
  function update(){
    btnAccept.disabled = !(chkPrivacy.checked && chkCookies.checked);
  }
  chkPrivacy && chkPrivacy.addEventListener('change', update);
  chkCookies && chkCookies.addEventListener('change', update);
  btnAccept && btnAccept.addEventListener('click', () => {
    try { localStorage.setItem('consentAccepted','1'); } catch(e){}
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.hide();
  });
  // Auto-open once if not accepted
  try{
    if(localStorage.getItem('consentAccepted') !== '1'){
      const modal = new bootstrap.Modal(modalEl);
      setTimeout(()=> modal.show(), 400);
    }
  }catch(e){}
})();


/* --- v10 consent immediate --- */

// v10: Show consent modal immediately if not accepted
(function(){
  const modalEl = document.getElementById('modalConsent');
  if(!modalEl) return;
  try{
    if(localStorage.getItem('consentAccepted') !== '1'){
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
    }
  }catch(e){}
})();



// v11: open consent modal on load if not accepted (robust)
(function(){
  const ready = (fn) => document.readyState !== 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn);
  ready(() => {
    const modalEl = document.getElementById('modalConsent');
    if(!modalEl) return;
    try{
      const accepted = localStorage.getItem('consentAccepted') === '1';
      if(!accepted){
        const modal = new bootstrap.Modal(modalEl);
        modal.show();
      }
    }catch(e){ /* ignore */ }
  });
  // Fallback after full load
  window.addEventListener('load', () => {
    const modalEl = document.getElementById('modalConsent');
    if(!modalEl) return;
    try{
      const accepted = localStorage.getItem('consentAccepted') === '1';
      if(!accepted){
        const existing = bootstrap.Modal.getOrCreateInstance(modalEl);
        existing.show();
      }
    }catch(e){ /* ignore */ }
  });
})();

