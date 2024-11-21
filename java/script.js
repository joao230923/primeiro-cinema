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
}
