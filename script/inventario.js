const armas = [
    {
        "nome": "Faca",
        "tipo": "Corpo a corpo",
        "dano": 200,
        "level": 3,
        "raridade": "Comum",
        "velocidadeAtaque": "Rápida",
        "durabilidade": 50,
        "efeitos": [
            "Sangramento leve"
        ],
        "imagem": "assets/armas/faca.png",
        "descricao": "Uma faca simples, útil para ataques rápidos e silenciosos."
    },
    {
        "nome": "Espada Longa",
        "tipo": "Corpo a corpo",
        "dano": 500,
        "level": 5,
        "raridade": "Rara",
        "velocidadeAtaque": "Média",
        "durabilidade": 120,
        "efeitos": [
            "Empurrão leve"
        ],
        "imagem": "https://png.pngtree.com/png-vector/20250515/ourmid/pngtree-pixel-art-sword-weapon-graphic-design-game-vector-png-image_16283398.png",
        "descricao": "Espada equilibrada para guerreiros experientes."
    },
    {
        "nome": "Arco de Caça",
        "tipo": "Distância",
        "dano": 350,
        "level": 4,
        "raridade": "Comum",
        "velocidadeAtaque": "Média",
        "durabilidade": 80,
        "efeitos": [
            "Perfuração"
        ],
        "imagem": "assets/armas/arco.png",
        "descricao": "Ideal para caçadas e combates furtivos."
    },
    {
        "nome": "Machado de Batalha",
        "tipo": "Corpo a corpo",
        "dano": 700,
        "level": 10,
        "raridade": "Lendária",
        "velocidadeAtaque": "Lenta",
        "durabilidade": 100,
        "efeitos": [
            "Quebra escudo"
        ],
        "imagem": "assets/armas/machado.gif",
        "descricao": "Machado pesado que destrói armaduras e escudos com facilidade."
    },
    {
        "nome": "Cajado Arcano",
        "tipo": "Mágica",
        "dano": 600,
        "level": 7,
        "raridade": "Lendária",
        "velocidadeAtaque": "Média",
        "durabilidade": 60,
        "efeitos": [
            "Dano elemental (fogo)",
            "Queima ao longo do tempo"
        ],
        "imagem": "assets/armas/cajado.png",
        "descricao": "Canaliza poder arcano para ataques devastadores."
    },
    {
        "nome": "Katana Sangrenta",
        "tipo": "Corpo a corpo (Katana)",
        "dano": 800,
        "level": 10,
        "raridade": "Lendária",
        "velocidadeAtaque": "Rápida",
        "durabilidade": 100,
        "efeitos": [
            "Acúmulo de sangramento acelerado",
            "Dano extra ao longo do tempo",
            "Corte em área"
        ],
        "descricao": "Uma katana banhada em sangue amaldiçoado, sedenta por mais vítimas. Seus golpes rasgam carne e armadura com igual facilidade, espalhando hemorragia ao redor.",
        "imagem": "assets/armas/katana.png"
    }
]

const amuletos = [
    {
        "nome": "Amuleto da Vida",
        "tipo": "Defesa",
        "bonus": "+50% regeneração de vida",
        "level": 4,
        "raridade": "Raro",
        "durabilidade": 100,
        "efeitos": [
            "Regenera 5% da vida a cada 10 segundos",
            "Resistência leve a veneno"
        ],
        "imagem": "assets/amuletos/vida.png",
        "descricao": "Um amuleto antigo que pulsa com energia vital, mantendo o portador vivo em situações críticas."
    },
    {
        "nome": "Amuleto da Fúria",
        "tipo": "Ataque",
        "bonus": "+20% dano corpo a corpo",
        "level": 6,
        "raridade": "Épico",
        "durabilidade": 80,
        "efeitos": [
            "Aumenta o dano após receber ataque",
            "Velocidade de ataque +10% quando com pouca vida"
        ],
        "imagem": "assets/amuletos/furia.png",
        "descricao": "Canaliza a fúria do portador, transformando dor em força bruta nos combates."
    },
    {
        "nome": "Amuleto Arcano",
        "tipo": "Mágica",
        "bonus": "+30% dano mágico",
        "level": 8,
        "raridade": "Lendário",
        "durabilidade": 60,
        "efeitos": [
            "Reduz o custo de mana em 15%",
            "Aumenta alcance dos feitiços"
        ],
        "imagem": "assets/amuletos/arcano.png",
        "descricao": "Um amuleto raro usado por magos antigos para ampliar seus poderes arcanos."
    },
    {
        "nome": "Amuleto da Sombra",
        "tipo": "Furtividade",
        "bonus": "+40% chance de crítico em ataques furtivos",
        "level": 5,
        "raridade": "Raro",
        "durabilidade": 90,
        "efeitos": [
            "Diminui chance de ser detectado em 25%",
            "Movimento silencioso"
        ],
        "imagem": "assets/amuletos/sombra.png",
        "descricao": "Forjado nas trevas, este amuleto torna seu portador uma sombra entre os inimigos."
    }
];


