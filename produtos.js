// Função para buscar livros na Google Books API
async function fetchLivros(query) {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=6`);
    if (!response.ok) {
        throw new Error("Erro ao carregar os produtos. Tente novamente mais tarde.");
    }
    const data = await response.json();
    return data.items;
}

// Função para renderizar os livros na página
function renderLivros(livros) {
    const container = document.getElementById("produtos-container");
    container.innerHTML = ''; // Limpa o container

    livros.forEach(livro => {
        const { title, authors, imageLinks } = livro.volumeInfo;
        
        // Cria o card do livro
        const card = document.createElement("div");
        card.classList.add("card");

        // Adiciona imagem da capa
        const img = document.createElement("img");
        img.src = (imageLinks && imageLinks.thumbnail) ? imageLinks.thumbnail : 'images/livrosdeitados.jpg';
        img.alt = title;

        // Adiciona título
        const titulo = document.createElement("h3");
        titulo.textContent = title;

        // Adiciona autor
        const autor = document.createElement("p");
        autor.textContent = `Autor: ${authors ? authors.join(', ') : 'Desconhecido'}`;

        // Monta o card
        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(autor);
        container.appendChild(card);
    });
}

// Inicialização
fetchLivros("livros").then(livros => renderLivros(livros));
