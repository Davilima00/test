document.getElementById('askButton').addEventListener('click', function() {
    const messageElement = document.getElementById('message');
    messageElement.textContent = 'Você quer namorar comigo? 💖';
    
    const responseButtons = document.getElementById('responseButtons');
    responseButtons.classList.remove('hidden');
});

document.getElementById('yesButton').addEventListener('click', function() {
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = 'Você fez meu dia mais feliz! 💕';
});

