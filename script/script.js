const cardContainer = document.querySelector('.card-container');



function criarCard(titulo, descricao) {
    const card = document.createElement('div');
    const p = document.createElement('p');
    const h = document.createElement('h1');
    card.className = 'card';
    cardContainer.appendChild(card);
    card.appendChild(h)
    card.appendChild(p);
    h.textContent = titulo;
    p.textContent = descricao;




}

const historia = criarCard('Inicie sua história', 'Inicie sua história aqui e trace seu próprio destino');
const progresso = criarCard('Progresso', 'acompanhe seu progresso até agora');
const personagens = criarCard('Personagen', 'Veja os personagens presentes na história');







