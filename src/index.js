function validarBandeiraCartao(numeroCartao) {
    numeroCartao = numeroCartao.toString();

    switch (true) {
        case numeroCartao.startsWith('4'):
            return "Visa";
        case numeroCartao.startsWith('51') || numeroCartao.startsWith('52') ||
             numeroCartao.startsWith('53') || numeroCartao.startsWith('54') ||
             numeroCartao.startsWith('55') ||
             (numeroCartao.length >= 4 && parseInt(numeroCartao.substring(0, 4)) >= 2221 &&
             parseInt(numeroCartao.substring(0, 4)) <= 2720):
            return "MasterCard";
        case numeroCartao.startsWith('34') || numeroCartao.startsWith('37'):
            return "American Express";
        case numeroCartao.startsWith('6011') || numeroCartao.startsWith('65') ||
             (numeroCartao.length >= 3 && parseInt(numeroCartao.substring(0, 3)) >= 644 &&
             parseInt(numeroCartao.substring(0, 3)) <= 649):
            return "Discover";
        case numeroCartao.startsWith('6062'):
            return "Hipercard";
        case numeroCartao.startsWith('4011') || numeroCartao.startsWith('4312') ||
             numeroCartao.startsWith('4389'):
            return "Elo";
        default:
            return "Bandeira desconhecida";
    }
}

// Exemplos de uso:
console.log(validarBandeiraCartao('4111111111111111'));  // Visa
console.log(validarBandeiraCartao('5111111111111111'));  // MasterCard
console.log(validarBandeiraCartao('371449635398431'));   // American Express
console.log(validarBandeiraCartao('6011123456789012'));  // Discover
console.log(validarBandeiraCartao('6062000000000000'));  // Hipercard
console.log(validarBandeiraCartao('4011000000000000'));  // Elo
