import React, { useState } from 'react';

import { Radio, Button } from '@mui/material';

// const DUMMYDATA = {
//   question: '我通常喜欢和哪些性格的人谈话',
//   answer1: '令人愉快&节奏快的人',
//   answer1Total: 'I',
//   answer2: '知识丰富&逻辑性强',
//   answer2Total: 'C',
//   answer3: '友好的&真诚的',
//   answer3Total: 'S',
//   answer4: '聪明&有效率的',
//   answer4Total: 'D',
// };

const Form = (props) => {
  const data = props.data;

  const strengthDuplicateHandler = (strength, pType) => {
    if (props.selectedValueD === strength) {
      if (pType !== 'D') {
        props.setSelectedValueD('');
      }
    }
    if (props.selectedValueI === strength) {
      if (pType !== 'I') {
        props.setSelectedValueI('');
      }
    }
    if (props.selectedValueS === strength) {
      if (pType !== 'S') {
        props.setSelectedValueS('');
      }
    }
    if (props.selectedValueC === strength) {
      if (pType !== 'C') {
        props.setSelectedValueC('');
      }
    }
  };
  const handleChange = (event) => {
    const pType = event.target.value[0];
    const strength = event.target.value[1];
    strengthDuplicateHandler(strength, pType);
    if (pType === 'D') {
      props.setSelectedValueD(strength);
    }
    if (pType === 'I') {
      props.setSelectedValueI(strength);
    }
    if (pType === 'S') {
      props.setSelectedValueS(strength);
    }
    if (pType === 'C') {
      props.setSelectedValueC(strength);
    }
  };

  const checkedHandler = (value) => {
    const pType = value[0];
    const strength = value[1];
    if (pType === 'D') {
      return strength === props.selectedValueD;
    }
    if (pType === 'I') {
      return strength === props.selectedValueI;
    }
    if (pType === 'S') {
      return strength === props.selectedValueS;
    }
    if (pType === 'C') {
      return strength === props.selectedValueC;
    }
    return false;
  };
  return (
    <React.Fragment>
      <h2 className="self-center mt-10 text-cyan-800">{data.question}</h2>
      <div>
        <div className="inline-grid grid-cols-10">
          <h3 className="col-span-6">strength</h3>
          <h3>最像你的</h3>
          <h3>{''}</h3>
          <h3>{''}</h3>
          <h3>离你最远的</h3>

          <h3 className="col-span-6">{data.answer1}</h3>
          <Radio
            checked={checkedHandler(data.answer1Total + '1')}
            onChange={handleChange}
            value={data.answer1Total + '1'}
            name="radio-buttons"
          />
          <Radio
            checked={checkedHandler(data.answer1Total + '2')}
            onChange={handleChange}
            value={data.answer1Total + '2'}
            name="radio-buttons"
          />
          <Radio
            checked={checkedHandler(data.answer1Total + '3')}
            onChange={handleChange}
            value={data.answer1Total + '3'}
            name="radio-buttons"
          />
          <Radio
            checked={checkedHandler(data.answer1Total + '4')}
            onChange={handleChange}
            value={data.answer1Total + '4'}
            name="radio-buttons"
          />

          <h3 className="col-span-6">{data.answer2}</h3>
          <Radio
            checked={checkedHandler(data.answer2Total + '1')}
            onChange={handleChange}
            value={data.answer2Total + '1'}
            name="radio-buttons"
          />
          <Radio
            checked={checkedHandler(data.answer2Total + '2')}
            onChange={handleChange}
            value={data.answer2Total + '2'}
            name="radio-buttons"
          />
          <Radio
            checked={checkedHandler(data.answer2Total + '3')}
            onChange={handleChange}
            value={data.answer2Total + '3'}
            name="radio-buttons"
          />
          <Radio
            checked={checkedHandler(data.answer2Total + '4')}
            onChange={handleChange}
            value={data.answer2Total + '4'}
            name="radio-buttons"
          />

          <h3 className="col-span-6">{data.answer3}</h3>
          <Radio
            checked={checkedHandler(data.answer3Total + '1')}
            onChange={handleChange}
            value={data.answer3Total + '1'}
            name="radio-buttons"
          />
          <Radio
            checked={checkedHandler(data.answer3Total + '2')}
            onChange={handleChange}
            value={data.answer3Total + '2'}
            name="radio-buttons"
          />
          <Radio
            checked={checkedHandler(data.answer3Total + '3')}
            onChange={handleChange}
            value={data.answer3Total + '3'}
            name="radio-buttons"
          />
          <Radio
            checked={checkedHandler(data.answer3Total + '4')}
            onChange={handleChange}
            value={data.answer3Total + '4'}
            name="radio-buttons"
          />

          <h3 className="col-span-6">{data.answer4}</h3>
          <Radio
            checked={checkedHandler(data.answer4Total + '1')}
            onChange={handleChange}
            value={data.answer4Total + '1'}
            name="radio-buttons"
          />
          <Radio
            checked={checkedHandler(data.answer4Total + '2')}
            onChange={handleChange}
            value={data.answer4Total + '2'}
            name="radio-buttons"
          />
          <Radio
            checked={checkedHandler(data.answer4Total + '3')}
            onChange={handleChange}
            value={data.answer4Total + '3'}
            name="radio-buttons"
          />
          <Radio
            checked={checkedHandler(data.answer4Total + '4')}
            onChange={handleChange}
            value={data.answer4Total + '4'}
            name="radio-buttons"
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Form;
