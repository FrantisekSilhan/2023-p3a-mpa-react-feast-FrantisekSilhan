import React, { PropsWithChildren, createContext, useReducer } from 'react';

export type FeastState = { tables: Table[] };
export type Table = { seats: Seat[] };
export type Seat = { items: number };

type Action =
  | { type: 'ADD_ITEM'; tableIndex: number; seatIndex: number }
  | { type: 'ADD_SEAT'; tableIndex: number }
  | { type: 'ADD_TABLE' };

type Dispatch = (action: Action) => void;

const initialState: FeastState = { tables: [] };

export const FeastContext = createContext<{ state: FeastState; dispatch: Dispatch }>({
  state: initialState,
  dispatch: () => {},
});

const feastReducer = (state: FeastState, action: Action): FeastState => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        tables: state.tables.map((table, tableIndex) => {
          if (tableIndex === action.tableIndex) {
            return {
              ...table,
              seats: table.seats.map((seat, seatIndex) => {
                if (seatIndex === action.seatIndex) {
                  return {
                    ...seat,
                    items: seat.items + 1,
                  };
                }
                return seat;
              }),
            };
          }
          return table;
        }),
      };
    case 'ADD_SEAT':
      return {
        ...state,
        tables: state.tables.map((table, tableIndex) => {
          if (tableIndex === action.tableIndex) {
            return {
              ...table,
              seats: [...table.seats, { items: 0 }],
            };
          }
          return table;
        }),
      };
    case 'ADD_TABLE':
      return {
        ...state,
        tables: [...state.tables, { seats: [] }],
      };
    default:
      return state;
  }
};

export const FeastProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(feastReducer, initialState);

  return (
    <FeastContext.Provider value={{ state, dispatch }}>
      {children}
    </FeastContext.Provider>
  );
};

export default FeastContext;