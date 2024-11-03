async function fetchTestemunhos() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=6');
        if (!response.ok) {
            throw new Error("Erro ao carregar os depoimentos. Tente novamente mais tarde.");
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Erro:", error);
        document.getElementById("testemunhos-container").innerHTML = "<p>Erro ao carregar os depoimentos. Tente novamente mais tarde.</p>";
        return null;
    }
}

function renderTestemunhos(testemunhos) {
    const container = document.getElementById("testemunhos-container");
    container.innerHTML = ''; // Limpa o container

    testemunhos.forEach(testemunho => {
        // Dados do cliente: nome e foto
        const { first, last } = testemunho.name;
        const { large: foto } = testemunho.picture;

        // Cria o card de testemunho
        const card = document.createElement("div");
        card.classList.add("testemunho-card");

        // Conteúdo do card
        card.innerHTML = `
            <img src="${foto}" alt="Foto de ${first} ${last}" class="testemunho-foto" />
            <h3>${first} ${last}</h3>
            <p>Recomendo para quem busca qualidade e diversidade em livros de diferentes formatos!</p>`;

        container.appendChild(card);
    });
}

// Carrega e exibe os testemunhos
document.addEventListener('DOMContentLoaded', function () {
    AOS.init();
    fetchTestemunhos().then(testemunhos => {
        if (testemunhos) {
            renderTestemunhos(testemunhos);
        }
    });
});






