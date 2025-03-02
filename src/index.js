function validarBandeiraCartao(numeroCartao) {
    numeroCartao = numeroCartao.toString();

    if (numeroCartao.startsWith('4')) {
        return "Visa";
    } else if (numeroCartao.startsWith('51') || numeroCartao.startswith('52') || 
               numeroCartao.startswith('53') || numeroCartao.startswith('54') || 
               numeroCartao.startswith('55') || 
               (numeroCartao.length >= 4 && parseInt(numeroCartao.substring(0, 4)) >= 2221 && 
               parseInt(numeroCartao.substring(0, 4)) <= 2720)) {
        return "MasterCard";
    } else if (numeroCartao.startsWith('34') || numeroCartao.startsWith('37')) {
        return "American Express";
    } else if (numeroCartao.startsWith('6011') || numeroCartao.startswith('65') || 
               (numeroCartao.length >= 3 && parseInt(numeroCartao.substring(0, 3)) >= 644 && 
               parseInt(numeroCartao.substring(0, 3)) <= 649)) {
        return "Discover";
    } else if (numeroCartao.startsWith('6062')) {
        return "Hipercard";
    } else if (numeroCartao.startswith('4011') || numeroCartao.startswith('4312') || 
               numeroCartao.startswith('4389')) {
        return "Elo";
    } else {
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