const equipamentos = [{}];

const itens = [{}];


let armasAdquiridas;
let equipamentosAdquiridos;
let amuletosAdquiridos;
let itensAdquiridos;

let equipado = [];
let espacoArmas = [];
let espacoAmuletos = [];
let espacoEquipamentos = [];

const containerArmas = document.querySelector('.armas-container');
const containerAmuletos = document.querySelector('.amuletos-container')
const containerEquipamentos = document.querySelector('.equipamentos-container')
const containerItens = document.querySelector('.itens-container')


armas.forEach(arma => {
    const details = document.createElement('details');
    details.className = 'card';

    const summary = document.createElement('summary');
    summary.innerHTML = `
        <img src="${arma.imagem}" alt="${arma.nome}">
        <h2>${arma.nome}</h2>
    `;

    const caracteristicas = document.createElement('div');
    caracteristicas.className = 'caracteristicas';
    caracteristicas.innerHTML = `
        <p><strong>Tipo:</strong> ${arma.tipo}</p>
        <p><strong>Dano:</strong> ${arma.dano}</p>
        <p><strong>Level:</strong> ${arma.level}</p>
        <p><strong>Raridade:</strong> ${arma.raridade}</p>
        <p><strong>Velocidade de Ataque:</strong> ${arma.velocidadeAtaque}</p>
        <p><strong>Durabilidade:</strong> ${arma.durabilidade}</p>
        <p><strong>Efeitos:</strong></p>
    `;

    const ul = document.createElement('ul');
    arma.efeitos.forEach(efeito => {
        const li = document.createElement('li');
        li.textContent = efeito;
        ul.appendChild(li);
    });
    caracteristicas.appendChild(ul);

    const descricao = document.createElement('p');
    descricao.innerHTML = `<strong>Descrição:</strong> ${arma.descricao}`;
    caracteristicas.appendChild(descricao);

    details.appendChild(summary);
    details.appendChild(caracteristicas);
    containerArmas.appendChild(details);
});

amuletos.forEach(amu => {
    const details = document.createElement('details');
    details.className = 'card';

    const summary = document.createElement('summary');
    summary.innerHTML = `
        <img src="${amu.imagem}" alt="${amu.nome}">
        <h2>${amu.nome}</h2>
    `;

    const caracteristicas = document.createElement('div');
    caracteristicas.className = 'caracteristicas';
    caracteristicas.innerHTML = `
        <p><strong>Tipo:</strong> ${amu.tipo}</p>
        <p><strong>Bônus:</strong> ${amu.bonus}</p>
        <p><strong>Level:</strong> ${amu.level}</p>
        <p><strong>Raridade:</strong> ${amu.raridade}</p>
        <p><strong>Durabilidade:</strong> ${amu.durabilidade}</p>
        <p><strong>Efeitos:</strong></p>
    `;

    const ul = document.createElement('ul');
    amu.efeitos.forEach(efeito => {
        const li = document.createElement('li');
        li.textContent = efeito;
        ul.appendChild(li);
    });
    caracteristicas.appendChild(ul);

    const descricao = document.createElement('p');
    descricao.innerHTML = `<strong>Descrição:</strong> ${amu.descricao}`;
    caracteristicas.appendChild(descricao);

    details.appendChild(summary);
    details.appendChild(caracteristicas);
    containerAmuletos.appendChild(details);
});

