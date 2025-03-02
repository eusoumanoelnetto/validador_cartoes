// filepath: /D:/AULA/OneDrive/validador_cartoes/src/index.test.js
const { validarBandeiraCartao } = require('./index');

test('Visa', () => {
    console.log(validarBandeiraCartao('4111111111111111')); // Adiciona log para depuração
    expect(validarBandeiraCartao('4111111111111111')).toBe('Visa');
});

test('MasterCard', () => {
    console.log(validarBandeiraCartao('5111111111111111')); // Adiciona log para depuração
    expect(validarBandeiraCartao('5111111111111111')).toBe('MasterCard');
});

test('American Express', () => {
    console.log(validarBandeiraCartao('371449635398431')); // Adiciona log para depuração
    expect(validarBandeiraCartao('371449635398431')).toBe('American Express');
});

test('Discover', () => {
    console.log(validarBandeiraCartao('6011123456789012')); // Adiciona log para depuração
    expect(validarBandeiraCartao('6011123456789012')).toBe('Discover');
});

test('Hipercard', () => {
    console.log(validarBandeiraCartao('6062000000000000')); // Adiciona log para depuração
    expect(validarBandeiraCartao('6062000000000000')).toBe('Hipercard');
});

test('Elo', () => {
    console.log(validarBandeiraCartao('4011000000000000')); // Adiciona log para depuração
    expect(validarBandeiraCartao('4011000000000000')).toBe('Elo');
});

test('Bandeira desconhecida', () => {
    console.log(validarBandeiraCartao('1234567890123456')); // Adiciona log para depuração
    expect(validarBandeiraCartao('1234567890123456')).toBe('Bandeira desconhecida');
});


