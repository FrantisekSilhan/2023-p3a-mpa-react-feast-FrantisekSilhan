import React, { useContext } from 'react';
import { FeastContext } from '../providers/FeastProvider';
import Table from './Table';
import Styles from '../styles/Playground.module.css';

interface Props {
}

export const Playground: React.FC<Props> = () => {
  const ctx = useContext(FeastContext);
  
  return (
    <div className={Styles["playground"]}>
      {ctx.state.tables.map((_, tableIndex) => {
        return <Table tableIndex={tableIndex} />;
      })}
      <button className={Styles["add"]} onClick={() => ctx.dispatch({ type: 'ADD_TABLE' })}>+</button>
    </div>
  );
};

export default Playground;