import React from 'react';
import { useContext } from 'react';
import { FeastContext } from '../providers/FeastProvider';

interface Props {
  tableIndex: number;
  seatIndex: number;

}

const Chair: React.FC<Props> = ({ tableIndex, seatIndex }) => {
  const ctx = useContext(FeastContext);

  return (
    <div>
      <button onClick={() => {ctx.dispatch({ type: 'ADD_ITEM', tableIndex, seatIndex })}}>Add item</button>
      {ctx.state.tables[tableIndex].seats[seatIndex].items}
    </div>
  );
};

export default Chair;