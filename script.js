const surpriseBtn = document.getElementById('surpriseBtn');
const birthdayContent = document.getElementById('birthdayContent');

surpriseBtn.addEventListener('click', () => {
    // Confetti burst
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Show the content
    birthdayContent.classList.remove('hidden');
    
    // Animate rows appearing one by one
    const rows = document.querySelectorAll('.row');
    rows.forEach((row, index) => {
        setTimeout(() => {
            row.style.opacity = "1";
            row.style.transform = "translateY(0)";
        }, index * 300); // 300ms delay between each row
    });

    // Hide button
    surpriseBtn.style.display = "none";
});