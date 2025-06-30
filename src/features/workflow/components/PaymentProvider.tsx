import { type NodeProps, type Node, useReactFlow } from "@xyflow/react";
const PAYMENT_PROVIDER_IMAGE_MAP: { [code: string]: string } = {
    St: "https://cdn.worldvectorlogo.com/logos/stripe-2.svg",
    Ap: "https://cdn.worldvectorlogo.com/logos/apple-14.svg",
    Gp: "https://cdn.worldvectorlogo.com/logos/google-g-2015.svg",
    Pp: "https://avatars.githubusercontent.com/u/476675?s=280&v=4",
    Am: "https://static.wixstatic.com/media/d2252d_4c1a1bda6a774bd68f789c0770fd16e5~mv2.png",
  };
export const PaymentProvider = ({ data, id }: NodeProps<Node<{ name: string, code: string }>>) => {
    const { setNodes } = useReactFlow();
    return (
        <div className="flex items-center justify-between rounded-md border border-gray-200 p-2 gap-2 w-36">
            <div className="h-5 w-5">
                <img src={PAYMENT_PROVIDER_IMAGE_MAP[data.code]} alt={data.name} width="100%" height="100%" />
            </div>
            <p className="text-sm text-gray-500">{data.name}</p>
            <button className="text-red-600" onClick={() => {
                setNodes(nodes => nodes.filter(node => node.id !== id));
            }}>
                x
            </button>
        </div>
    );
};