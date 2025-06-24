const cardContainer = document.querySelector('.card-container');
const header = document.querySelector("#voltar");

if (header || cardContainer) {
    const msg = document.getElementById('msg');
    const loadingOverlay = document.getElementById('loading-overlay');

    let interval;

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

    function mudarMensagem() {
        const mensagem = mensagensIniciais[Math.floor(Math.random() * mensagensIniciais.length)];
        msg.textContent = mensagem;
    }

    function iniciarIntervalo() {
        interval = setInterval(mudarMensagem, 1000);
    }

    function pararIntervalo() {
        clearInterval(interval);
    }

    function mostrarLoading() {
        loadingOverlay.classList.remove('hidden');
        iniciarIntervalo();
    }

    function esconderLoading() {
        loadingOverlay.classList.add('hidden');
        pararIntervalo();
    }

    mudarMensagem();

    window.addEventListener('load', () => {
        setTimeout(() => {
            esconderLoading();
        }, 1500);
    });

    window.addEventListener('beforeunload', () => {
        mostrarLoading();
    });

    function pagina(pagina) {
        if (cardContainer) {
            return cardContainer;
        } else if (header) {
            return header;
        }
    }

    pagina().addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;
        e.preventDefault();

        mostrarLoading();

        setTimeout(() => {
            esconderLoading();
            window.location.href = link.href;
        }, 3000);
    });
}