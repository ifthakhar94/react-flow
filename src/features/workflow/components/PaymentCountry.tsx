import { type NodeProps, type Node, Handle, Position } from "@xyflow/react";
import ReactCountryFlag from "react-country-flag"

export const PaymentCountry = ({ data }: NodeProps<Node<{ currency: string, country: string, countryCode: string }>>) => {
    return <div className="bg-white border border-gray-200 rounded w-40 p-2 gap-2 flex">
       <ReactCountryFlag 
       countryCode={data.countryCode} 
       svg
       aria-label={data.country}
       style={{fontSize: '2em', lineHeight: '2em'}}
       />
       <div>
        <p className="text-sm text-gray-500">{data.country}</p>
        <p className="text-sm text-gray-500">{data.currency}</p>
       </div>
       <Handle type="source" position={Position.Right} />
       <Handle type="target" position={Position.Left} />
    </div>;
};