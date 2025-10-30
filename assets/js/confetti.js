document.addEventListener('DOMContentLoaded', () => {
    const botonConfetti = document.getElementById('btn-confetti');

    botonConfetti.addEventListener('click', () => {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1b1', '#f9bec7']
        });
    });
});
