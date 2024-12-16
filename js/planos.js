document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".planos .btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const planoEscolhido = button.closest(".plano").querySelector("h2").textContent;

            if (planoEscolhido) {
                // Redirecionar para a página de pagamento
                window.location.href = `pagamento.html?plano=${encodeURIComponent(planoEscolhido)}`;
            }
        });
    });
});
