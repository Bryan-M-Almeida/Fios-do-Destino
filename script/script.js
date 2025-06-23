const cardContainer = document.querySelector('.card-container');

const personagemSalvo = JSON.parse(localStorage.getItem('protagonista'));
const boasVindas = document.querySelector('#boas-vindas');
const msg = document.querySelector('#msg');

const mensagensIniciais = [
  "As névoas da madrugada encobrem o reino…",
  "Um sussurro ecoa no vento: o destino o aguarda.",
  "Seu coração pulsa ao som dos tambores da guerra.",
  "Lá longe, a torre do mago reluz sob a lua cheia.",
  "As chamas de antigas batalhas ainda queimam na memória.",
  "Você acorda sem memórias em uma floresta escura.",
  "Os fios do destino começam a se entrelaçar…",
  "Uma voz desconhecida murmura: ‘Escolha com sabedoria.’",
  "A trilha à frente se divide em dois caminhos sombrios.",
  "Os sinos da cidade tocam anunciando o início da jornada.",
  "Você sente o peso da espada em suas costas.",
  "No céu, uma estrela cadente corta a noite silenciosa.",
  "As lendas falam de um herói que mudaria tudo… será você?",
  "Um corvo o observa em silêncio, como um presságio.",
  "A escuridão se move… e o tempo para decidir é curto.",
  "Velhas runas brilham fracamente em suas mãos.",
  "O chão treme levemente… algo desperta nas profundezas.",
  "O aroma de ervas e fumaça invade o ar — um feiticeiro está por perto.",
  "Você ouve um grito distante, vindo do leste.",
  "O mapa antigo revela uma marca que você nunca viu antes.",
  "O céu amanhece tingido de vermelho como sangue.",
  "Uma chuva fina cobre o campo de batalha abandonado.",
  "O som de passos ecoa na escuridão.",
  "Uma brisa gelada sopra, trazendo consigo o cheiro do mar.",
  "As tochas da muralha se apagam misteriosamente.",
  "Você pisa em solo sagrado pela primeira vez.",
  "O olhar de um velho viajante cruza o seu por um instante.",
  "A floresta parece sussurrar segredos antigos.",
  "O vento carrega o som de um cântico antigo.",
  "O som metálico de correntes se aproxima.",
  "No horizonte, uma tempestade se forma rapidamente.",
  "Você encontra pegadas estranhas na lama.",
  "O brilho de um cristal escondido chama sua atenção.",
  "Uma criança aparece e some na neblina.",
  "Você sente um calafrio sem motivo aparente.",
  "Uma sombra passa rápido por entre as árvores.",
  "Os sinos de uma capela abandonada soam sozinhos.",
  "Você tropeça em um objeto enterrado na terra.",
  "A água do rio corre com velocidade incomum.",
  "Um arco-íris estranho surge em meio ao céu cinza.",
  "O eco de uma risada sinistra faz seu coração disparar.",
  "Você nota símbolos gravados na pedra do caminho.",
  "O cheiro de enxofre enche o ar repentinamente.",
  "Um trovão distante anuncia o início da caçada.",
  "Você encontra uma pena negra em seu caminho.",
  "O vento para subitamente, e o silêncio é total.",
  "Uma chama azul dança sozinha no escuro.",
  "Os olhos de uma criatura o encaram na penumbra.",
  "Uma ponte antiga range sob seus passos.",
  "Você escuta o som de flautas ao longe.",
  "A lua cheia ilumina ruínas esquecidas.",
  "A poeira levanta, ocultando o que se esconde à frente.",
  "Uma chave enferrujada brilha no chão.",
  "A vegetação parece abrir caminho para você.",
  "Um animal o observa em total silêncio.",
  "Você pisa em um círculo de pedras misterioso.",
  "O som de asas preenche o céu noturno.",
  "Um pergaminho velho está preso nos galhos de uma árvore.",
  "A água de um poço parece brilhar no escuro.",
  "Uma figura encapuzada desaparece na neblina.",
  "Você sente cheiro de pão recém-assado, mas não vê ninguém.",
  "Os muros da cidade têm marcas de garras profundas.",
  "O tilintar de moedas caindo ecoa na noite.",
  "Uma névoa dourada cobre a planície.",
  "Você encontra uma vela acesa no chão da floresta.",
  "A terra treme levemente sob seus pés.",
  "Um espelho quebrado reflete algo que não está lá.",
  "O canto de um pássaro raro enche o ar.",
  "Você vê um anel preso entre as raízes.",
  "Uma velha carruagem abandonada bloqueia o caminho.",
  "O som de tambores ressoa pelas colinas.",
  "O aroma de incenso invade seus sentidos.",
  "Você encontra um escudo com brasão desconhecido.",
  "As estrelas no céu formam um símbolo familiar.",
  "A relva está marcada como se algo gigante tivesse passado.",
  "Um estandarte rasgado balança ao vento.",
  "Você pisa em um chão de ossos antigos.",
  "O sol se esconde atrás de nuvens densas.",
  "Um vulto se move rápido entre as pedras.",
  "Você encontra um diário com páginas rasgadas.",
  "O som de correntes arrastando se aproxima.",
  "Uma caveira sorri no meio da trilha.",
  "A brisa traz o aroma de flores que você não vê.",
  "Você encontra um anel com inscrições mágicas.",
  "Uma runa acende por um breve momento sob seus pés.",
  "Um barco fantasma surge na névoa do lago.",
  "O relâmpago corta o céu, iluminando uma torre distante.",
  "Você escuta o eco de vozes esquecidas.",
  "Um animal selvagem ruge ao longe.",
  "A sombra de algo imenso passa sobre você.",
  "O som de passos apressados na folhagem faz você parar.",
  "Uma estrela cadente risca o céu, deixando um rastro azul.",
  "Você sente uma presença invisível observando.",
  "Os sinos do templo soam sem vento nenhum.",
  "O chão está coberto por folhas queimadas.",
  "Um portal cintilante surge e desaparece no ar."
];

let mostrarMsgInicial = true;

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
  boasVindas.innerHTML = `Bem vindo, `;
}

if (mostrarMsgInicial === true) {
const mensagem = mensagensIniciais[Math.floor(Math.random() * mensagensIniciais.length)];
    msg.innerHTML = mensagem;

  setInterval(() => {
    const mensagem = mensagensIniciais[Math.floor(Math.random() * mensagensIniciais.length)];
    msg.innerHTML = mensagem;
  }, 4500);
}

criarCard('Inicie sua história', 'Inicie sua história aqui e trace seu próprio destino', 'rumo.html');
criarCard('Progresso', 'Acompanhe seu progresso até agora', 'progresso.html');
criarCard('Personagens', 'Veja os personagens presentes na história', 'personagens.html');
criarCard('Criação', 'crie seu personagem para a sua história e salve', 'criacao.html');
criarCard('História', 'defina o gênero de sua história (Romance, fantasia, Terror, etc)', 'historia.html');
criarCard('Gerenciador', 'Gerencie seus dados, personagens, etc', 'gerenciador.html');
