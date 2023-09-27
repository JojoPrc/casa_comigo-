// Classe para controlar o botão "Não"
// Classe para controlar o botão "Não"
class Botao {
    constructor(id) {
        this.botao = document.getElementById(id);
        this.inicializar();
    }

    inicializar() {
        this.botao.addEventListener('mouseover', () => {
            const windowHeight = window.innerHeight;
            const windowWidth = window.innerWidth;
            const buttonWidth = this.botao.offsetWidth;
            const buttonHeight = this.botao.offsetHeight;

            const newTop = Math.random() * (windowHeight - buttonHeight);
            const newLeft = Math.random() * (windowWidth - buttonWidth);

            this.botao.style.position = 'absolute';
            this.botao.style.top = `${newTop}px`;
            this.botao.style.left = `${newLeft}px`;
        });
    }
}

// Instanciar o objeto para controlar o botão "Não"
const botaoNao = new Botao('naoBotao');

// Seletor do botão "Sim"
const simBotao = document.getElementById('simBotao');

// Adicionar evento de clique ao botão "Sim"
simBotao.addEventListener('click', () => {
    // Redirecionar para a nova página quando o botão "Sim" for clicado
    window.location.href = 'casa-comigo.html';
});
