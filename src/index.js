function validarBandeiraCartao(numero) {
    console.log(`Processando o número do cartão: ${numero}`); // Log para depuração

    // Verificação para cartões Elo
    if (numero.startsWith('4011')) {
        console.log('Detectado: Elo');
        return 'Elo';
    }

    // Verificação para cartões Visa
    if (numero.startsWith('4')) {
        console.log('Detectado: Visa');
        return 'Visa';
    }

    // Verificação para cartões MasterCard
    if (numero.startsWith('5')) {
        console.log('Detectado: MasterCard');
        return 'MasterCard';
    }

    // Verificação para cartões American Express
    if (numero.startsWith('37')) {
        console.log('Detectado: American Express');
        return 'American Express';
    }

    // Verificação para cartões Discover
    if (numero.startsWith('6011')) {
        console.log('Detectado: Discover');
        return 'Discover';
    }

    // Verificação para cartões Hipercard
    if (numero.startsWith('6062')) {
        console.log('Detectado: Hipercard');
        return 'Hipercard';
    }

    // Caso nenhum padrão seja detectado
    console.log('Detectado: Bandeira desconhecida');
    return 'Bandeira desconhecida';
}
module.exports = { validarBandeiraCartao };
