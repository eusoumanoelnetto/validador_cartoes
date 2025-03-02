# Validador de Cartões

Este projeto é um validador de cartões de crédito que identifica a bandeira do cartão com base no número fornecido. Ele suporta várias bandeiras de cartões, incluindo Visa, MasterCard, American Express, Discover, Hipercard e Elo.

## Funcionalidades

- Identificação da bandeira do cartão com base no número do cartão.
- Suporte para as principais bandeiras de cartões de crédito.
- Testes automatizados para garantir a precisão da identificação.

## Tecnologias Utilizadas

- Node.js
- Jest (para testes)

## Estrutura do Projeto

validador_cartoes/
├── src/
│   ├── index.js          # Função principal para validar bandeira do cartão
│   └── index.test.js     # Testes para a função de validação
├── package.json          # Configurações do projeto e dependências
└── README.md             # Documentação do projeto

## Como Usar

1. Clone o repositório:
   ```sh
   git clone https://github.com/eusoumanoelnetto/validador_cartoes.git
   cd validador_cartoes