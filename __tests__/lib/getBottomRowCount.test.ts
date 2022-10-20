import { bottomRowItemsCount } from "../../components/home/Portfolio";

test("returns the dividend if divisor is a factor of dividend", () => {
  const result = bottomRowItemsCount(9, 3);
  expect(result).toEqual(3);
});

test("returns the remainder if the divisor is not a factor of the dividend", () => {
  const result = bottomRowItemsCount(5, 2);
  expect(result).toEqual(1);
});
