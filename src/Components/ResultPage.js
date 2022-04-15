import { NORMAL_LENGTH } from '../configData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import React, { useState } from 'react';
import { Button } from '@mui/material';

// const dumbD = [4, 3, 2, 1, 2, 1, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 3];
// const dumbI = [3, 2, 1, 4, 1, 4, 3, 4, 4, 2, 1, 4, 2, 4, 1, 2, 3, 2, 3, 4];
// const dumbS = [2, 1, 4, 3, 4, 2, 2, 1, 1, 3, 4, 2, 3, 1, 4, 3, 1, 1, 2, 1];
// const dumbC = [1, 4, 3, 2, 3, 3, 1, 2, 3, 4, 3, 1, 1, 2, 3, 4, 4, 4, 1, 2];

const ResultPage = (props) => {
  const sumArray = (arr) => {
    return arr.reduce((acc, num) => acc + num, 0);
  };
  const normalD = sumArray(props.resultsD.slice(0, NORMAL_LENGTH));
  const normalI = sumArray(props.resultsI.slice(0, NORMAL_LENGTH));
  const normalS = sumArray(props.resultsS.slice(0, NORMAL_LENGTH));
  const normalC = sumArray(props.resultsC.slice(0, NORMAL_LENGTH));
  const stressD = sumArray(props.resultsD.slice(NORMAL_LENGTH));
  const stressI = sumArray(props.resultsI.slice(NORMAL_LENGTH));
  const stressS = sumArray(props.resultsS.slice(NORMAL_LENGTH));
  const stressC = sumArray(props.resultsC.slice(NORMAL_LENGTH));
  const totalD = sumArray(props.resultsD);
  const totalI = sumArray(props.resultsI);
  const totalS = sumArray(props.resultsS);
  const totalC = sumArray(props.resultsC);

  console.log(stressD);

  const data = [
    {
      name: 'D',
      normal: normalD,
      stress: stressD,
      average: totalD / 2,
      medium: 25,
    },
    {
      name: 'I',
      normal: normalI,
      stress: stressI,
      average: totalI / 2,
      medium: 25,
    },
    {
      name: 'S',
      normal: normalS,
      stress: stressS,
      average: totalS / 2,
      medium: 25,
    },
    {
      name: 'C',
      normal: normalC,
      stress: stressC,
      average: totalC / 2,
      medium: 25,
    },
  ];

  const [displayGraph, setDisplayGraph] = useState('0');

  const allHandler = () => {
    setDisplayGraph('0');
  };
  const averageHandler = () => {
    setDisplayGraph('1');
  };
  const bothHandler = () => {
    setDisplayGraph('2');
  };

  const renderGraph = (graphState) => {
    if (graphState === '0') {
      return (
        <React.Fragment>
          <Line
            type="linear"
            dataKey="normal"
            stroke="#30AADD"
            strokeWidth={3}
          />
          <Line
            type="linear"
            dataKey="stress"
            stroke="#D82148"
            strokeWidth={3}
          />
          <Line
            type="linear"
            dataKey="average"
            stroke="black"
            strokeWidth={1}
            strokeDasharray="5,5"
          />
          <Line type="linear" dataKey="medium" isAnimationActive={false} />
        </React.Fragment>
      );
    }
    if (graphState === '1') {
      return (
        <React.Fragment>
          <Line
            type="linear"
            dataKey="average"
            stroke="black"
            strokeWidth={1}
            strokeDasharray="5,5"
          />
          <Line type="linear" dataKey="medium" isAnimationActive={false} />
        </React.Fragment>
      );
    }
    if (graphState === '2') {
      return (
        <React.Fragment>
          <Line
            type="linear"
            dataKey="normal"
            stroke="#30AADD"
            strokeWidth={3}
          />
          <Line
            type="linear"
            dataKey="stress"
            stroke="#D82148"
            dot={true}
            strokeWidth={3}
          />
          <Line type="linear" dataKey="medium" isAnimationActive={false} />
        </React.Fragment>
      );
    }
  };
  return (
    <React.Fragment>
      <LineChart width={500} height={500} data={data}>
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" domain={[10, 40]} tickCount={31} />
        <YAxis
          // yAxisId="rightAxis"
          domain={[10, 40]}
          tickCount={31}
          orientation="right"
        />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        {renderGraph(displayGraph)}
      </LineChart>
      <Button onClick={allHandler}>All</Button>
      <Button onClick={averageHandler}>Average</Button>
      <Button onClick={bothHandler}>Stress {`&`} Normal</Button>
    </React.Fragment>
  );
};

export default ResultPage;
