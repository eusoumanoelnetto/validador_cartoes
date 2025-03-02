// filepath: /D:/AULA/OneDrive/validador_cartoes/src/index.test.js
import { validarBandeiraCartao } from './index';

test('Visa', () => {
    expect(validarBandeiraCartao('4111111111111111')).toBe('Visa');
});

test('MasterCard', () => {
    expect(validarBandeiraCartao('5111111111111111')).toBe('MasterCard');
});

test('American Express', () => {
    expect(validarBandeiraCartao('371449635398431')).toBe('American Express');
});

test('Discover', () => {
    expect(validarBandeiraCartao('6011123456789012')).toBe('Discover');
});

test('Hipercard', () => {
    expect(validarBandeiraCartao('6062000000000000')).toBe('Hipercard');
});

test('Elo', () => {
    expect(validarBandeiraCartao('4011000000000000')).toBe('Elo');
});

test('Bandeira desconhecida', () => {
    expect(validarBandeiraCartao('1234567890123456')).toBe('Bandeira desconhecida');
});


