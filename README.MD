# Desafio do processo seletivo do Acelera ZG
Desafio do processo seletivodo Acelera ZG que envolvia criar um programa que imprimisse uma música no terminal, generalizando o máximo possível de partes incrementais e repetitivas

## Índice

## Ideia inicial
A primeira abordagem considerada foi a de representar a música como um grafo. Onde cada trecho que se repete fosse representado como um nó, e a ligação entre esses trechos fosse os arcos do grafo.

A ideia inicial era descobrir um caminho euleriano (uma sequência de nós pela qual fosse possível percorrer todos os arcos do grafo) nesse grafo que representasse a música na sua ordem correta ou garantir que o grafo so tivesse um caminho euleriano possível, porém essas abordagens se mostraram desnecessariamente complexas já que a ordem pela qual o nós seriam percorridos já seria determinada pelo programador, pois esse código seria de uso específico para a música "Erguei as mãos". Porém a ideia de representação usando grafos se mostrou muito promissora e por isso ela foi mantida.

Dessa forma, foi construído um grafo onde os nós eram trechos da música e foi gerado uma lista de nós a serem percorridos para que a música fosse impressa na ordem correta.


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

E uma lisa de inteiros que representam o caminho euleriano quer percorre todos os arcos do grafo e forma a música na ordem correta. Para facilitar a visualização, cada estrofe foi colocada em uma linha diferente do código. Foi criado também, um nó contendo `\n`, que serve para melhorar a diagramação da letra da música quando ela for impressa no terminal:

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

O nó número 6 se repete três vezes ao longo da música, cada uma delas com dois animais diferentes. Por isso, o nó recebeu dois <i>placeholders</i>: `animalA` e `animalB` que são substituidos por um animal de uma lista (`animalList`) a cada impressão do nó 6. É importante ressaltar que a variável `animalIndex` é incrementada em 2 a cada ocorrência.
~~~ python
 print(musicNodes[6].replace("animalA", animalsList[animalIndex]).replace("animalB", animalsList[animalIndex + 1]), end='')
~~~

Algo semelhante acontece com o nó 12. Ele faz parte de uma estrofe incremental da música, onde a cada ocorrência, uma nova frase é incrementada à <i>string</i> da estrofe. Para isso, foi criada uma variável chamda `incrementalNode`, que a cada ocorrência é incrementada com a <i>string</i> de uma lista (`incrementalList`).

~~~python
incrementalNode = incrementalNode + incrementalList[incrementalIndex]
incrementalIndex += 1
~~~

Outro requisito importante do desafio é que seja possível 

## Autor
Vinícius Alves