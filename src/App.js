import { useState } from 'react';
import './App.css';
import AllForms from './Components/AllForms';
import Form from './Components/Form';
import ResultPage from './Components/ResultPage';

function App() {
  const [pageRender, setPageRender] = useState(0);

  const [resultsD, setResultsD] = useState([]);
  const [resultsI, setResultsI] = useState([]);
  const [resultsS, setResultsS] = useState([]);
  const [resultsC, setResultsC] = useState([]);

  const resultsRender = () => {
    if (pageRender === 0) {
      return (
        <AllForms
          pageRender={pageRender}
          setPageRender={setPageRender}
          resultsD={resultsD}
          resultsI={resultsI}
          resultsS={resultsS}
          resultsC={resultsC}
          setResultsD={setResultsD}
          setResultsI={setResultsI}
          setResultsS={setResultsS}
          setResultsC={setResultsC}
        />
      );
    }
    if (pageRender === 1) {
      return (
        <ResultPage
          resultsD={resultsD}
          resultsI={resultsI}
          resultsS={resultsS}
          resultsC={resultsC}
        />
      );
    }
  };

  return (
    <div className=" ">
      <div className="bg-cyan-200">{resultsRender()}</div>
    </div>
  );
}

export default App;
