# Projeto Pixel Art

Este é o meu 4º projeto durante minha jornada na Trybe!

O Pixel Art é um aplicativo web que consiste em um editor de arte com pixels, onde os
usuários podem expressar sua criatividade através da criação de imagens pixeladas. Este é o meu primeiro projeto desenvolvido desde o HTML e CSS até a parte lógica com JavaScript, implementando, assim, uma paleta de cores que permite aos usuários escolherem cores e pintarem livremente em um quadro branco!

## Estrutura do Repositório

- A pasta `src` contém todo o código;

## Funcionalidades Implementadas

## 1. Adicionado à página a sessão de Paletas de Cores.

<details>
  <summary>A página contém o uma sessão para manipular as cores</summary><br />

- Foi criado uma `div` com o `id` denominado `color-palette`;

- Foi criado um título `h2` com o `id` denominado `palette-title`;

- O texto do título é **exatamente** "Color Palette";

</details>

## 2. Implementado uma paleta contendo cinco cores distintas.

<details>
  <summary>A página inicialmente contém uma paleta com cinco opções de cores</summary>

- A paleta de cores é um elemento com `id` denominado `colors`, e cada cor individual tem a `classe` chamada `color`;

- A cor de fundo de cada elemento da paleta é a cor que o elemento representa;

- Cada elemento da paleta de cores tem uma borda preta, sólida e com 1 pixel de largura;

- A paleta lista todas as cores disponíveis para utilização uma ao lado da outra, e está posicionada abaixo do título **Color Palette**;

- A paleta não contém cores repetidas;

</details>

## 3. Implementado um botão para gerar cores aleatórias para a paleta de cores.

<details>
  <summary>A página possui um botão que gera cores aleatórias ao ser clicado</summary><br />

- O botão possui o `id` denominado `button-random-color`;

- O botão possui o texto **Random Colors**;

- A **primeira** cor sempre vai ser **preta**;

- A **segunda** cor sempre vai ser **branca**;

- As cores geradas na paleta são diferentes a cada click do botão;

</details>
