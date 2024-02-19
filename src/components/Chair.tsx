import React from 'react';
import { useContext } from 'react';
import { FeastContext } from '../providers/FeastProvider';
import Styles from '../styles/Chair.module.css';

interface Props {
  tableIndex: number;
  seatIndex: number;

}

const Chair: React.FC<Props> = ({ tableIndex, seatIndex }) => {
  const ctx = useContext(FeastContext);

  return (
    <>
      <button className={Styles["chair"]} onClick={() => {ctx.dispatch({ type: 'ADD_ITEM', tableIndex, seatIndex })}}>{ctx.state.tables[tableIndex].seats[seatIndex].items}</button>
    </>
  );
};

export default Chair;