document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".planos .btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const planoEscolhido = button.closest(".plano").querySelector("h2").textContent;
            const valorPlano = button.closest(".plano").querySelector(".preco").textContent;

            if (planoEscolhido) {
                // Passar o nome do plano e o valor para o popup
                document.getElementById("planoSelecionado").textContent = planoEscolhido;
                document.getElementById("valorPlano").textContent = valorPlano.replace('R$', '').trim();

                // Mostrar o popup
                openPopup();
            }
        });
    });

    // Validar e formatar número do cartão
    const numeroCartaoInput = document.getElementById("numeroCartao");

    numeroCartaoInput.addEventListener("input", () => {
        let numeroCartao = numeroCartaoInput.value.replace(/\D/g, ''); // Remove qualquer caractere não numérico

        // Detecta a bandeira e ajusta os limites de dígitos
        const { bandeira, digitos } = detectarBandeira(numeroCartao);
        
        // Limita o número de dígitos conforme a bandeira
        if (numeroCartao.length > digitos) {
            numeroCartao = numeroCartao.substring(0, digitos);
        }

        // Adiciona espaços a cada 4 dígitos (ou 6 no caso do American Express)
        numeroCartao = formatarCartao(numeroCartao, bandeira);

        // Atualiza o valor no campo
        numeroCartaoInput.value = numeroCartao;

        // Verifica a bandeira do cartão e exibe a imagem correspondente
        validarNumeroCartao(numeroCartao, bandeira);
    });

    // Validação e formatação da data
    const dataInput = document.getElementById("dataExpiracao"); // Supondo que o campo de data tenha o id 'dataExpiracao'

    dataInput.addEventListener("input", () => {
        let data = dataInput.value;

        // Remover qualquer caractere que não seja número ou barra
        data = data.replace(/[^0-9\/]/g, '');

        // Adicionar a barra automaticamente entre o mês e o ano (após o segundo dígito)
        if (data.length === 2 && data.indexOf('/') === -1) {
            data += '/';
        }

        // Atualizar o campo com a data formatada
        dataInput.value = data;
    });

    // Validar e formatar o CVV
    const cvvInput = document.getElementById("codigoCVV"); // Campo de CVV

    cvvInput.addEventListener("input", () => {
        let cvv = cvvInput.value.replace(/\D/g, ''); // Remove qualquer caractere não numérico

        // Limita a 4 dígitos
        if (cvv.length > 4) {
            cvv = cvv.substring(0, 4);
        }

        // Atualiza o campo com os 4 dígitos
        cvvInput.value = cvv;

        // Valida se o CVV tem exatamente 4 dígitos
        if (cvv.length !== 4) {
            cvvInput.setCustomValidity('CVV deve ter exatamente 4 dígitos!');
        } else {
            cvvInput.setCustomValidity(''); // Se válido, limpa a mensagem de erro
        }
    });
});

// Função para detectar a bandeira com base no BIN
function detectarBandeira(numero) {
    const binVisa = /^4/;
    const binMastercard = /^(5[1-5])/;
    const binAmex = /^3[47]/;
    const binElo = /^(6062|4386|5041|5067|5090|5100|5200|5230|5300)/;

    if (binVisa.test(numero)) {
        return { bandeira: 'Visa', digitos: 16 };
    } else if (binMastercard.test(numero)) {
        return { bandeira: 'MasterCard', digitos: 16 };
    } else if (binAmex.test(numero)) {
        return { bandeira: 'American Express', digitos: 15 };
    } else if (binElo.test(numero)) {
        return { bandeira: 'Elo', digitos: 16 };
    } else {
        return { bandeira: 'Desconhecida', digitos: 16 };  // padrão para bandeira desconhecida
    }
}

// Função para formatar o número do cartão conforme a bandeira
function formatarCartao(numero, bandeira) {
    numero = numero.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    if (bandeira === 'American Express') {
        // Formatação para American Express (4-6-5)
        return numero.replace(/(\d{4})(\d{6})(\d{5})/, '$1 $2 $3');
    } else {
        // Formatação para Visa, MasterCard e Elo (4-4-4-4)
        return numero.replace(/(\d{4})(?=\d)/g, '$1 '); 
    }
}

// Função para validar o número do cartão e exibir a bandeira correspondente
function validarNumeroCartao(numeroCartao, bandeira) {
    const bandeiras = document.querySelectorAll(".bandeira");

    // Esconde todas as bandeiras inicialmente
    bandeiras.forEach(bandeira => bandeira.style.display = "none");

    if (bandeira === 'Visa') {
        document.getElementById("visa").style.display = "inline-block"; // Exibe a bandeira do Visa
    } else if (bandeira === 'MasterCard') {
        document.getElementById("mastercard").style.display = "inline-block"; // Exibe a bandeira do MasterCard
    } else if (bandeira === 'American Express') {
        document.getElementById("amex").style.display = "inline-block"; // Exibe a bandeira do American Express
    } else if (bandeira === 'Elo') {
        document.getElementById("elo").style.display = "inline-block"; // Exibe a bandeira do Elo
    } else {
        // Nenhuma bandeira corresponde
        bandeiras.forEach(bandeira => bandeira.style.display = "none");
    }
}

// Função para abrir o popup
function openPopup() {
    document.getElementById("popupPagamento").classList.add("open");
}

// Função para confirmar o pagamento
document.getElementById("confirmarPagamento").addEventListener("click", () => {
    // Exibir mensagem de sucesso
    const mensagemSucesso = document.getElementById("mensagemSucesso");
    mensagemSucesso.textContent = "Pagamento realizado com sucesso, você vai receber um email com o comprovante.";

    // Tornar a mensagem visível
    mensagemSucesso.style.display = "block";  // Certifique-se de que a mensagem será visível

    // Esconder o popup de pagamento (se necessário)
    closePopup();

    // Exibir a mensagem de sucesso por alguns segundos antes de redirecionar
    setTimeout(() => {
        // Redireciona para a página de login após 5 segundos
        window.location.href = "../html/login.html"; // Substitua "login.html" pela URL correta
    }, 5000); // Redireciona após 5 segundos
});
