 // Contagem Regressiva
 const eventDate = new Date('2024-12-25T00:00:00').getTime();
 const timerElement = document.getElementById('timer');
 const intervalId = setInterval(() => { // Salvar o ID do intervalo
     const now = new Date().getTime();
     const timeLeft = eventDate - now;

     const hours = String(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
     const minutes = String(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
     const seconds = String(Math.floor((timeLeft % (1000 * 60)) / 1000)).padStart(2, '0');

     timerElement.innerHTML = `${hours}:${minutes}:${seconds}`;

     if (timeLeft < 0) {
         clearInterval(intervalId); // Interromper o intervalo quando o tempo acabar
         timerElement.innerHTML = "Evento Iniciado!";
     }
 }, 1000);