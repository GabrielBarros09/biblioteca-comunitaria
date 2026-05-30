const API_URL = "http://localhost:8000/livros";

const resultadosBusca = document.getElementById("resultadosBusca");

async function carregarLivros() {

    const resposta = await fetch(API_URL);

    const livros = await resposta.json();

    resultadosBusca.innerHTML = "";

    exibirLivros(livros);
}

function exibirLivros(livros) {

    livros.forEach(livro => {

        const card = document.createElement("div");
        card.classList.add("card-livro");

        const img = document.createElement("img");
        img.setAttribute("src", livro.imagem);

        const titulo = document.createElement("h3");
        titulo.textContent = livro.titulo;

        const autor = document.createElement("p");
        autor.textContent = `Autor: ${livro.autor}`;

        const status = document.createElement("p");
        status.classList.add("status");

        if (livro.disponivel) {
            status.textContent = "Disponível";
            status.classList.add("disponivel");
        } else {
            status.textContent = "Indisponível";
            status.classList.add("indisponivel");
        }

        const botao = document.createElement("button");
        botao.textContent = "Reservar";
        botao.setAttribute("data-id", livro.id);

        if (!livro.disponivel) {
            botao.disabled = true;
            botao.textContent = "Indisponível";
        }

        botao.addEventListener("click", async () => {

            try {

                const resposta = await fetch(
                    `${API_URL}/${livro.id}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            titulo: livro.titulo,
                            autor: livro.autor,
                            imagem: livro.imagem,
                            disponivel: false
                        })
                    }
                );

                if (!resposta.ok) {
                    throw new Error("Erro ao reservar livro");
                }

                await carregarLivros();

                console.log(`Livro reservado: ${livro.titulo}`);

            } catch (erro) {

                console.error(erro);

                alert("Não foi possível reservar o livro.");
            }

        });

        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(autor);
        card.appendChild(status);
        card.appendChild(botao);

        resultadosBusca.appendChild(card);
    });
}

carregarLivros();