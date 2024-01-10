# Desafio Acelera ZG
# Autor: Vinícius Alves
# Data: Dez/2023

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

def printMusic(part):
    if(part == "0"):
        print("\n> Imprimindo a música toda <\n")
        start = 0
        stop = len(musicPath)

    else:
        print(f"\n> Imprimindo a parte {part} <\n")
        if(part == "1"):
            start = 0
            stop = 53
        else:
            start = 53
            stop = len(musicPath)

    animalIndex = 0
    incrementalIndex = 0
    musicNodes[12] = "" 
    
    for nodeNumber in musicPath[start:stop]:
        if(nodeNumber == 6):
            print(musicNodes[6].replace("animalA", animalsList[animalIndex]).replace("animalB", animalsList[animalIndex + 1]), end='')
            animalIndex = animalIndex + 2
            continue
        
        if(nodeNumber == 12):
            musicNodes[12] = musicNodes[12] + incrementalList[incrementalIndex]
            incrementalIndex += 1
        
        print(musicNodes[nodeNumber], end='')
    
    print("\n")

if __name__ == "__main__":
    while(1):
        print()
        inputString = input("0 - Música Toda\n1 - Primeira parte\n2 - Segunda parte\n> ")
        if(inputString == "0" or inputString == "1" or inputString == "2"):
                printMusic(inputString)
        else:
            continue

