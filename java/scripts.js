document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("commentForm");
  const commentInput = document.getElementById("comment");
  const commentList = document.querySelector("#commentList ul");

  // Função para carregar comentários do localStorage
  const loadComments = () => {
    const storedComments = JSON.parse(localStorage.getItem("comments")) || [];
    storedComments.forEach((commentText) => {
      addCommentToDOM(commentText);
    });
  };

  // Função para adicionar comentário no DOM
  const addCommentToDOM = (commentText) => {
    const commentItem = document.createElement("li");
    commentItem.textContent = commentText;
    commentList.appendChild(commentItem);
  };

  // Função para salvar comentário no localStorage
  const saveComment = (commentText) => {
    const storedComments = JSON.parse(localStorage.getItem("comments")) || [];
    storedComments.push(commentText);
    localStorage.setItem("comments", JSON.stringify(storedComments));
  };

  // Carregar comentários ao iniciar a página
  loadComments();

  // Evento de envio do formulário
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita o recarregamento da página

    const commentText = commentInput.value.trim();
    if (commentText) {
      addCommentToDOM(commentText); // Adiciona ao DOM
      saveComment(commentText); // Salva no localStorage
      commentInput.value = ""; // Limpa o campo
    } else {
      alert("Por favor, insira um comentário válido!");
    }
  });
});
