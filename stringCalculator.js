function add(numbersStr) {
  if (!numbersStr) return 0;

  const delimiters = /[,\n;]/;
  const parts = numbersStr.split(delimiters);

  let sum = 0;

  for (let part of parts) {
    const trimmed = part.trim();
    if (trimmed === '') continue;

    const num = parseInt(trimmed, 10);
    if (isNaN(num)) throw new Error(`Invalid number: ${trimmed}`);

    sum += num;
  }

  return sum;
}

module.exports = { add };
