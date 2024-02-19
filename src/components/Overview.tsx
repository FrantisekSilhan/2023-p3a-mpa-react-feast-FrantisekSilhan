import React from 'react';
import Playground from './Playground';
import Styles from '../styles/Overview.module.css';

interface Props {
}

export const Overview: React.FC<Props> = () => {
  return (
    <div className={Styles["overview"]}>
      <h1>Feast</h1>
      <Playground />
    </div>
  );
};

export default Overview;