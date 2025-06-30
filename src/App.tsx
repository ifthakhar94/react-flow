import '@xyflow/react/dist/style.css';
import './App.css';
import Workflow from './features/workflow';

function App() {
  return (
    <>
      <h1 className="text-2xl font-bold text-red-500">Workflow</h1>
      <Workflow />
    </>
  );
}

export default App;
