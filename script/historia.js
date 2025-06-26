const header = document.querySelector('#header-historia');
const btnA = document.querySelector('#iniciar');
const containerInit = document.querySelector('#iniciar-container')

const personagemSalvo = JSON.parse(localStorage.getItem('protagonista'));
const aviso = document.querySelector('#aviso')
const historiaIniciada = JSON.parse(localStorage.getItem('iniciada'));

btnA.addEventListener('click', function () {
    if (personagemSalvo) {
        header.style.display = 'none';
        containerInit.style.display = 'none';
        localStorage.setItem('iniciada', true);

    } else {
        aviso.innerHTML = 'Você ainda não criou seu personagem (aperte "c" para criar seu personagem ou vá até a seção de criação)"';
    }
})

if (historiaIniciada && personagemSalvo) {
    header.style.display = 'none';
    containerInit.style.display = 'none';
}

const apresentacao = ['Olá, seja bem vindo ao Fios do destino']