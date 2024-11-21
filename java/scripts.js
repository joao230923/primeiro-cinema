document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("commentForm");
    const commentInput = document.getElementById("comment");
    const commentList = document.querySelector("#commentList ul");
  
    // Adicionar evento de submissão do formulário
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Evita o recarregamento da página
  
      // Obtém o valor do campo de comentário
      const commentText = commentInput.value.trim();
  
      if (commentText) {
        // Cria um novo elemento <li> para o comentário
        const newComment = document.createElement("li");
        newComment.textContent = commentText;
  
        // Adiciona o comentário à lista
        commentList.appendChild(newComment);
  
        // Limpa o campo de entrada
        commentInput.value = "";
      } else {
        alert("Por favor, insira um comentário válido!");
      }
    });
  });
  