document.addEventListener('keydown', function (e) {
    const tecla = e.key.toLowerCase();
    if (tecla === 'i') {
        window.location.href = 'inventario.html';
    } else if (tecla === 'o') {
        window.location.href = 'atributos.html'
    } else if (tecla === 'q') {
        window.location.href = 'index.html'
    } else if (tecla === 'h') {
        window.location.href = 'historia.html'
    } else if (tecla === 'p') {
        window.location.href = 'progresso.html'
    } else if (tecla === 'c') {
        window.location.href = 'criacao.html'
    } else if (tecla === 'g') {
        window.location.href = 'gerenciador.html'
    }
});