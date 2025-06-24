document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM carregado e pronto!');

  const boasVindas = document.querySelector('#boas-vindas');
  const personagemSalvo = JSON.parse(localStorage.getItem('protagonista'));
  function criarCard(titulo, descricao, link) {
    const a = document.createElement('a');
    a.href = link;
    a.style.textDecoration = 'none';
    a.style.color = 'inherit';

    const card = document.createElement('div');
    card.className = 'card';

    const h = document.createElement('h1');
    h.textContent = titulo;

    const p = document.createElement('p');
    p.textContent = descricao;

    a.appendChild(card);
    card.appendChild(h);
    card.appendChild(p);

    cardContainer.appendChild(a);
  }

  if (personagemSalvo) {
    boasVindas.textContent = `Bem vindo, ${personagemSalvo.nome || ''}`;
  }

  criarCard('Inicie sua história', 'Inicie sua história aqui e trace seu próprio destino', 'rumo.html');
  criarCard('Progresso', 'Acompanhe seu progresso até agora', 'progresso.html');
  criarCard('Personagens', 'Veja os personagens presentes na história', 'personagens.html');
  criarCard('Criação', 'Crie seu personagem para a sua história e salve', 'criacao.html');
  criarCard('História', 'Defina o gênero de sua história (Romance, fantasia, Terror, etc)', 'historia.html');
  criarCard('Gerenciador', 'Gerencie seus dados, personagens, etc', 'gerenciador.html');
});