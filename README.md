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
  <summary>A página inicialmente contém uma paleta com cinco opções de cores</summary><br />

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

## 6. Implementado uma função para selecionar uma cor na paleta de cores.

<details>
  <summary>A cor clicada deve ser selecionada para posteriormente ser utilizada para preencher os quadros</summary><br />

- A cor clicada recebe a `class` denominada `selected`;

- Somente **uma** das cores da paleta pode ter a classe `selected` de cada vez;

- Os elementos que recebem a classe `selected` são os mesmos elementos que possuem a classe `color`, como informado na **implementação 2**;

- Sempre ao carregar a página, a **primeira** cor da paleta virá selecionada;

</details>

## 7. Criado uma função para preencher um pixel do quadro com a cor selecionada da paleta.

<details>
  <summary>O pixel do quadro clicado tem sua cor alterada para a cor selecionada na paleta de cores</summary><br />

- Ao carregar a página deve ser possível pintar os pixels do quadro de preto;

- Após selecionar outra cor na paleta de cores, é possível pintar os pixels do quadro com essa cor;

- Somente o pixel que foi clicado deve tem sua cor alterada, sem influenciar na cor dos demais pixels.

</details>

## 8. Adicionado à página a sessão de Controle do Quadro.

<details>
  <summary>A página contém o uma sessão para manipular o quadro</summary><br />

- Foi criado uma `div` com o `id` denominado `board-control`;

- Foi criado um título `h2` com o `id` denominado `control-title`;

- O texto do título é **exatamente** "Board Control";

</details>

## 9. Criado um input que permite definir um novo tamanho para o quadro de pixels.

<details>
  <summary>No controle do quadro, há um input para definir o tamanho do quadro de pixels</summary><br />

- O input tem o `id` denominado `board-size` e está dentro da `div` chamada `board-control`;

- Ao ser passado um valor, o quadro é alterado para **N** pixels de largura e **N** pixels de altura, onde **N** é o número inserido no input. Ou seja, ao ser passado o numero **10** será formado um novo quadro 10x10;

- O valor mínimo do quadro é 5x5 e o valor máximo é 50x50;

- Se nenhum valor for passado ao input, uma mensagem de erro será exibida;

- Se o valor passado não for um `number`, uma mensagem de erro será exibida;

- Se um valor menor que 5 ou maior que 50 for passado, uma mensagem de erro será exibida;

- Após o tamanho do quadro ser alterado, ele será gerado em branco;

</details>

## 10. Adicionado um botão que remove ou adiciona bordas nos pixels do quadro.

<details>
  <summary>No controle do quadro, há um botão toggle que remove/adiciona bordas ao pixels do quadro</summary><br />

- O botão possui o `id` denominado `border-toggle`;

- O botão possui o texto **Toggle Border**;

- O botão ao ser clicado, remove a classe `with-border` e adiciona a classe `borderless` em cada pixel do quadro, caso a classe `borderless` seja a atual de cada pixel, ela é removida e adicionada a classe `with-border`;

- As propriedades `gridTemplateColumns` e `gridTemplateRows` são alteradas para manter os pixels com 40px de largura e 40px de altura independente de estarem com ou sem bordas.

</details>

## 11. Implementado localStorage para a página.

<details>
  <summary>Informações importantes são salvas no localStorage</summary><br />

- A paleta de cores atual é salva no localStorage com a chave `colorPalette`;

- As cores adicionadas pelo usuário ou/e randomizadas, devem ser mantidas ao recarregar a página;

- Os pixels pintados são salvos no localStorage com a chave `pixelBoard`;

- O quadro é preenchido com as mesmas cores utilizadas anteriormente, nas posições corretas ao recarregar a página;

- O tamanho do quadro é salvo no localStorage com a chave `boardSize`;

- O quadro mantém seu tamanho ao recarregar a página;

</details>

## 12. Adicionado um botão que limpa o quadro.

<details>
  <summary>A página possui um botão que ao ser clicado, deixe todos os pixels do quadro com a cor branca</summary><br />

- O botão possui o `id` denominado `clear-board`;

- O botão está dentro da div `board-control`;

- O botão possui o texto **Clear**;

- O botão ao ser clicado, deixa todos os pixels do quadro na cor branca;

- O botão ao ser clicado, volta o tamanho do quadro para 5x5;

</details>

---
