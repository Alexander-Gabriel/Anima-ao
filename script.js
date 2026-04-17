// ==========================================
// 1. EFEITO DE LUZ (GLOW) QUE SEGUE O MOUSE
// ==========================================
const glow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    // Centraliza o brilho na ponta do cursor
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});


// ==========================================
// 2. SISTEMA DE ESTRELAS CADENTES
// ==========================================
const containerEstrelas = document.getElementById('estrelas-container');

function criarEstrela() {
    const estrela = document.createElement('div');
    estrela.className = 'estrela';

    // Define posição horizontal aleatória (0 a 100% da largura da tela)
    estrela.style.left = Math.random() * 100 + 'vw';

    // Define posição vertical aleatória no topo da tela
    estrela.style.top = Math.random() * -10 + 'vh';

    // Define uma duração aleatória entre 1.5s e 3s para variar a velocidade
    const duracao = Math.random() * 2.0 + 3.0;
    estrela.style.animationDuration = duracao + 's';

    containerEstrelas.appendChild(estrela);

    // Remove o elemento do DOM após a animação terminar para manter a performance
    setTimeout(() => {
        estrela.remove();
    }, duracao * 1000);
}

// Cria uma nova estrela a cada 2.5 segundos
setInterval(criarEstrela, 2500);


// ==========================================
// 3. SISTEMA DE DECOLAGEM DO FOGUETE
// ==========================================
const containerFoguete = document.getElementById('foguete-container');

function criarFoguete() {
    // Remove qualquer foguete que ainda esteja na tela para não acumular
    const fogueteExistente = document.querySelector('.foguete');
    if (fogueteExistente) fogueteExistente.remove();

    const foguete = document.createElement('div');
    foguete.className = 'foguete';

    // Insere o ícone do FontAwesome
    foguete.innerHTML = '<i class="fas fa-rocket"></i>';

    // Define uma posição horizontal aleatória (entre 10% e 90% da tela)
    foguete.style.left = (Math.random() * 80 + 10) + 'vw';

    containerFoguete.appendChild(foguete);

    // Remove o foguete após 10 segundos (tempo da animação de subida no CSS)
    setTimeout(() => {
        foguete.remove();
    }, 10000);
}

// O primeiro foguete sobe logo que a página carrega
criarFoguete();

// Um novo foguete decola a cada 15 segundos
setInterval(criarFoguete, 9000);