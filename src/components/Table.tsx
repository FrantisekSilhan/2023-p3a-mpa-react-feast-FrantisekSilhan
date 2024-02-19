import React from 'react';
import { useContext } from 'react';
import { FeastContext } from '../providers/FeastProvider';
import Chair from './Chair';
import Styles from '../styles/Table.module.css';

interface Props {
  tableIndex: number;
}

export const Table: React.FC<Props> = ({ tableIndex }) => {
  const ctx = useContext(FeastContext);
  
  return (
    <div className={Styles["table"]}>
      <p className={Styles["sum"]}>{ctx.state.tables[tableIndex].seats.reduce((sum, seat) => sum + seat.items, 0)}</p>
      {ctx.state.tables[tableIndex].seats.map((seat, seatIndex) => {
        return <Chair tableIndex={tableIndex} seatIndex={seatIndex} />;
      })}
      <button className={Styles["add"]} onClick={() => {ctx.dispatch({ type: 'ADD_SEAT', tableIndex })}}>+</button>
    </div>
  );
};

export default Table;