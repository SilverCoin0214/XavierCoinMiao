/**
 * @param {string} S
 * @return {string}
 */

// stack为0说明一次原语完成, 去除了外层的括号,
var removeOuterParentheses = function (S) {
  let stack = 0;
  let trimmed = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(") {
      if (stack !== 0) {
        trimmed.push("(");
      }

      stack++;
    } else {
      stack--;
      if (stack !== 0) {
        trimmed.push(")");
      }
    }
  }

  return trimmed.join("");
};

var S = "(()(()))";
console.log(removeOuterParentheses(S));
