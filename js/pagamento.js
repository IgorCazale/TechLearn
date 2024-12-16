document.addEventListener("DOMContentLoaded", () => {
    const cardInput = document.getElementById("cartao");
    const bandeiraInput = document.getElementById("bandeira");
    const planoSelecionado = document.getElementById("planoSelecionado");

    // Pega o plano escolhido da URL
    const urlParams = new URLSearchParams(window.location.search);
    const plano = urlParams.get('plano');
    planoSelecionado.textContent = plano ? plano : "Plano não selecionado";

    cardInput.addEventListener("input", () => {
        const cardNumber = cardInput.value.replace(/\D/g, '');  // Remove todos os caracteres não numéricos

        if (cardNumber.length >= 13) {
            bandeiraInput.value = detectarBandeira(cardNumber);
        } else {
            bandeiraInput.value = "";
        }
    });

    // Função para detectar a bandeira do cartão
    function detectarBandeira(numero) {
        const bandeiras = {
            visa: /^4/,
            mastercard: /^(5[1-5]|2[2-7])/,
            elo: /^(4011|4312|4389)/,
            hipercard: /^(60|3840)/,
            americanExpress: /^3[47]/,
            dinersClub: /^3(?:0[0-5]|[68][0-9])/,
            discover: /^6(?:011|5[0-9]{2})/
        };

        for (let bandeira in bandeiras) {
            if (bandeiras[bandeira].test(numero)) {
                return bandeira.charAt(0).toUpperCase() + bandeira.slice(1); // Exibe com a primeira letra maiúscula
            }
        }

        return "Desconhecida";
    }

    // Função para validar o CVV (somente 3 ou 4 dígitos)
    const cvvInput = document.getElementById("cvv");
    cvvInput.addEventListener("input", () => {
        const cvvValue = cvvInput.value;

        if (cvvValue.length < 3 || cvvValue.length > 4) {
            cvvInput.setCustomValidity("CVV inválido");
        } else {
            cvvInput.setCustomValidity("");
        }
    });

    // Adicionar funcionalidade para o formulário de pagamento
    const paymentForm = document.getElementById("paymentForm");
    paymentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Lógica para processar o pagamento
        alert(`Pagamento confirmado para o plano ${planoSelecionado.textContent} e o cartão ${bandeiraInput.value}.`);
    });
});
