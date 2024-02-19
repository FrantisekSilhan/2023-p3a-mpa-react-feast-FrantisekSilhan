import React from 'react';
import { useContext } from 'react';
import { FeastContext } from '../providers/FeastProvider';
import Chair from './Chair';

interface Props {
  tableIndex: number;
}

const Table: React.FC<Props> = ({ tableIndex }) => {
  const ctx = useContext(FeastContext);
  
  return (
    <div>
      <button onClick={() => {ctx.dispatch({ type: 'ADD_SEAT', tableIndex })}}>Add seat</button>
      {tableIndex}
      {ctx.state.tables[tableIndex].seats.map((seat, seatIndex) => {
        return <Chair tableIndex={tableIndex} seatIndex={seatIndex} />;
      })}
    </div>
  );
};

export default Table;