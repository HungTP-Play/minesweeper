export type Level = {
  row: number;
  col: number;
  numberOfMines: number;
};

export const beginner8x8x10: Level = {
  row: 8,
  col: 8,
  numberOfMines: 10,
};

export const beginner9x9x10: Level = {
  row: 9,
  col: 9,
  numberOfMines: 10,
};

export const beginner10x10x10: Level = {
  row: 10,
  col: 10,
  numberOfMines: 10,
};

export const intermediate13x15x40: Level = {
  row: 13,
  col: 15,
  numberOfMines: 40,
};

export const intermediate16x16x40: Level = {
  row: 16,
  col: 16,
  numberOfMines: 40,
};

export const expert16x30x99: Level = {
  row: 16,
  col: 30,
  numberOfMines: 99,
};

export const expert30x16x99: Level = {
  row: 30,
  col: 16,
  numberOfMines: 99,
};
