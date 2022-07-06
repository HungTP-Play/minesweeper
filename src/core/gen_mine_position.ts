import { Cell } from "./model/cell";

export function isSameCell(a: Cell, b: Cell) {
  return a.x === b.x && a.y === b.y;
}

export function isCellInList(listCells: Cell[], cell: Cell): boolean {
  for (let i = 0; i < listCells.length; i++) {
    if (isSameCell(listCells[i], cell) === true) {
      return true;
    }
  }
  return false;
}

export function genMineCells(
  row: number,
  col: number,
  numberOfMines: number
): Cell[] {
  let cells: Cell[] = [];
  for (let i = 0; i < numberOfMines; i++) {
    let mineCell: Cell = {
      x: Math.ceil(Math.random() * (col - 1)),
      y: Math.ceil(Math.random() * (row - 1)),
      value: -1,
      isMarked: false,
      isOpened: false,
    };
    while (isCellInList(cells, mineCell) === true) {
      mineCell = {
        x: Math.ceil(Math.random() * (col - 1)),
        y: Math.ceil(Math.random() * (row - 1)),
        value: -1,
        isMarked: false,
        isOpened: false,
      };
    }
    cells.push(mineCell);
  }
  return cells;
}

export function genZeroMap(row: number, col: number): Cell[] {
  const map: Cell[] = [];
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      map.push({
        x: c,
        y: r,
        value: 0,
        isMarked: false,
        isOpened: false,
      });
    }
  }
  return map;
}

export function calculateMine(
  mineCell: Cell,
  map: Cell[],
  col: number,
  row: number
): Cell[] {
  const _map = [...map];
  for (let i = mineCell.y - 1; i <= mineCell.y + 1; i++) {
    for (let j = mineCell.x - 1; j <= mineCell.x + 1; j++) {
      if (i < 0 || i >= row) continue;
      if (j < 0 || j >= col) continue;
      const cell = map[i * col + j];
      if (cell.value === -1) continue;
      if (isSameCell(cell, mineCell) === true) continue;
      cell.value = cell.value + 1;
      map[i * col + j] = { ...cell };
    }
  }
  return _map;
}

export function putMine(
  mineCell: Cell,
  map: Cell[],
  col: number,
  row: number
): Cell[] {
  const _map = [...map];
  _map[mineCell.y * col + mineCell.x] = mineCell;
  const __map = calculateMine(mineCell, _map, col, row);
  return __map;
}

export function genMap(
  row: number,
  col: number,
  numberOfMines: number
): Cell[] {
  let map = genZeroMap(row, col);
  const mineCells = genMineCells(row, col, numberOfMines);
  for (const mine of mineCells) {
    map = putMine(mine, map, col, row);
  }
  return map;
}
