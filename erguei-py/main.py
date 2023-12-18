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

animalsList = [
    "O elefante",
    "os passarinhos",
    "A minhoquinha",
    "os pinguins",
    "O canguru",
    "o sapinho"
]

incrementalList = [
    "Braço direito",
    ", braço esquerdo\n",
    "Perna direita",
    ", perna esquerda\n",
    "Balança a cabeça",
    ", dá uma voltinha\n",
    "Dá um pulinho",
    " e abraça o irmão",
]

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

def printMusic(start, stop):
    print(f"De {start}% a {stop}%:")

    musicLen = len(musicPath)
    start = int((musicLen/100)*start)
    stop = int((musicLen/100)*stop)

    animalIndex = 0
    incrementalIndex = 0
    incrementalNode = ""

    for index, nodeNumber in enumerate(musicPath[0:stop]):
        if(nodeNumber == 6):
            if(index > start):
                print(musicNodes[6].replace("animalA", animalsList[animalIndex]).replace("animalB", animalsList[animalIndex + 1]), end='')
            animalIndex = animalIndex + 2
            continue
        
        if(nodeNumber == 12):
            incrementalNode = incrementalNode + incrementalList[incrementalIndex]
            incrementalIndex += 1
            if(index > start):
                print(incrementalNode)
            continue
        
        if(index > start):
            print(musicNodes[nodeNumber], end='')
    
    print("\n")


if __name__ == "__main__":
    while(1):
        inputString = input("Digite as porcentagens de inicio e fim da musica separadas por espaço: ")
        values = inputString.split()

        if len(values) == 1:
            start = 0
            stop = int(values[0])
        elif len(values) == 2:
            start = int(values[0])
            stop = int(values[1])

        printMusic(start, stop)
