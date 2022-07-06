import {
  genMap,
  genMineCells,
  isCellInList,
  isSameCell,
} from "../../core/gen_mine_position";
import { Cell } from "../../core/model/cell";

describe("Test gen_mine_position", () => {
  test("Test isSameCell", () => {
    const cellA: Cell = {
      x: 1,
      y: 1,
      value: -1,
    };

    const cellB: Cell = {
      x: 1,
      y: 1,
      value: -1,
    };

    const cellC: Cell = {
      x: 0,
      y: 1,
      value: -1,
    };

    const isASameB = isSameCell(cellA, cellB);
    const isASameC = isSameCell(cellA, cellC);

    expect(isASameB).toBe(true);
    expect(isASameC).toBe(false);
  });

  test("Test isCellInList", () => {
    const cells: Cell[] = [
      {
        x: 0,
        y: 0,
        value: -1,
      },
      {
        x: 0,
        y: 1,
        value: -1,
      },
    ];

    const cellA: Cell = {
      x: 0,
      y: 0,
      value: -1,
    };

    const cellB: Cell = {
      x: 2,
      y: 3,
      value: -1,
    };

    const isAInList = isCellInList(cells, cellA);
    const isBInList = isCellInList(cells, cellB);

    expect(isAInList).toBe(true);
    expect(isBInList).toBe(false);
  });

  test("Test genMineCells", () => {
    const row = 16;
    const col = 30;
    const numberOfMines = 99;
    const map = genMap(row, col, numberOfMines);
    let mapString = "";
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        const cell = map[i * col + j];
        if (cell.value === -1) {
          mapString += "*";
        } else {
          mapString += cell.value.toString();
        }
      }
      mapString += "\n";
    }
    console.log(mapString);
  });
});
