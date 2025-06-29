import { Background, BackgroundVariant, ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
const Workflow = () => {
    return (
        <div style={{ width: '600px', height: '600px', border: '1px solid #ccc', margin: '0 auto' }}>
            <ReactFlow>
                <Background variant={BackgroundVariant.Dots} size={1} />
            </ReactFlow>
        </div>
    );
};

export default Workflow;