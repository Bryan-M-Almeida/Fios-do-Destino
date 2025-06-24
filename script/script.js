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

  criarCard('Inicie sua história', 'Inicie sua história aqui e trace seu próprio destino', 'historia.html');
  criarCard('Atributos', 'Veja seus atributos disponíveis e a quantidade de xp necessária para o próximo lvl', 'atributos.html');
  criarCard('Progresso', 'Acompanhe seu progresso até agora, veja suas escolhas e ações', 'progresso.html');
  criarCard('Personagens', 'Veja os personagens presentes na história', 'personagens.html');
  criarCard('Criação', 'Crie seu personagem para a sua história e salve', 'criacao.html');
  criarCard('Gerenciador', 'Gerencie seus dados, personagens, etc', 'gerenciador.html');
  criarCard('Inventário', 'Veja o seu inventário', 'inventario.html');
});