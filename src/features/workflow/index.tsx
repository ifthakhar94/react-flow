import { addEdge, Background, BackgroundVariant, Controls, ReactFlow, useEdgesState, useNodesState, type Connection, type Edge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useCallback } from 'react';
import { PaymentInit } from './components/PaymentInit';
import { initialEdges, initialNodes } from './constant/workflow.constants';
import { PaymentCountry } from './components/PaymentCountry';
import { PaymentProvider } from './components/PaymentProvider';
import PaymentProviderSelect from './components/PaymentProviderSelect';


const nodeTypes = {
    paymentInit: PaymentInit,
    paymentCountry: PaymentCountry,
    paymentProvider: PaymentProvider,
    paymentProviderSelect: PaymentProviderSelect,
};

const Workflow = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (connection: Connection) => {
            const edge: Edge = {
                ...connection,
                animated: true,
                id: `${edges.length + 1}`,
                type: "customEdge",
            };
            setEdges((prevEdges) => addEdge(edge, prevEdges));
        },
        [edges, setEdges]
    );

    return (
        <div style={{ width: '600px', height: '600px', border: '1px solid #ccc', margin: '0 auto' }}>
                <ReactFlow 
                nodes={nodes} 
                edges={edges} 
                fitView 
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                >
                <Background variant={BackgroundVariant.Dots} size={1}  />
                <Controls />
            </ReactFlow>
        </div>
    );
};

export default Workflow;