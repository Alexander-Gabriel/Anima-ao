// Movimento do efeito de luz com o mouse
const glow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// Sistema de estrelas cadentes
const container = document.getElementById('estrelas-container');
function criarEstrela() {
    const estrela = document.createElement('div');
    estrela.className = 'estrela';
    estrela.style.top = Math.random() * 50 + 'vh';
    estrela.style.left = Math.random() * 50 + 'vw';
    container.appendChild(estrela);
    setTimeout(() => estrela.remove(), 3000);
}
setInterval(criarEstrela, 2000);

