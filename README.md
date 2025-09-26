# Calculadora de IMC

Uma aplicação web simples para calcular o Índice de Massa Corporal (IMC) e classificar o resultado de acordo com os padrões de saúde.

## Sobre o Projeto

Esta calculadora de IMC foi desenvolvida como parte dos estudos de JavaScript. A aplicação permite que o usuário insira seu peso e altura, e calcula automaticamente o IMC, fornecendo uma classificação de acordo com os padrões médicos.

## Funcionalidades

- Cálculo do IMC baseado no peso e altura informados
- Classificação do resultado em diferentes categorias:
  - Abaixo do peso (IMC < 18,5)
  - Peso normal (IMC entre 18,5 e 24,9)
  - Sobrepeso (IMC entre 25 e 29,9)
  - Obesidade grau 1 (IMC entre 30 e 34,9)
  - Obesidade grau 2 (IMC entre 35 e 39,9)
  - Obesidade grau 3 (IMC > 40)
- Validação de entrada para garantir dados corretos

## Estrutura do Projeto

```
TABELA IMC/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── img/
│   └── js/
│       └── main.js
├── index.html
└── README.md
```

## Como Usar

1. Abra o arquivo `index.html` em qualquer navegador web moderno
2. Insira seu peso em quilogramas (kg) no campo "Peso"
3. Insira sua altura em metros (m) no campo "Altura" (exemplo: 1.75)
4. Clique no botão "Calcular"
5. O resultado será exibido abaixo do formulário, mostrando seu IMC e a classificação correspondente

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)

## Aprendizados

Este projeto demonstra conceitos importantes de desenvolvimento web, incluindo:
- Manipulação do DOM com JavaScript
- Validação de formulários
- Estilização responsiva com CSS
- Cálculos e lógica condicional em JavaScript