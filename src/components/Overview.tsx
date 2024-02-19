import React from 'react';
import Playground from './Playground';
import Styles from '../styles/Overview.module.css';
import { FeastContext } from '../providers/FeastProvider';
import { useContext } from 'react';

interface Props {
}

export const Overview: React.FC<Props> = () => {
  const ctx = useContext(FeastContext);
  return (
    <div className={Styles["overview"]}>
      <h1>{ctx.state.tables.reduce((tableSum, table) => tableSum + table.seats.reduce((seatSum, seat) => seatSum + seat.items, 0), 0)}</h1>
      <Playground />
    </div>
  );
};

export default Overview;