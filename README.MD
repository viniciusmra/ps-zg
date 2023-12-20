# Desafio do processo seletivo do Acelera ZG
Desafio do processo seletivodo Acelera ZG que envolvia criar um programa que imprimisse uma música no terminal, generalizando o máximo possível de partes incrementais e repetitivas

## Índice

## Ideia inicial
A primeira abordagem considerada foi a de representar a música como um grafo. Onde cada trecho que se repete fosse representado como um nó, e a ligação entre esses trechos fossem os arcos do grafo.

A ideia inicial era descobrir um caminho euleriano nesse grafo que representasse a música na sua ordem correta. Uma caminho euleriano é uma sequência de nós pela qual é possível percorrer todos os arcos do grafo exatamente uma vez. Outra possibilidade seria garantir que o grafo tivesse apenas um caminho euleriano possível, simplificando a descorberta de todos os caminhos possíveis. Porém essas abordagens se mostraram desnecessariamente complexas, já que a ordem pela qual o nós seriam percorridos já seria determinada pelo programador, pois esse código seria de uso específico para a música "Erguei as mãos". Apesar disso, a ideia de representação usando grafos se mostrou muito promissora e foi mantida.

Dessa forma, foi construído um rascunho inicial de um grafo cujos nós eram trechos da música, ligados por arcos que representavam a relação entre esses trechos. Esse esboço  serviu para avaliar a viabilidade da solução, pois se não fosse possível usar essa representação, outra ideia teria que ser concebida.

Depois de desenhar a concepção inicial do grafo, a parte de programação foi inciada. Nessa etapa, foi escolhida uma abordagem mais conservadora usando Python para fazer um código básico que resolvesse o problema. A construção dess código é detalhada mais a baixo.

Posteriormente, foi desenvolvida outra solução que fosse implmentada usando JavaScript e React para promover uma interface mais interativa com o usuário, sem deixar de lado as representações usando grafos.

## Implementação em python
A primeira resolução do desafio foi implementada em Python. Para tal, foram usadas as ideias de grafos e caminhos eulerianos apresentadas anteriormente. 

A partir da representadação da música usando um grafo, foi construída uma lista de strings que representam os nós do grafo:
~~~ python
musicNodes = [
    "\n", # 0
    "Erguei as mãos ", # 1
    "e dai glória a Deus\n", # 2
    "e cantai como ", # 3
    "os filhos do Senhor\n", # 4
    "Os animaizinhos subiram de dois em dois\n", # 5
    "animalA\nE animalB, como ", # 6
    "Deus disse a Noé: Constrói uma arca\n", # 7
    "Que seja feita\nDe madeira para ", # 8
    "Por isso...!\n", # 9
    "E atenção agora, porque\n", # 10
    "O senhor tem muitos filhos\nMuitos filhos ele tem\nEu sou um deles, você também\nLouvemos ao senhor\n", # 11
    "", # 12
]
~~~

Foi criada também uma lista de inteiros que representam o caminho euleriano quer percorre todos os arcos do grafo e forma a música na ordem correta. Para facilitar a visualização, cada estrofe foi colocada em uma linha diferente do código. Foi criado também, um nó contendo `\n`, que serve para melhorar a diagramação da letra da música quando ela for impressa no terminal:

~~~ python
musicPath = [
    # Parte 1
    1,2,1,2,1,3,4,0,
    5,5,6,4,0,
    5,5,6,4,0,
    5,5,6,4,0,
    7,7,8,4,0,
    9,1,2,1,2,1,3,4,0,
    1,2,1,2,1,3,4,0,
    1,2,1,2,1,3,4,0,
    
    # Parte 2
    10,0,
    11,0,
    12,0,0,
    11,0,
    12,0,
    11,0,
    12,0,0,
    11,0,
    12,0,
    11,0,
    12,0,0,
    11,0,
    12,0,
    11,0,
    12,0,0,
    11,0,
    12,0,
]
~~~

O nó número 6 se repete três vezes ao longo da música, cada uma delas com dois animais diferentes. Por isso, o nó recebeu dois <i>placeholders</i>: `animalA` e `animalB` que são substituidos por um animal de uma lista (`animalList`) a cada impressão do nó 6. É importante ressaltar que a variável de controle `animalIndex` é incrementada em 2 a cada ocorrência.
~~~ python
print(musicNodes[6].replace("animalA", animalsList[animalIndex]).replace("animalB", animalsList[animalIndex + 1]), end='')
animalIndex = animalIndex + 2
~~~

Algo semelhante acontece com o nó 12. Ele faz parte de uma estrofe incremental da música, onde a cada ocorrência, uma nova frase é adicionada à <i>string</i> da estrofe. Para isso, foi criada uma variável de controle chamada `incrementalIndex`, que a cada ocorrência indica qual elemento da lista `incrementalList` sera adicionado à <i>string</i> dp nó 12.

~~~python
musicNodes[12] = musicNodes[12] + incrementalList[incrementalIndex]
incrementalIndex += 1
~~~

Outro requisito importante do desafio é que seja possível imprimir a música toda ou somente uma das duas partesdela . Por isso foi adicionado um <i>input</i> no programa que pergunta ao usuário qual das partes ele deseja imprimir. Ao selecionar `0 - Música Toda`, todo caminho é impresso. Já quando é selecionado `1 - Primeira parte`, será impresso os 53 primeiros elementos do caminho, correspondentes à primeira parte da lista. A opção `2 - Segunda parte` imprime os elementos restantes do caminho.

~~~bash
0 - Música Toda
1 - Primeira parte
2 - Segunda parte
>
~~~

## Implementação usando React

## Autor
Vinícius Alves