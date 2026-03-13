// Validações e Máscaras - Secretaria Virtual

// Máscara de Telefone
function mascaraTelefone(valor) {
    valor = valor.replace(/\D/g, '');
    valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
    valor = valor.replace(/(\d)(\d{4})$/, '$1-$2');
    return valor;
}

// Máscara de CPF
function mascaraCPF(valor) {
    valor = valor.replace(/\D/g, '');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return valor;
}

// Validar CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }
    
    let soma = 0;
    let resto;
    
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;
    
    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;
    
    return true;
}

// Validar Telefone
function validarTelefone(telefone) {
    telefone = telefone.replace(/\D/g, '');
    return telefone.length === 10 || telefone.length === 11;
}

// Exibir erro
function exibirErro(input, mensagem) {
    const formGroup = input.closest('.form-group');
    const erroMsg = formGroup.querySelector('.erro-msg');
    erroMsg.textContent = mensagem;
    input.classList.add('input-erro');
}

// Limpar erro
function limparErro(input) {
    const formGroup = input.closest('.form-group');
    const erroMsg = formGroup.querySelector('.erro-msg');
    erroMsg.textContent = '';
    input.classList.remove('input-erro');
}

// Contador de caracteres
function atualizarContador(textarea) {
    const formGroup = textarea.closest('.form-group');
    const contador = formGroup.querySelector('.contador-caracteres');
    const max = textarea.getAttribute('maxlength');
    const atual = textarea.value.length;
    contador.textContent = `${atual}/${max} caracteres`;
}

document.addEventListener('DOMContentLoaded', function() {
    
    // Aplicar máscaras de telefone
    const inputsTelefone = document.querySelectorAll('input[type="tel"]');
    inputsTelefone.forEach(input => {
        input.addEventListener('input', function() {
            this.value = mascaraTelefone(this.value);
        });
        
        input.addEventListener('blur', function() {
            if (this.value && !validarTelefone(this.value)) {
                exibirErro(this, 'Telefone inválido. Use o formato (84) 99999-9999');
            }
        });
        
        input.addEventListener('focus', function() {
            limparErro(this);
        });
    });
    
    // Aplicar máscara de CPF
    const inputCPF = document.getElementById('matricula-cpf');
    if (inputCPF) {
        inputCPF.addEventListener('input', function() {
            this.value = mascaraCPF(this.value);
        });
        
        inputCPF.addEventListener('blur', function() {
            if (this.value && !validarCPF(this.value)) {
                exibirErro(this, 'CPF inválido');
            }
        });
        
        inputCPF.addEventListener('focus', function() {
            limparErro(this);
        });
    }
    
    // Contador de caracteres para textareas
    const textareas = document.querySelectorAll('textarea[maxlength]');
    textareas.forEach(textarea => {
        textarea.addEventListener('input', function() {
            atualizarContador(this);
        });
        atualizarContador(textarea);
    });
    
    // Validação de nome
    const inputsNome = document.querySelectorAll('input[name="nome"]');
    inputsNome.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.length < 3) {
                exibirErro(this, 'Nome deve ter pelo menos 3 caracteres');
            }
        });
        
        input.addEventListener('input', function() {
            limparErro(this);
        });
    });
    
    // Validação de email
    const inputsEmail = document.querySelectorAll('input[type="email"]');
    inputsEmail.forEach(input => {
        input.addEventListener('blur', function() {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value && !regex.test(this.value)) {
                exibirErro(this, 'Email inválido');
            }
        });
        
        input.addEventListener('input', function() {
            limparErro(this);
        });
    });
    
    // Formulário de Contato
    const formContato = document.getElementById('form-contato');
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let valido = true;
            const inputs = this.querySelectorAll('input[required], select[required], textarea[required]');
            
            inputs.forEach(input => {
                if (!input.value) {
                    exibirErro(input, 'Campo obrigatório');
                    valido = false;
                }
            });
            
            const telefone = this.querySelector('input[type="tel"]');
            if (telefone.value && !validarTelefone(telefone.value)) {
                exibirErro(telefone, 'Telefone inválido');
                valido = false;
            }
            
            if (valido) {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                this.reset();
                textareas.forEach(textarea => atualizarContador(textarea));
            }
        });
    }
    
    // Formulário de Matrícula
    const formMatricula = document.getElementById('form-matricula');
    if (formMatricula) {
        formMatricula.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let valido = true;
            const inputs = this.querySelectorAll('input[required], select[required]');
            
            inputs.forEach(input => {
                if (!input.value) {
                    exibirErro(input, 'Campo obrigatório');
                    valido = false;
                }
            });
            
            const cpf = this.querySelector('#matricula-cpf');
            if (cpf.value && !validarCPF(cpf.value)) {
                exibirErro(cpf, 'CPF inválido');
                valido = false;
            }
            
            const telefone = this.querySelector('input[type="tel"]');
            if (telefone.value && !validarTelefone(telefone.value)) {
                exibirErro(telefone, 'Telefone inválido');
                valido = false;
            }
            
            if (valido) {
                alert('Solicitação de matrícula enviada com sucesso! Entraremos em contato em breve.');
                this.reset();
                textareas.forEach(textarea => atualizarContador(textarea));
            }
        });
    }
});
