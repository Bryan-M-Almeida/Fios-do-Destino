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
            "<li>Empurrão leve</li>"
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
            "<li>Perfuração</li>"
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
            "<li>Dano elemental (fogo)</li>",
            "<li>Queima ao longo do tempo</li>"
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
            "<li>Acúmulo de sangramento acelerado</li>",
            "<li>Dano extra ao longo do tempo</li>",
            "<li>Corte em área</li>"
        ],
        "descricao": "Uma katana banhada em sangue amaldiçoado, sedenta por mais vítimas. Seus golpes rasgam carne e armadura com igual facilidade, espalhando hemorragia ao redor.",
        "imagem": "assets/armas/katana.png"
    }
]

const amuletos = [{}];

const equipamentos = [{}];

const itens = [{}];


const containerArmas = document.querySelector('.armas-container');
armas.forEach(arma => {
    const card = document.createElement('details');
    card.className = 'card';
    card.innerHTML = `
                    <summary>
                        <img src="${arma.imagem}" alt="">
                        <h2>${arma.nome}</h2>
                    </summary>
                    <div class="caracteristicas">
                        <p><strong>Tipo:</strong> ${arma.tipo}</p>
                        <p><strong>Dano:</strong> ${arma.dano}</p>
                        <p><strong>Level:</strong> ${arma.level}</p>
                        <p><strong>Raridade:</strong> ${arma.raridade}</p>
                        <p><strong>Velocidade de Ataque:</strong> ${arma.velocidadeAtaque}</p>
                        <p><strong>Durabilidade:</strong> ${arma.durabilidade}</p>
                        <p><strong>Efeitos:</strong></p>
                        <ul>
                        ${arma.efeitos.join('')}
                        </ul>
                        <p><strong>Descrição:</strong> ${arma.descricao}</p>
                    </div>
`;
    containerArmas.appendChild(card);
});