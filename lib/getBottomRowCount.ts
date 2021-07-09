export const getBottomRowCount = (itemsCount: number, numColumns: number) => {
  const remainders = itemsCount % numColumns;
  return remainders ? remainders : numColumns;
};
