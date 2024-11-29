document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("commentForm");
  const commentInput = document.getElementById("comment");
  const commentList = document.querySelector("#commentList ul");

  // Função para carregar comentários do localStorage
  const loadComments = () => {
    const storedComments = JSON.parse(localStorage.getItem("comments")) || [];
    storedComments.forEach((commentText) => {
      const commentItem = document.createElement("li");
      commentItem.textContent = commentText;
      commentList.appendChild(commentItem);
    });
  };

  // Função para salvar um comentário no localStorage
  const saveComment = (commentText) => {
    const storedComments = JSON.parse(localStorage.getItem("comments")) || [];
    storedComments.push(commentText);
    localStorage.setItem("comments", JSON.stringify(storedComments));
  };

  // Carregar comentários ao iniciar
  loadComments();

  // Adicionar evento de submissão do formulário
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita o recarregamento da página

    const commentText = commentInput.value.trim();

    if (commentText) {
      // Cria um novo elemento <li> para o comentário
      const newComment = document.createElement("li");
      newComment.textContent = commentText;

      // Adiciona o comentário à lista
      commentList.appendChild(newComment);

      // Salva o comentário no localStorage
      saveComment(commentText);

      // Limpa o campo de entrada
      commentInput.value = "";
    } else {
      alert("Por favor, insira um comentário válido!");
    }
  });
});
