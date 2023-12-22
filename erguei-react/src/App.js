import './App.css';
import React, { useState, useEffect } from "react";
import GraphView from "./components/GraphView";
import VideoPlayer from './components/VideoPlayer';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [network, setNetwork] = useState(null);
  const [currentStep, setCurrentStep] = useState(null);
  
  // Verifica qual o nó atual a cada mudança do currentTime
  useEffect(() => {
    const nextStep = musicPath.find((step) => step.time > currentTime)
    if(nextStep) {
      setCurrentStep(musicPath.indexOf(nextStep)-1)
    } else{
      setCurrentStep(musicPath.length - 1)
    }
  }, [currentTime]);

  // Muda o grafo de acordo com a atualização do nó atual 
  useEffect(() => {
    console.log(`Current step: ${currentStep} - `)
    hideAllNodes()
    console.log("pos hide")
    if(currentStep != null && currentStep >= 0){
      console.log("pre for")
      for(let i = 0; i <= currentStep; i++){
        showNode(musicPath[i].id, musicPath[i].animalIndex, musicPath[i].incrementalIndex)
      }
      console.log("pre select")
      selectNode(musicPath[currentStep].id)
    }
  }, [currentStep])

  // Esconde todos os nós
  const hideAllNodes = ()=>{
    for(let i = 0; i < musicPath.length-1; i++){
      hideNode(musicPath[i].id)
    }
  }
  
  // Lista de animais para o trecho da música em que eles são usados
  const animalsList = [
    "O elefante",
    "os passarinhos",
    "A minhoquinha",
    "os pinguins",
    "O canguru",
    "o sapinho"
  ]

  // Lista de strigns incrementais para a parte incremetal da música
  const incrementalList = [
    "Braço direito",
    ", braço esquerdo\n",
    "Perna direita",
    ", perna esquerda\n",
    "Balança a cabeça",
    ", dá uma voltinha\n",
    "Dá um pulinho",
    " e abraça o irmão",
  ]

  // Caminho da música
  const musicPath = [
    // Parte 1
    {id: 0, time: 22.5, animalIndex: 0, incrementalIndex: 0},
    {id: 1, time: 24.5, animalIndex: 0, incrementalIndex: 0},
    {id: 0, time: 26.1, animalIndex: 0, incrementalIndex: 0},
    {id: 1, time: 27.9, animalIndex: 0, incrementalIndex: 0},
    {id: 0, time: 29.6, animalIndex: 0, incrementalIndex: 0},
    {id: 2, time: 31.8, animalIndex: 0, incrementalIndex: 0},
    {id: 3, time: 33.0, animalIndex: 0, incrementalIndex: 0},

    {id: 4, time: 38.3, animalIndex: 0, incrementalIndex: 0},
    {id: 4, time: 42.0, animalIndex: 0, incrementalIndex: 0},
    {id: 5, time: 45.3, animalIndex: 0, incrementalIndex: 0},
    {id: 3, time: 48.8, animalIndex: 0, incrementalIndex: 0},

    {id: 4, time: 52.2, animalIndex: 0, incrementalIndex: 0},
    {id: 4, time: 55.7, animalIndex: 0, incrementalIndex: 0},
    {id: 5, time: 59.4, animalIndex: 2, incrementalIndex: 0},
    {id: 3, time: 62.5, animalIndex: 2, incrementalIndex: 0},

    {id: 4, time: 66.0, animalIndex: 2, incrementalIndex: 0},
    {id: 4, time: 69.0, animalIndex: 2, incrementalIndex: 0},
    {id: 5, time: 73.1, animalIndex: 4, incrementalIndex: 0},
    {id: 3, time: 76.6, animalIndex: 4, incrementalIndex: 0},

    {id: 6, time: 80.0, animalIndex: 4, incrementalIndex: 0},
    {id: 6, time: 83.0, animalIndex: 4, incrementalIndex: 0},
    {id: 7, time: 87.0, animalIndex: 4, incrementalIndex: 0},
    {id: 3, time: 90.4, animalIndex: 4, incrementalIndex: 0},

    {id: 8, time: 93.2, animalIndex: 4, incrementalIndex: 0},

    {id: 0, time: 95.7, animalIndex: 4, incrementalIndex: 0},
    {id: 1, time: 97.5, animalIndex: 4, incrementalIndex: 0},
    {id: 0, time: 99.3, animalIndex: 4, incrementalIndex: 0},
    {id: 1, time: 100.9, animalIndex: 4, incrementalIndex: 0},
    {id: 0, time: 102.8, animalIndex: 4, incrementalIndex: 0},
    {id: 2, time: 105.0, animalIndex: 4, incrementalIndex: 0},
    {id: 3, time: 106.2, animalIndex: 4, incrementalIndex: 0},

    { id: 0, time: 111.3, animalIndex: 4, incrementalIndex: 0 },
    { id: 1, time: 113.1, animalIndex: 4, incrementalIndex: 0 },
    { id: 0, time: 114.9, animalIndex: 4, incrementalIndex: 0 },
    { id: 1, time: 116.5, animalIndex: 4, incrementalIndex: 0 },
    { id: 0, time: 118.4, animalIndex: 4, incrementalIndex: 0 },
    { id: 2, time: 120.6, animalIndex: 4, incrementalIndex: 0 },
    { id: 3, time: 121.8, animalIndex: 4, incrementalIndex: 0 },

    { id: 0, time: 127, animalIndex: 4, incrementalIndex: 0 },
    { id: 1, time: 128.8, animalIndex: 4, incrementalIndex: 0 },
    { id: 0, time: 130.6, animalIndex: 4, incrementalIndex: 0 },
    { id: 1, time: 132.2, animalIndex: 4, incrementalIndex: 0 },
    { id: 0, time: 134.1, animalIndex: 4, incrementalIndex: 0 },
    { id: 2, time: 136.3, animalIndex: 4, incrementalIndex: 0 },
    { id: 3, time: 137.5, animalIndex: 4, incrementalIndex: 0 },

    {id: 9, time: 139.5, animalIndex: 4, incrementalIndex: 0},

    {id: 10, time: 141.0, animalIndex: 4, incrementalIndex: 0},
    {id: 11, time: 153.5, animalIndex: 4, incrementalIndex: 0},

    {id: 10, time: 154.5, animalIndex: 4, incrementalIndex: 0},
    {id: 11, time: 167.0, animalIndex: 4, incrementalIndex: 1},

    {id: 10, time: 169.5, animalIndex: 4, incrementalIndex: 1},
    {id: 11, time: 182.0, animalIndex: 4, incrementalIndex: 2},

    {id: 10, time: 185.0, animalIndex: 4, incrementalIndex: 2},
    {id: 11, time: 198.0, animalIndex: 4, incrementalIndex: 3},

    {id: 10, time: 201.5, animalIndex: 4, incrementalIndex: 3},
    {id: 11, time: 214.5, animalIndex: 4, incrementalIndex: 4},

    {id: 10, time: 219.0, animalIndex: 4, incrementalIndex: 4},
    {id: 11, time: 232.0, animalIndex: 4, incrementalIndex: 5},

    {id: 10, time: 237.3, animalIndex: 4, incrementalIndex: 5},
    {id: 11, time: 249.3, animalIndex: 4, incrementalIndex: 6},

    {id: 10, time: 255.0, animalIndex: 4, incrementalIndex: 6},
    {id: 11, time: 265.5, animalIndex: 4, incrementalIndex: 7},
  ]

  // Grafo inicial com os nos e arcos definidos
  const [graph, setGraph] = useState({
    nodes:[
        {id:0, label: "Erguei as mãos", x: -450, y: -100, hidden: true},
        {id:1, label: "e dai glória a Deus", x: -450, y: 0, hidden: true},
        {id:2, label: "e cantai como", x: -300, y: -150, hidden: true},
        {id:3, label: "os filhos do Senhor", x: -150, y: -70,  hidden: true},
        {id:4, label: "Os animaizinhos subiram de dois em dois", x: 200, y: -100,  hidden: true},
        {id:5, label: "animalA\nE animalB, como ", x: 50, y: -200,   hidden: true},
        {id:6, label: "Deus disse a Noé: Constrói uma arca", x: -100, y: 80,   hidden: true},
        {id:7, label: "Que seja feita\nDe madeira para", x: -350, y: 100,   hidden: true},
        {id:8, label: "Por isso...!", x: -300, y: -50, hidden: true},
        {id:9, label: "E atenção agora, porque", x: 100, y: 0, hidden: true},
        {id:10, label: "O senhor tem muitos filhos\nMuitos filhos ele tem\nEu sou um deles, você também\nLouvemos ao senhor\n", x: 350, y: 0, hidden: true},
        {id:11, label: "", x: 200, y: 100, hidden: true},
    ],
    edges:[
        {id: 0, from: 0, to: 1, smooth: {roundness: 0.5, type: 'curvedCCW', forceDirection: 'none'}},
        {id: 1, from: 1, to: 0, smooth: {roundness: 0.5, type: 'curvedCCW', forceDirection: 'none'}},
        {id: 4, from: 0, to: 2, smooth: {roundness: 0.5, type: 'curvedCCW', forceDirection: 'none'}},
        {id: 5, from: 2, to: 3, smooth: {roundness: 0.5, type: 'curvedCCW', forceDirection: 'none'}},
        {id: 6, from: 3, to: 4, smooth: {roundness: 0.3, type: 'curvedCCW', forceDirection: 'none'}},

        {id: 7, from: 4, to: 4, smooth: {roundness: 0.5, type: 'curvedCW', forceDirection: 'none'}},
        {id: 8, from: 4, to: 5, smooth: {roundness: 0.5, type: 'curvedCCW', forceDirection: 'none'}},
        {id: 9, from: 5, to: 3, smooth: {roundness: 0.3, type: 'curvedCW', forceDirection: 'none',}},
        {id: 10, from: 3, to: 6, smooth: {roundness: 0.3, type: 'curvedCCW', forceDirection: 'none',}},
        
        {id: 11, from: 6, to: 6, smooth: {roundness: 0.3, type: 'curvedCW', forceDirection: 'none',}},
        {id: 12, from: 6, to: 7, smooth: {roundness: 0.3, type: 'curvedCW', forceDirection: 'none',}},
        {id: 13, from: 7, to: 3, smooth: {roundness: 0.3, type: 'curvedCCW', forceDirection: 'none',}},
        {id: 14, from: 3, to: 8, smooth: {roundness: 0.3, type: 'curvedCW', forceDirection: 'none',}},

        {id: 15, from: 8, to: 0, smooth: {roundness: 0.3, type: 'curvedCW', forceDirection: 'none',}},

        {id: 16, from: 3, to: 9, smooth: {roundness: 0.3, type: 'curvedCCW', forceDirection: 'none',}},
        {id: 17, from: 9, to: 10, smooth: {roundness: 0.3, type: 'curvedCW', forceDirection: 'none',}},
        {id: 18, from: 10, to: 11, smooth: {roundness: 0.3, type: 'curvedCW', forceDirection: 'none',}},
        {id: 19, from: 11, to: 10, smooth: {roundness: 0.3, type: 'curvedCW', forceDirection: 'none',}},
    ],
  })

  // Funções para alterar a visualização do grafo 
  const selectNode = (nodeId) => {
    if (network) {
      network.selectNodes([nodeId], false)
    }
    setGraph(prevState => ({
      ...prevState,
      nodes: prevState.nodes.map(node =>
        node.id === nodeId ? {...node, color: "#39c77f"} : node
      )
    }))
  }

  const showNode = (nodeId, animalIndex, incrementalIndex) => {
    if(nodeId === 5){
      setGraph(prevState => ({
        ...prevState,
        nodes: prevState.nodes.map(node =>
          node.id === nodeId ? {...node, hidden: false, color: "#95d4e1", label: `${animalsList[animalIndex]}\nE ${animalsList[animalIndex + 1]}, como`} : node
        )
      }))
    } else if(nodeId === 11){
      setGraph(prevState => ({
        ...prevState,
        nodes: prevState.nodes.map(node =>
          node.id === nodeId ? {...node, hidden: false, color: "#95d4e1", label: `${incrementalList.slice(0, incrementalIndex + 1).join("")}`} : node
        )
      }))
    } else {
      setGraph(prevState => ({
        ...prevState,
        nodes: prevState.nodes.map(node =>
          node.id === nodeId ? {...node, hidden: false, color: "#95d4e1"} : node
        )
      }))
    }
  }

  const hideNode = (nodeId) =>{
    setGraph(prevState => ({
      ...prevState,
      nodes: prevState.nodes.map(node =>
        node.id === nodeId ? {...node, hidden: true} : node
      )
    }))
  }

  return (
    <>
      
      <VideoPlayer 
        currentTime={currentTime}
        updateTime={setCurrentTime}
      />
      
      <GraphView 
        graph={graph}
        onNetworkChange={setNetwork}
      />
      
    </>
    
  );
}


export default App;
