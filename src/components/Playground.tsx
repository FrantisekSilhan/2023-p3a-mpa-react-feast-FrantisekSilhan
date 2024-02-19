import React, { useContext } from 'react';
import { FeastContext } from '../providers/FeastProvider';
import Table from './Table';

interface Props {
}

const Playground: React.FC<Props> = () => {
  const ctx = useContext(FeastContext);
  
  return (
    <div>
      <button onClick={() => ctx.dispatch({ type: 'ADD_TABLE' })}>Add table</button>
      {ctx.state.tables.map((table, tableIndex) => {
        return <Table tableIndex={tableIndex} />;
      })}
    </div>
  );
};

export default Playground;