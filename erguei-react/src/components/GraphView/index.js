import Graph from "react-graph-vis";
import React, { useState, useEffect } from "react";

const GraphView = ({graph, onNetworkChange}) => {
    const options = {
        height: "450px",
        physics: {
            enabled: false,
            barnesHut: {
              gravitationalConstant: -2000,
              centralGravity: 0.3,
              springLength: 95,
              springConstant: 0.01,
              damping: 0.09,
              avoidOverlap: 0.1,
            },
            maxVelocity: 146,
            minVelocity: 0.1,
            solver: 'barnesHut',
        },
        edges: {
            color: "#091f14",
            smooth: {
                type: 'continuous',
            },
        },
        nodes: {
            font:{color:"#091f14"},
            shape:'box',
            borderWidth: 0,
            margin: 10,
        },
        interaction: {
            dragView: false,
            zoomView: false,
            hover: false,
            navigationButtons: false,
            keyboard: false,
        },
    }
    const events = {
        select: function(event) {
          var { nodes, edges } = event;
          console.log('Selected nodes:', nodes);
          console.log('Selected edges:', edges);
        },
      };
    return(
        <>
            <Graph
                graph={graph}
                options={options}
                events={events}
                getNetwork={network => {
                    if (network) {
                        onNetworkChange(network)
                        network.on("stabilized", function () {
                            network.fit();
                        });
                    }
                }}
            />
        </>
        
        
    )
}

export default GraphView;