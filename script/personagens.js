fetch('data/personagens.json')
    .then(res => res.json())
    .then(personagens => {
        const container = document.querySelector('.card-container');

        personagens.forEach(p => {
            const card = document.createElement('div');
            card.className = 'card';

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
    })
    .catch(err => console.error('Erro ao carregar JSON:', err));
