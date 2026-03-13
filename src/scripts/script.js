// Script Principal - Ivona Tech
// Este arquivo coordena todos os módulos do site

document.addEventListener('DOMContentLoaded', function() {
    console.log('Ivona Tech - Site carregado com sucesso!');
    
    // Animação de entrada
    const elementos = document.querySelectorAll('.hero, .curso-card, .sobre, .contato');
    elementos.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Botão CTA
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        const cursosSection = document.querySelector('#cursos');
        if (cursosSection) {
            cursosSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}
