const { add } = require('./stringCalculator');

describe('String Calculator', () => {
  test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);   // test case - For emplty empty string. 
  });
  
  test('returns number for a single number input', () => {
    expect(add("5")).toBe(5); // test case - For single char string.
  });

  test('returns sum of two comma-separated numbers', () => {
    expect(add("1,2")).toBe(3); // test case - For two num string with comma seperated.
  });

  test('returns sum for newline-separated numbers', () => {
    expect(add("1,2")).toBe(3); 
    expect(add("3\n4")).toBe(7);  // test case - For two num string with new line seperated.
  });

  test('returns sum for semicolon-separated numbers', () => {
    expect(add("6;7")).toBe(13);  // test case - For two num string with ; seperated.
  });

  test('returns sum for mixed delimiters', () => {
    expect(add("1,2\n3;4")).toBe(10); // test case - For two num string with mixed delimeters seperated.
  });

  test('ignores extra whitespaces between delimiters', () => {
    expect(add("1, 2\n 3 ;4")).toBe(10); // test case - For two num string with mixed delimeters seperated.
  });
  
});
