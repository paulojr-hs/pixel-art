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

## 4. Implementado um input para inserir novas cores a paleta de cores.

<details>
  <summary>A página possui um seletor que permite inserir novas cores a paleta</summary><br />

- O seletor é do tipo `input`, possui o `id` denominado `input-custom-color`;

- O input possui o texto **Select New Color**;

- Ao clicar no input, será exibida para o usuário uma janela para que ele escolha uma nova cor;

- Não é possível adicionar cores repetidas;

</details>

## 5. Adicionado à página um quadro contendo 25 pixels.

<details>
  <summary>A página contém um quadro de pixels 5x5</summary><br/>

- O quadro de pixels tém 5 colunas e 5 linhas;

- O quadro possui o `id` denominado `pixel-board`, e cada pixel individual dentro do quadro possui a `class` chamada `pixel`;

- A cor inicial de cada pixel do quadro é **branca**;

- Cada pixel possui a borda preta sólida de 1px de largura;

- Cada pixel possui 40px de altura e 40px de largura, incluindo o seu conteúdo e excluindo a borda preta;

- O quadro está posicionado abaixo da paleta de cores;

</details>
