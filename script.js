document.addEventListener('DOMContentLoaded', function() {
    // Defina a data e hora alvo para a próxima sexta-feira às 18h em Lisboa, Portugal (WEST/WET)
    // ATENÇÃO: Verifique o fuso horário correto para a data específica. Portugal utiliza WEST (UTC+1) no verão.
    // 25 de julho de 2025 é uma sexta-feira.
    const vacationDate = new Date('July 25, 2025 18:00:00 GMT+0100'); // GMT+0100 para WEST (Lisboa no verão)

    const daysSpan = document.getElementById('days');
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');
    const message = document.getElementById('message');
    const vacationGif = document.getElementById('vacation-gif');

    function updateCountdown() {
        const now = new Date();
        const timeLeft = vacationDate - now;

        if (timeLeft <= 0) {
            message.textContent = "FINALMENTE! Férias! 🎉🏖️☀️";
            vacationGif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazMwNXpwcHF0Z2V1NWVqZmQ3eW92NnJnbG92cjY0c2E2Z3I1c3BxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o7rhX2qEa0wKqfE7qV/giphy.gif"; // Um GIF de férias!
            document.getElementById('countdown').style.display = 'none'; // Esconde o contador
            clearInterval(countdownInterval);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        daysSpan.textContent = String(days).padStart(2, '0');
        hoursSpan.textContent = String(hours).padStart(2, '0');
        minutesSpan.textContent = String(minutes).padStart(2, '0');
        secondsSpan.textContent = String(seconds).padStart(2, '0');
    }

    // Atualiza o contador a cada segundo
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Chama a função uma vez imediatamente para evitar atraso inicial
    updateCountdown();
});