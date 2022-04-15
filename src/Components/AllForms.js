import { Button } from '@mui/material';
import { useState } from 'react';
import { QUESTIONS_LENGTH } from '../configData';

import QUESTIONS from '../Questions/QUESTIONS';
import Form from './Form';
const AllForms = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedValueD, setSelectedValueD] = useState();
  const [selectedValueI, setSelectedValueI] = useState();
  const [selectedValueS, setSelectedValueS] = useState();
  const [selectedValueC, setSelectedValueC] = useState();

  const nextHandler = () => {
    setCurrentQuestion((i) => i + 1);
    props.setResultsD((initial) => {
      return [...initial, +selectedValueD];
    });
    props.setResultsI((initial) => {
      return [...initial, +selectedValueI];
    });
    props.setResultsS((initial) => {
      return [...initial, +selectedValueS];
    });
    props.setResultsC((initial) => {
      return [...initial, +selectedValueC];
    });
    setSelectedValueD();
    setSelectedValueI();
    setSelectedValueS();
    setSelectedValueC();
  };

  const questionHTML = QUESTIONS.map((question) => {
    return (
      <Form
        data={question}
        nextHandler={nextHandler}
        // resultsD={resultsD}
        // resultsI={resultsI}
        // resultsS={resultsS}
        // resultsC={resultsC}
        selectedValueD={selectedValueD}
        selectedValueI={selectedValueI}
        selectedValueS={selectedValueS}
        selectedValueC={selectedValueC}
        setSelectedValueD={setSelectedValueD}
        setSelectedValueI={setSelectedValueI}
        setSelectedValueS={setSelectedValueS}
        setSelectedValueC={setSelectedValueC}
      />
    );
  });

  const submitHandler = () => {
    props.setResultsD((initial) => {
      return [...initial, +selectedValueD];
    });
    props.setResultsI((initial) => {
      return [...initial, +selectedValueI];
    });
    props.setResultsS((initial) => {
      return [...initial, +selectedValueS];
    });
    props.setResultsC((initial) => {
      return [...initial, +selectedValueC];
    });
    setSelectedValueD();
    setSelectedValueI();
    setSelectedValueS();
    setSelectedValueC();
    // go to results page
    props.setPageRender(1);
  };

  const renderButton = () => {
    if (currentQuestion + 1 === QUESTIONS_LENGTH) {
      return <Button onClick={submitHandler}>Submit</Button>;
    }
    return (
      <Button variant="contained" onClick={nextHandler}>
        Next
      </Button>
    );
  };

  return (
    <div className="flex flex-col gap-y-10">
      {questionHTML[currentQuestion]}
      <div className="grid place-items-center">
        <div className="mx-10">{renderButton()}</div>
      </div>
    </div>
  );
};

export default AllForms;
