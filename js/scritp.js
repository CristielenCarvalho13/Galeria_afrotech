/* ==========================================================================
   CONFIGURAÇÕES INICIAIS E ANIMAÇÕES
   ========================================================================== */

// 1. ESTILO INICIAL E EFEITO DE APARECIMENTO (CARDS)
const cards = document.querySelectorAll('.card-arte');

// Define o estado inicial escondido
cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s ease-out";
});

// Função para revelar os cards ao scroll
const revelarCards = () => {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if (cardTop < triggerPoint) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener('scroll', revelarCards);


// 2. EFEITO DE SCROLL SUAVE PARA LINKS INTERNOS
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const id = this.getAttribute('href');
        const section = document.querySelector(id);

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


/* ==========================================================================
   LÓGICA DE FORMULÁRIOS E NEWSLETTER
   ========================================================================== */

// 3. FUNÇÃO DO FORMULÁRIO DE CONTATO
function enviarFormulario(event) {
    event.preventDefault();

    // Captura os valores (certifique-se que esses IDs existem no seu HTML)
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Verificação simples
    if (nome.trim() === "" || email.trim() === "" || mensagem.trim() === "") {
        alert("⚠️ Por favor, preencha todos os campos!");
        return;
    }

    // Simulação de envio
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);

    // Limpar o formulário específico que disparou o evento
    event.target.reset();
}


// 4. FUNÇÃO DE INSCRIÇÃO NA NEWSLETTER
function inscrever(event) {
    event.preventDefault();

    const inputEmail = document.getElementById("email-news");
    const email = inputEmail.value;

    if (email.trim() === "") {
        alert("⚠️ Por favor, digite um e-mail válido!");
        return;
    }

    alert("✨ Inscrição na Newsletter realizada com sucesso!");
    
    // Limpa o campo
    inputEmail.value = "";
}