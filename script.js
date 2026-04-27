// arrays de objetos
const livrosEncontrados = [
    { 
        id: 1, 
        titulo: "Diário de um Banana (Um)", 
        autor: "Jeff Kinney", 
        disponivel: true,
        imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_655974-MLU50516803001_062022-F.webp" 
    },
    { 
        id: 2, 
        titulo: "Rodrick é o Cara (Dois)", 
        autor: "Jeff Kinney", 
        disponivel: false,
        imagem: "https://m.media-amazon.com/images/I/71+fh2vstSL._SY522_.jpg" 
    },
    { 
        id: 3, 
        titulo: "A Gota D'Água (Três)", 
        autor: "Jeff Kinney", 
        disponivel: true,
        imagem: "https://m.media-amazon.com/images/I/81T9BY8yEnL._SY522_.jpg" 
    },
    { 
        id: 4, 
        titulo: "Dias de Cão (Quatro)", 
        autor: "Jeff Kinney", 
        disponivel: true,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/0/0c/Dias-de-cao.jpg" 
    }
];

// elementos do dom
const containerResultados = document.getElementById('resultadosBusca');

// exibe os livro
function exibirLivros(livros) {
    // limpa container 
    containerResultados.innerHTML = "";

    livros.forEach(livro => {
        const card = document.createElement('div');
        card.classList.add('card-livro');

        // criando a imagem do livro
        const img = document.createElement('img');
        img.src = livro.imagem;
        img.alt = `Capa do livro ${livro.titulo}`;
        img.classList.add('capa-livro');

        const titulo = document.createElement('h3');
        titulo.textContent = livro.titulo;

        const autor = document.createElement('p');
        autor.classList.add('autor');
        autor.textContent = livro.autor;

        const status = document.createElement('p');
        status.classList.add('status');
        
        const botao = document.createElement('button');
        botao.setAttribute('data-id', livro.id);

        if (livro.disponivel) {
            status.textContent = "Disponível";
            status.classList.add('disponivel');
            botao.textContent = "Reservar";
        } else {
            status.textContent = "Indisponível";
            status.classList.add('indisponivel');
            botao.textContent = "Indisponível";
            botao.disabled = true;
        }

        botao.addEventListener('click', () => {
            livro.disponivel = false;

            botao.textContent = "Reservado!";
            botao.disabled = true;

            status.textContent = "Indisponível";
            status.classList.remove('disponivel');
            status.classList.add('indisponivel');

            console.log(`Sucesso: O livro "${livro.titulo}" agora está Indisponível.`);
        });

        // Adiciona a imagem antes do título para seguir o padrão visual
        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(autor);
        card.appendChild(status);
        card.appendChild(botao);

        containerResultados.appendChild(card);
    });
}

exibirLivros(livrosEncontrados);