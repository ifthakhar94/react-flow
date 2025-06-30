import { type NodeProps, type Node, Handle, Position } from "@xyflow/react";

export const PaymentInit = ({ data }: NodeProps<Node<{ amount: number }>>) => {
    console.log("data", data);
    return <div className="bg-white border border-gray-200 rounded">
        <div className="bg-blue-500 p-1">
            <p className="text-white text-sm">Payment Initialzed</p>
        </div>

        <div className="p-2">
            <p className="text-xl  font-bold text-blue-500">${data.amount}</p>
        </div>
        <Handle type="source" position={Position.Right} />
    </div>;
};