const formContainer = document.querySelector('.form-container');
const agree = document.querySelector('#btn-acept');
const reject = document.querySelector('#btn-reject');
const criacaoContainer = document.querySelector('#criar');


formContainer.style.display = 'none';

agree.addEventListener('click', function () {
    criacaoContainer.style.display = 'none';
    formContainer.style.display = 'flex';
    formContainer.innerHTML = `
    <h1>Personagem</h1>

    <label for="nome">Nome:</label>
    <input type="text" id="nome" placeholder="Digite o nome do herói" autocomplete="off" required>

    <label for="genero">Gênero:</label>
    <select id="genero" required>
        <option selected disabled>Escolha o gênero</option>
        <option>Feminino</option>
        <option>Masculino</option>
        <option>Outro</option>
    </select>

    <label for="classe">Classe:</label>
    <select id="classe" required>
        <option selected disabled>Escolha sua classe</option>
        <option>Guerreiro</option>
        <option>Mago</option>
        <option>Arqueiro</option>
        <option>Samurai</option>
        <option>Curandeiro</option>
        <option>Ladrão</option>
        <option>Nômade</option>
        <option>Profeta</option>
    </select>

    <label for="idade">Idade:</label>
    <input type="number" id="idade" min="1" max="999" placeholder="Ex: 16" autocomplete="off" required>

    <label for="personalidade">Personalidade:</label>
    <textarea id="personalidade" placeholder="Descreva a personalidade" required></textarea>

    <label for="gostos">Gostos (separe por vírgulas):</label>
    <input type="text" id="gostos" placeholder="Ex: Canções ao luar, Jardinagem de ervas, Pintura de vitrais" required>

    <label for="hobbies">Hobbies (separe por vírgulas):</label>
    <input type="text" id="hobbies" placeholder="Ex: Preparar chás, Desenhar constelações, Canto litúrgico" required>

    <label for="habilidades">Habilidades (separe por vírgulas):</label>
    <input type="text" id="habilidades" placeholder="Ex: Leitura de estrelas, Botânica, Canto coral" required>

    <label for="pontosFortes">Pontos fortes (separe por vírgulas):</label>
    <input type="text" id="pontosFortes" placeholder="Ex: Empatia profunda, Visão de padrões ocultos" required>

    <label for="pontosFracos">Pontos fracos (separe por vírgulas):</label>
    <input type="text" id="pontosFracos" placeholder="Ex: Física frágil, Medo de escuro" required>

    <label for="curiosidades">Curiosidades (separe por vírgulas):</label>
    <input type="text" id="curiosidades" placeholder="Ex: Nascida durante chuva de meteoros, Sensibilidade a sonhos" required>

    <label for="historia">História:</label>
    <textarea id="historia" placeholder="Conte a história do personagem" required></textarea>

    <h1>Aparência</h1>

    <label for="raca">Raça:</label>
    <input type="text" id="raca" placeholder="Ex: Humana" required>

    <label for="pele">Cor da pele:</label>
    <input type="text" id="pele" placeholder="Ex: Pele clara com brilho perolado" required>

    <label for="cabelo">Cabelo (descrição):</label>
    <input type="text" id="cabelo" placeholder="Ex: Loiro-prateado, longo e sedoso" required>

    <label for="olhos">Cor dos olhos:</label>
    <select id="olhos" required>
        <option selected disabled>Escolha a cor</option>
        <option value="vermelho">Vermelho</option>
        <option value="preto">Preto</option>
        <option value="castanho">Castanho</option>
        <option value="branco">Branco</option>
        <option value="verde">Verde</option>
        <option value="amarelo">Amarelo</option>
        <option value="roxo">Roxo</option>
        <option value="rosa">Rosa</option>
        <option value="azul">Azul</option>
    </select>

    <label for="cicatrizes">Cicatrizes (separe por vírgulas ou "Nenhuma"):</label>
    <input type="text" id="cicatrizes" placeholder="Ex: Cicatriz na sobrancelha esquerda, Nenhuma" required>

    <label for="tatuagens">Tatuagens (separe por vírgulas ou "Nenhuma"):</label>
    <input type="text" id="tatuagens" placeholder="Ex: Dragão no braço direito, Nenhuma" required>

    <button id="criar">Criar Personagem</button>
`;
})

formContainer.addEventListener('submit', function (e) {
    e.preventDefault();
    const personagem = {
        nome: document.getElementById('nome').value,
        genero: document.getElementById('genero').value,
        classe: document.getElementById('classe').value,
        idade: document.getElementById('idade').value,
        personalidade: document.getElementById('personalidade').value,
        gostos: document.getElementById('gostos').value.split(',').map(s => s.trim()),
        hobbies: document.getElementById('hobbies').value.split(',').map(s => s.trim()),
        habilidades: document.getElementById('habilidades').value.split(',').map(s => s.trim()),
        pontosFortes: document.getElementById('pontosFortes').value.split(',').map(s => s.trim()),
        pontosFracos: document.getElementById('pontosFracos').value.split(',').map(s => s.trim()),
        curiosidades: document.getElementById('curiosidades').value.split(',').map(s => s.trim()),
        historia: document.getElementById('historia').value,
        aparencia: {
            raca: document.getElementById('raca').value,
            cor_de_pele: document.getElementById('pele').value,
            cabelo: document.getElementById('cabelo').value,
            cor_dos_olhos: document.getElementById('olhos').value,
            cicatrizes: document.getElementById('cicatrizes').value.split(',').map(s => s.trim()),
            tatuagens: document.getElementById('tatuagens').value.split(',').map(s => s.trim())
        }
    };

    localStorage.setItem('protagonista', JSON.stringify(personagem));
    alert('Personagem salvo no navegador! 🚀');
    const personagemSalvo = JSON.parse(localStorage.getItem('protagonista'));
console.log(personagemSalvo);

});

reject.addEventListener('click', function () {
    window.location = 'index.html';
})

const personagemSalvo = JSON.parse(localStorage.getItem('protagonista'));
console.log(personagemSalvo);