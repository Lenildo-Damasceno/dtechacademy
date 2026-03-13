// Validação de Formulários
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarNome(nome) {
    return nome.trim().length >= 3;
}

function validarMensagem(mensagem) {
    return mensagem.trim().length >= 10;
}

function exibirErro(input, mensagem) {
    const erro = document.createElement('span');
    erro.className = 'erro-validacao';
    erro.textContent = mensagem;
    
    const erroExistente = input.parentElement.querySelector('.erro-validacao');
    if (erroExistente) {
        erroExistente.remove();
    }
    
    input.parentElement.appendChild(erro);
    input.classList.add('input-erro');
}

function limparErro(input) {
    const erro = input.parentElement.querySelector('.erro-validacao');
    if (erro) {
        erro.remove();
    }
    input.classList.remove('input-erro');
}

// Formulário de contato
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contato-form');
    
    if (form) {
        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validarCampo(this);
            });
            
            input.addEventListener('input', function() {
                limparErro(this);
            });
        });
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let valido = true;
            const nome = form.querySelector('input[type="text"]');
            const email = form.querySelector('input[type="email"]');
            const mensagem = form.querySelector('textarea');
            
            if (!validarNome(nome.value)) {
                exibirErro(nome, 'Nome deve ter pelo menos 3 caracteres');
                valido = false;
            }
            
            if (!validarEmail(email.value)) {
                exibirErro(email, 'Email inválido');
                valido = false;
            }
            
            if (!validarMensagem(mensagem.value)) {
                exibirErro(mensagem, 'Mensagem deve ter pelo menos 10 caracteres');
                valido = false;
            }
            
            if (valido) {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                form.reset();
            }
        });
    }
});

function validarCampo(input) {
    if (input.type === 'text' && !validarNome(input.value)) {
        exibirErro(input, 'Nome deve ter pelo menos 3 caracteres');
    } else if (input.type === 'email' && !validarEmail(input.value)) {
        exibirErro(input, 'Email inválido');
    } else if (input.tagName === 'TEXTAREA' && !validarMensagem(input.value)) {
        exibirErro(input, 'Mensagem deve ter pelo menos 10 caracteres');
    }
}
