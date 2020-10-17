/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  var count = 0;
  var Jary = J.split("");

  for (let i = 0; i < Jary.length; i++) {
    for (let j = 0; j < S.length; j++) {
      if (Jary[i] === S[j]) {
        count++;
      }
    }
  }

  return count;
};

var numJewelsInStones2 = function (J, S) {
  let jarr = J.split("");
  let sarr = S.split("");
  return sarr.filter((item) => jarr.includes(item)).length;
};
