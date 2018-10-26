import React from 'react';
import {Button} from 'whale-rn';
import styles from './Example.less';
const Example = ({list,handleClick}) => {
  return (
    <div>
      Example  work
      <Button type="danger" onClick={handleClick} title={}>Example</Button>
      { JSON.stringify(list)}
    </div>
  );
};

export default Example;