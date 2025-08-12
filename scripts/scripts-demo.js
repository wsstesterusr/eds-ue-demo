// scripts.js - Simulação de interatividade
document.getElementById('search-btn').addEventListener('click', function() {
  const term = document.getElementById('search').value.trim();
  if (term) {
    alert('Você pesquisou por: ' + term);
  } else {
    alert('Digite algo para pesquisar.');
  }
});
