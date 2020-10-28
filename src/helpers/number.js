export const cf = (num) => {
  return isNaN(num)
    ? ''
    : 'Rp. ' +
        Number(num)
          .toFixed(0)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

export const rand = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
