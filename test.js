// Adicione um evento de clique ao botão de reprodução do vídeo
const playButton = document.getElementById('play-button');
playButton.addEventListener('click', function() {
    const videoFrame = document.querySelector('.video iframe');
    videoFrame.style.display = 'block';  // Exibe o vídeo quando o botão é clicado
    this.style.display = 'none';  // Oculta o botão
});

// Adicione uma mensagem de confirmação ao enviar o formulário de contato
const contactForm = document.querySelector('.contact-form form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();  // Impede o envio padrão do formulário
    alert('Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.');
});
