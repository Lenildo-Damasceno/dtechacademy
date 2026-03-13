// Gerenciamento de Cursos
const cursosData = [
    {
        id: 1,
        titulo: 'Desenvolvimento Web Full Stack',
        descricao: 'HTML, CSS, JavaScript, React e Node.js',
        imagem: 'assets/images/curso-web.jpg',
        duracao: '120 horas',
        nivel: 'Iniciante ao Avançado'
    },
    {
        id: 2,
        titulo: 'Python para Iniciantes',
        descricao: 'Fundamentos de Python e POO',
        imagem: 'assets/images/curso-python.jpg',
        duracao: '80 horas',
        nivel: 'Iniciante'
    },
    {
        id: 3,
        titulo: 'Banco de Dados SQL e NoSQL',
        descricao: 'MySQL, PostgreSQL, MongoDB',
        imagem: 'assets/images/curso-database.jpg',
        duracao: '60 horas',
        nivel: 'Intermediário'
    },
    {
        id: 4,
        titulo: 'Java Completo',
        descricao: 'POO, Spring Boot e aplicações empresariais',
        imagem: 'assets/images/curso-java.jpg',
        duracao: '100 horas',
        nivel: 'Intermediário'
    },
    {
        id: 5,
        titulo: 'Segurança da Informação',
        descricao: 'Cibersegurança e ethical hacking',
        imagem: 'assets/images/curso-security.jpg',
        duracao: '90 horas',
        nivel: 'Avançado'
    },
    {
        id: 6,
        titulo: 'DevOps e Cloud Computing',
        descricao: 'Docker, Kubernetes, CI/CD, AWS',
        imagem: 'assets/images/curso-devops.jpg',
        duracao: '110 horas',
        nivel: 'Avançado'
    }
];

function carregarCursos() {
    const grid = document.querySelector('.cursos-grid');
    if (grid) {
        cursosData.forEach(curso => {
            const card = document.createElement('article');
            card.className = 'curso-card';
            card.innerHTML = `
                <img src="${curso.imagem}" alt="${curso.titulo}" class="curso-img" onerror="this.src='assets/images/placeholder.jpg'">
                <div class="curso-info">
                    <h3>${curso.titulo}</h3>
                    <p class="curso-descricao">${curso.descricao}</p>
                    <div class="curso-detalhes">
                        <span class="duracao">⏱️ ${curso.duracao}</span>
                        <span class="nivel">📊 ${curso.nivel}</span>
                    </div>
                    <button class="btn-curso" data-curso-id="${curso.id}">Saiba Mais</button>
                </div>
            `;
            grid.appendChild(card);
        });
    }
}

document.addEventListener('DOMContentLoaded', carregarCursos);
