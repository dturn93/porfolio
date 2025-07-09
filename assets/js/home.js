document.addEventListener("DOMContentLoaded", function () {
    const runCodeBtn = document.getElementById('runCodeBtn');
    const intro = document.querySelector('.intro-text');
    const codeOutput = document.querySelector('.code-output');
    const typedText = document.getElementById('typedText');
    const caret = document.querySelector('.caret');

    runCodeBtn.addEventListener('click', () => {
        gsap.to(intro, {
            duration: 0.5,
            opacity: 0.1,
            scale: 0.4,
            rotateX: 20,
            ease: "power1.out",
            onComplete: () => {
              intro.style.display = "none";
              codeOutput.classList.remove("d-none");

                // Hide caret at first
                caret.classList.add('hidden');

                // Show caret after 1 second
                setTimeout(() => {
                    caret.classList.remove('hidden');
                }, 500);

                const code = `
// Starting the show...
function greet() {
    console.log("Welcome to my portfolio!");
}
greet();`;

                typedText.textContent = '';
                let i = 0;

                const typeInterval = setInterval(() => {
                    if (i < code.length) {
                        typedText.textContent += code[i];
                        i++;
                    } else {
                        clearInterval(typeInterval);
                    }
                }, 30);
            }
        });
    });
});