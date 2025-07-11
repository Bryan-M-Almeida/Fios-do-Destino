const personagens = [
    {
        "id": "char-009",
        "nome": "Lord Alaroc Cicéron",
        "genero": "Masculino",
        "idade": "52 anos",
        "personalidade": "Sábio, calculista e protetor — carrega o fardo da linhagem com honra.",
        "gostos": [
            "Manuscritos antigos",
            "Cavaleiros errantes",
            "Ventos ao amanhecer"
        ],
        "hobbies": [
            "Estudar genealogias",
            "Forjar alianças",
            "Montar em seu corcel Ébano"
        ],
        "habilidades": [
            "Estratégia militar",
            "Oratória cerimonial",
            "Tática de cerco"
        ],
        "curiosidades": [
            "Preservou segredos de quatro reis",
            "Tem um grimório familiar secreto"
        ],
        "pontos_fortes": [
            "Visão ampla de campo de batalha",
            "Rede de contatos influentes"
        ],
        "pontos_fracos": [
            "Desconforto em aventuras fora do castelo",
            "Cansaço fácil em longas jornadas"
        ],
        "historia": "Patriarca da Casa Netorius, Alaroc Cicéron defendeu as fronteiras do reino por décadas e fundou a Ordem do Escudo de Prata.",
        "estado_civil": "Casado com Dama Amandelle",
        "aparencia": {
            "raça": "Humano",
            "cor_de_pele": "Pele bronzeada pelo sol",
            "cabelo": "Preto-acinzentado, curto e bem aparado",
            "cor_dos_olhos": "Azuis pálidos",
            "cicatrizes": [
                "Três marcas finas no queixo, lembrança de um duelo"
            ],
            "tatuagens": [
                "Nenhuma"
            ]
        }
    },
    {
        "id": "char-010",
        "nome": "Dama Amandelle Macius",
        "genero": "Feminino",
        "idade": "49 anos",
        "personalidade": "Gentil, diplomática e sábia — sempre pronta a intermediar conflitos.",
        "gostos": [
            "Jardins de heras antigas",
            "Cerimônias reais",
            "Velas perfumadas"
        ],
        "hobbies": [
            "Produzir poções medicinais",
            "Bordar estandartes",
            "Ensinar protocolos de corte"
        ],
        "habilidades": [
            "Diplomacia aristocrática",
            "Medicina herbal",
            "Leitura de runas curativas"
        ],
        "curiosidades": [
            "Salvou uma vila da peste com suas poções",
            "Tem uma biblioteca de tomos raros"
        ],
        "pontos_fortes": [
            "Calma em crises",
            "Rede de embaixadores"
        ],
        "pontos_fracos": [
            "Vulnerável a traições internas",
            "Excessiva cautela"
        ],
        "historia": "Esposa de Alaroc Cicéron, Amandelle Macius é conselheira real e guardiã das tradições ancestrais da corte.",
        "estado_civil": "Casada com Lord Alaroc Cicéron",
        "aparencia": {
            "raça": "Humana",
            "cor_de_pele": "Pele marfim com leve rubor",
            "cabelo": "Castanho-avermelhado, longos cachos presos por fitas douradas",
            "cor_dos_olhos": "Avelã profunda",
            "cicatrizes": [
                "Nenhuma"
            ],
            "tatuagens": [
                "Ramo de hera tatuado no pulso esquerdo"
            ]
        }
    },
    {
        "id": "char-011",
        "nome": "Sir Bryandir Macius",
        "genero": "Masculino",
        "idade": "19 anos",
        "personalidade": "Leal, corajoso e impulsivo — com sede de provar seu valor.",
        "gostos": [
            "Treinos ao amanhecer",
            "Histórias de heróis",
            "Mele e especiarias"
        ],
        "hobbies": [
            "Duelos amistosos",
            "Percorrer trilhas montanhosas",
            "Aprender forja leve"
        ],
        "habilidades": [
            "Espada longa",
            "Resistência física",
            "Montaria cavalgarça"
        ],
        "curiosidades": [
            "Quebrou o recorde de velocidade em combate simulado",
            "Tem um falcão de caça chamado Ventus"
        ],
        "pontos_fortes": [
            "Coragem inabalável",
            "Força jovem"
        ],
        "pontos_fracos": [
            "Inexperiência política",
            "Impulsividade"
        ],
        "historia": "Filho primogênito de Alaroc e Amandelle, Bryandir busca glória nos torneios reais e jurou defender a honra da Casa Netorius.",
        "estado_civil": "Casado com Lady Laureline Nova",
        "aparencia": {
            "raça": "Humano",
            "cor_de_pele": "Bronze jovem reluzente",
            "cabelo": "Castanho escuro, solto e levemente ondulado",
            "cor_dos_olhos": "Castanhos escuros",
            "cicatrizes": [
                "Risco atrás da cabeça, ocultado pelo cabelo"
            ],
            "tatuagens": [
                "Emblema da família gravado no antebraço"
            ]
        }
    },
    {
        "id": "char-012",
        "nome": "Lady Laureline Nova Macius",
        "genero": "Feminino",
        "idade": "19 anos",
        "personalidade": "Diplomática, impaciente e estudiosa — mescla nobreza com curiosidade.",
        "gostos": [
            "Música de alaúde",
            "Estrelas cadentes",
            "Jardins de lírios"
        ],
        "hobbies": [
            "Tecer mantos encantados",
            "Ler pergaminhos ancestrais",
            "Meditar sob a lua",
            "treinar"
        ],
        "habilidades": [
            "Magia lunar",
            "Conhecimento diplomático",
            "Visão noturna"
        ],
        "curiosidades": [
            "Nascida sob eclipse total",
            "É canhota em todas as artes marciais"
        ],
        "pontos_fortes": [
            "Intuição mágica",
            "Inteligência em combate e táticas"
        ],
        "pontos_fracos": [
            "Físico delicado",
            "Temor de fogo"
        ],
        "historia": "Nobre de linhagem antiga, Laureline se uniu a Bryandir em aliança real para fortalecer a Casa Netorius e trazer equilíbrio ao reino.",
        "estado_civil": "Casada com Sir Bryandir Macélion",
        "aparencia": {
            "raça": "Humana",
            "cor_de_pele": "Pele pálida com brilho suave",
            "cabelo": "Preto, longo, cacheado",
            "cor_dos_olhos": "Castanhos",
            "cicatrizes": [
                "Linha tênue na sobrancelha esquerda de um duelo arcano",
                "Marca de nascença nas costas"
            ],
            "tatuagens": [
                "Símbolos lunares nos antebraços"
            ]
        }
    },
    {
        "id": "char-013",
        "nome": "Sir Cícero Bentley",
        "genero": "Masculino",
        "idade": "20 anos",
        "personalidade": "Curioso, estudioso e perspicaz — busca conhecimento antes da espada.",
        "gostos": [
            "Bibliotecas silenciosas",
            "Enigmas e charadas",
            "Vinhos finos"
        ],
        "hobbies": [
            "Estudar línguas antigas",
            "Desenhar mapas rúnicos",
            "Colecionar artefatos"
        ],
        "habilidades": [
            "Decifrar runas",
            "Oratória",
            "Estratégia leve"
        ],
        "curiosidades": [
            "Fez amizade com um dragão jovem",
            "Mantém diário codificado"
        ],
        "pontos_fortes": [
            "Intelecto afiado",
            "Rede de eruditos"
        ],
        "pontos_fracos": [
            "Físico fraco",
            "Excesso de confiança intelectual"
        ],
        "historia": "O caçula de Alaroc e Amandelle, Cícero Bentley segue os passos do pai como cronista real e estrategista em formação.",
        "estado_civil": "Solteiro",
        "aparencia": {
            "raça": "Humano",
            "cor_de_pele": "Pele clara com sardas suaves",
            "cabelo": "Castanho claro, curto e bagunçado",
            "cor_dos_olhos": "Verdes profundos",
            "cicatrizes": [
                "Nenhuma"
            ],
            "tatuagens": [
                "Símbolos de escritura rúnica no pulso"
            ]
        }
    },
    {
        "id": "char-014",
        "nome": "Sir Rylian Macius",
        "genero": "Masculino",
        "idade": "18 anos",
        "personalidade": "Curioso, destemido e leal — sempre pronto para aventuras ao lado do irmão e protegendo seu lar.",
        "gostos": [
            "Luz do amanhecer nos muros do castelo",
            "Histórias de grandes feitos de seu pai",
            "Prática de arco e flecha"
        ],
        "hobbies": [
            "Treino de arco nos jardins",
            "Leitura de pergaminhos históricos",
            "Explorar ruínas antigas"
        ],
        "habilidades": [
            "Pontaria precisa",
            "Agilidade em escalada",
            "Conhecimento básico de estratégia"
        ],
        "curiosidades": [
            "Aprendeu a desmontar e remontar armaduras aos 12 anos",
            "Tem um corvo de estimação chamado Sombra"
        ],
        "pontos_fortes": [
            "Foco e determinação",
            "Coragem juvenil"
        ],
        "pontos_fracos": [
            "Impulsividade",
            "Inexperiência em combate corpo a corpo"
        ],
        "historia": "Filho primogênito de Bryandir e Laureline, Rylian cresceu treinando com seu pai nos campos de batalha simulados e sonha em provar seu valor na Ordem do Escudo de Prata.",
        "estado_civil": "Solteiro",
        "aparencia": {
            "raça": "Humano",
            "cor_de_pele": "Bronze jovem reluzente",
            "cabelo": "Castanho escuro, cortado rente nas laterais",
            "cor_dos_olhos": "Verdes vibrantes",
            "cicatrizes": [
                "Nenhuma"
            ],
            "tatuagens": [
                "Nenhuma"
            ]
        }
    },
    {
        "id": "char-015",
        "nome": "Dama Helena Macius",
        "genero": "Feminino",
        "idade": "16 anos",
        "personalidade": "Doce, perspicaz e gentil — possui um coração compassivo e curiosidade aguçada pelas artes divinatórias.",
        "gostos": [
            "Canções ao luar",
            "Jardinagem de ervas medicinais",
            "Pintura de vitrais"
        ],
        "hobbies": [
            "Preparar chás de ervas",
            "Desenhar constelações em pergaminho",
            "Praticar canto litúrgico"
        ],
        "habilidades": [
            "Leitura de estrelas",
            "Conhecimento em botânica",
            "Harmonia em canto coral"
        ],
        "curiosidades": [
            "Nascida durante chuva de meteoros",
            "Tem sensibilidade a sonhos proféticos"
        ],
        "pontos_fortes": [
            "Empatia profunda",
            "Visão de padrões ocultos"
        ],
        "pontos_fracos": [
            "Física frágil",
            "Medo de espaços escuros"
        ],
        "historia": "Segunda filha de Bryandir e Laureline, Helena é conhecida no reino por suas visões noturnas e pela arte de curar, aspirando seguir os passos diplomáticos de sua mãe.",
        "estado_civil": "Solteira",
        "aparencia": {
            "raça": "Humana",
            "cor_de_pele": "Pele clara com brilho perolado",
            "cabelo": "Loiro-prateado, longo e sedoso",
            "cor_dos_olhos": "Azuis cintilantes",
            "cicatrizes": [
                "Nenhuma"
            ],
            "tatuagens": [
                "Nenhuma"
            ]
        }
    },
    {
        "id": "char-016",
        "nome": "Morgana Duskwhisper",
        "genero": "Feminino",
        "idade": "34 anos",
        "personalidade": "Misteriosa, incisiva e reservada — fala em sussurros e observa cada movimento.",
        "gostos": [
            "Nevoeiros matinais",
            "Pétalas negras de rosas",
            "Letras codificadas em livros ancestrais"
        ],
        "hobbies": [
            "Misturar essências de sombras",
            "Explorar criptas antigas",
            "Coletar luas em frascos"
        ],
        "habilidades": [
            "Magia de ilusão",
            "Deslocamento furtivo",
            "Leitura de pensamentos superficiais"
        ],
        "curiosidades": [
            "Nasceu no coração de um eclipse solar",
            "Tem olhos que mudam de cor conforme a lua"
        ],
        "pontos_fortes": [
            "Controle emocional",
            "Adaptação rápida a perigos"
        ],
        "pontos_fracos": [
            "Fobia de relâmpagos",
            "Dependência de luz lunar para magia"
        ],
        "historia": "Descrita como “filha da noite”, Morgana viaja por cidades esquecidas, vendendo segredos que só surgem sob o manto das estrelas.",
        "estado_civil": "Solteira",
        "aparencia": {
            "raça": "Feérica sombria",
            "cor_de_pele": "Cinza suave com veios prateados",
            "cabelo": "Roxo escuro, longo e liso",
            "cor_dos_olhos": "Violetas, cintilam sob luar",
            "cicatrizes": [
                "Traço fino no pulso esquerdo — ritual feérico"
            ],
            "tatuagens": [
                "Runas de ocultismo nos ombros"
            ]
        }
    },
    {
        "id": "char-017",
        "nome": "Drogash Flintfist",
        "genero": "Masculino",
        "idade": "56 anos",
        "personalidade": "Barulhento, jovial e teimoso — ama uma boa cerveja e uma caçada.",
        "gostos": [
            "Geleiras congeladas",
            "Cerveja de raiz espessa",
            "Contar piadas de batalha"
        ],
        "hobbies": [
            "Mineração noturna",
            "Competir em provas de força",
            "Esculpir runas em pedra"
        ],
        "habilidades": [
            "Força colossal",
            "Domínio de machado duplo",
            "Resistência ao frio extremo"
        ],
        "curiosidades": [
            "Sobreviveu 7 dias sob avalanche",
            "É amigo de um urso polar chamado Gelo"
        ],
        "pontos_fortes": [
            "Bravura inata",
            "Corpo indestrutível"
        ],
        "pontos_fracos": [
            "Impulsividade extrema",
            "Falta de paciência"
        ],
        "historia": "Drogash é um lendário caçador de montanhas que protege as rotas de caravanas contra trolls glaciares.",
        "estado_civil": "Viúvo",
        "aparencia": {
            "raça": "Anão da neve",
            "cor_de_pele": "Branco-leitoso tingido de azul",
            "cabelo": "Branco-acinzentado, muito comprido e trançado",
            "cor_dos_olhos": "Azuis gelados",
            "cicatrizes": [
                "Marcas profundas no torso — cicatrizes de garras de troll"
            ],
            "tatuagens": [
                "Símbolos de glória esculpidos nos braços"
            ]
        }
    },
    {
        "id": "char-018",
        "nome": "Seraphine Starfall",
        "genero": "Feminino",
        "idade": "22 anos",
        "personalidade": "Sonhadora, gentil e curiosa — busca beleza até nos lugares mais sombrios.",
        "gostos": [
            "Chuva de meteoros",
            "Música de flauta etérea",
            "Cristais cintilantes"
        ],
        "hobbies": [
            "Pintar constelações em tapeçarias",
            "Cantar antigos hinos celestiais",
            "Colher pó de estrela ao amanhecer"
        ],
        "habilidades": [
            "Magia celeste",
            "Canção de cura",
            "Percepção astral"
        ],
        "curiosidades": [
            "Afirma ter vindo de outra estrela",
            "Dormiu no vazio entre mundos por uma noite"
        ],
        "pontos_fortes": [
            "Empatia mágica",
            "Introspecção profunda"
        ],
        "pontos_fracos": [
            "Saudade do que não conhece",
            "Falta de força física"
        ],
        "historia": "Diz-se que Seraphine caiu do céu em uma noite estrelada e agora viaja para compreender a conexão entre sonhos e realidade.",
        "estado_civil": "Solteira",
        "aparencia": {
            "raça": "Celestial descendente",
            "cor_de_pele": "Perolada com brilho suave",
            "cabelo": "Prateado, flutuante como se no espaço",
            "cor_dos_olhos": "Dourados, como estrelas cadentes",
            "cicatrizes": [
                "Nenhuma"
            ],
            "tatuagens": [
                "Constelações pintadas nos ombros"
            ]
        }
    }
]
        const container = document.querySelector('.card-container');

        personagens.forEach(p => {
            const card = document.createElement('div');
            card.className = 'card-personagem';

            card.innerHTML = `
        <details>
          <summary>${p.nome}</summary>
          <div class="content">
            <p><strong>Gênero:</strong> ${p.genero} <br> <strong>Idade:</strong> ${p.idade}</p>
            <p><strong>Personalidade:</strong> ${p.personalidade}</p>
            <p><strong>Gostos:</strong> ${p.gostos.join(', ')}</p>
            <p><strong>Hobbies:</strong> ${p.hobbies.join(', ')}</p>
            <p><strong>Habilidades:</strong> ${p.habilidades.join(', ')}</p>
            <p><strong>Curiosidades:</strong> ${p.curiosidades.join(', ')}</p>
            <p><strong>Pontos Fortes:</strong> ${p.pontos_fortes.join(', ')}</p>
            <p><strong>Pontos Fracos:</strong> ${p.pontos_fracos.join(', ')}</p>
            <p><strong>História:</strong> ${p.historia}</p>
            <p><strong>Estado Civil:</strong> ${p.estado_civil}</p>
            <hr>
            <p><strong>Raça:</strong> ${p.aparencia.raça}</p>
            <p><strong>Pele:</strong> ${p.aparencia.cor_de_pele}</p>
            <p><strong>Cabelo:</strong> ${p.aparencia.cabelo}</p>
            <p><strong>Olhos:</strong> ${p.aparencia.cor_dos_olhos}</p>
            <p><strong>Cicatrizes:</strong> ${p.aparencia.cicatrizes.join(', ')}</p>
            <p><strong>Tatuagens:</strong> ${p.aparencia.tatuagens.join(', ')}</p>
          </div>
        </details>
      `;

            container.appendChild(card);
        });
