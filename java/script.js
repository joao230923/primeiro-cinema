// Show Video by Tab
function showVideo(videoId) {
    // Hide all videos
    const videos = document.querySelectorAll('.video-tab');
    videos.forEach(video => video.style.display = 'none');
    
    // Show the selected video
    const selectedVideo = document.getElementById(videoId);
    selectedVideo.style.display = 'block';
    
    // Update the tab buttons to highlight the active one
    const tabs = document.querySelectorAll('.tab-button');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Add active class to the clicked tab
    const activeTab = Array.from(tabs).find(tab => tab.innerText.toLowerCase().includes(videoId.split('-')[1]));
    if (activeTab) {
        activeTab.classList.add('active');
    }
}
function openModal(){
    const modal = document.getElementById('modal-container')
    modal.classList.add('mostrar')

    modal.addEventListener('click', (e) =>{
        if (e.target.id == 'modal-' || e.target.id == "fechar"){
            modal.classList.remove('mostrar')
            localStorage.fechaModal = 'modal-container'
        }
    })
}// Detalhes dos personagens
const actorDetails = {
    batman: {
      title: "Batman - Ben Affleck",
      description:
        "Bruce Wayne, também conhecido como Batman, é o vigilante de Gotham City. Motivado pela tragédia de perder os pais, ele usa sua inteligência e recursos para combater o crime.",
    },
    "wonder-woman": {
      title: "Mulher-Maravilha - Gal Gadot",
      description:
        "Diana Prince é uma amazona da ilha de Themyscira. Dotada de força e coragem, ela luta pela justiça como a Mulher-Maravilha.",
    },
    aquaman: {
      title: "Aquaman - Jason Momoa",
      description:
        "Arthur Curry, o Aquaman, é o herdeiro do reino subaquático de Atlântida. Ele luta para proteger os oceanos e unir dois mundos.",
    },
    flash: {
      title: "Flash - Ezra Miller",
      description:
        "Barry Allen, conhecido como Flash, é o homem mais rápido do mundo. Ele usa sua supervelocidade para combater o crime e salvar vidas.",
    },
    cyborg: {
      title: "Ciborgue - Ray Fisher",
      description:
        "Victor Stone, o Ciborgue, é um jovem transformado em um super-herói cibernético após um acidente. Ele é parte homem, parte máquina e completamente herói.",
    },
  };
  
  // Abrir modal de personagens
  function openActorModal(actor) {
    const modal = document.getElementById("actor-modal");
    const title = document.getElementById("actor-title");
    const description = document.getElementById("actor-description");
  
    // Atualiza conteúdo do modal
    title.innerText = actorDetails[actor].title;
    description.innerText = actorDetails[actor].description;
  
    // Exibe o modal
    modal.style.display = "flex";
  }
  
  // Fechar modal de personagens
  function closeActorModal() {
    const modal = document.getElementById("actor-modal");
    modal.style.display = "none";
  }
  
