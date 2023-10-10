import { Portfolio } from "components/home";

test("returns true if item on the only row", () => {
  // Single Column
  expect(Portfolio.renderItemBorder(1, 1, 1)).toEqual(true);
  // Multi-column
  expect(Portfolio.renderItemBorder(2, 2, 2)).toEqual(true);
});

test("returns true if the item is not on the bottom row", () => {
  // Single column
  expect(Portfolio.renderItemBorder(9, 10, 1)).toEqual(true);
  // Multi-column
  expect(Portfolio.renderItemBorder(5, 10, 5)).toEqual(true);
});

test("returns false if the item is on the bottom row", () => {
  // Single column
  expect(Portfolio.renderItemBorder(5, 5, 1)).toEqual(false);
  // Multi-column
  expect(Portfolio.renderItemBorder(6, 10, 5)).toEqual(false);
});
