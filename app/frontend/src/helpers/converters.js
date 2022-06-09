export const dateForSql = (value) => {
  if (value.length === 10) {
    const splited = value.split('/');
    const order = [splited[2], splited[1], splited[0]];
    const result = order.join('-');

    return result;
  }

  return null;
};

export const sqlForDate = (value) => {
  const birth = value.split('-');
  const d = birth[2];
  const m = birth[1];
  const y = birth[0];

  return `${d}/${m}/${y}`;
};
