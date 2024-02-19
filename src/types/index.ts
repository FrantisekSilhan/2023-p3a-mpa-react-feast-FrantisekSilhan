export type FeastState = { tables: Table[]};
export type Table = { seats: Seat[]};
export type Seat = { items: number };

export enum actionType {ADD_TABLE, ADD_SEAT, ADD_ITEM}