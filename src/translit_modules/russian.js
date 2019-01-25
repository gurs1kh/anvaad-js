const map = [
      ['!', '!'], 
      ['"', '"'],
      ['#', '#'],
      ['$', '$'],
      ['%', '%'],
      ['&', 'ph'],
      ["'", "'"],
      ['(', '('],
      [')', ')'],
      ['*', 'i'],
      ['+', '+'],
      [',', ','],
      ['-', '-'],
      ['.', '.'],
      ['\/', '-'],
      [0, '0'],
      [1, '1'],
      [2, '2'],
      [3, '3'],
      [4, '4'],
      [5, '5'],
      [6, '6'],
      [7, '7'],
      [8, '8'],
      [9, '9'],
      [':', ':'],
      [';', ';'],
      ['<', 'ik'],
      ['=', '='],
      ['>', 'Oankaar'],
      ['?', '?'],
      ['@', '(h)'],
      ['A', 'a'], // done
      ['B', 'б'], // done
      ['C', 'щ'], // done
      ['D', 'dh'], // cant find
      ['E', 'н'], // done
      ['F', 'dd'], // cant find
      ['G', 'gh'], // cant find
      ['H', 'h'], // cant find
      ['I', 'и'], // done
      ['J', 'jh'], //left off here
      ['K', 'х'],
      ['L', 'lh'],
      ['M', '(n)'],
      ['N', '(n)'],
      ['O', 'о'], //done
      ['P', 'ф'], // done
      ['Q', 'th'],
      ['R', 'r'],
      ['S', 'ш'], // done
      ['T', 'Th'],
      ['U', 'oo'],
      ['V', 'R'],
      ['W', 'aa(n)'],
      ['X', 'я'], // done
      ['Y', 'AI'],
      ['Z', 'g(h)'],
      ['[', '|'],
      ['\\', 'n(j)'],
      [']', '||'],
      ['^', 'khh'],
      ['_', '_'],
      ['`', "'"],
      ['a', 'u'],
      ['b', 'й'], // done
      ['c', 'ч'], // done
      ['d', 'dh'],
      ['e', 'e'],
      ['f', 'dd'],
      ['g', 'г'], // done
      ['h', 'h'],
      ['i', 'и'], // done
      ['j', 'j'],
      ['k', 'k'],
      ['l', 'л'], // done
      ['m', 'м'], // done
      ['n', 'н'], // done
      ['o', 'н'], // to do
      ['p', 'p'],
      ['q', 't'],
      ['r', 'r'],
      ['s', 'с'], //done
      ['t', 'т'], // done
      ['u', 'u'],
      ['v', 'v'],
      ['w', 'aa'],
      ['x', 'N'],
      ['y', 'e'],
      ['z', 'z'],
      ['{', '{'],
      ['|', 'n(g)'],
      ['}', '}'],
      ['~', "'"],
      ['\u00a1', 'ikOankaar'],
      ['\u00a2', '\u00a2'],
      ['\u00a3', '\u00a3'],
      ['\u00a4', ''],
      ['\u00a5', '\u00a5'],
      ['\u00a7', 'hoo'],
      ['\u00a8', 'oo'],
      ['\u00aa', ''],
      ['\u00ae', 'r'],
      ['\u00b0', ''],
      ['\u00b1', '\u00b1'],
      ['\u00b4', 'ye'],
      ['\u00b5', '(n)'],
      ['\u00b6', '\u00b6'],
      ['\u00b7', '\u00b7'],
      ['\u00bf', 'x'],
      ['\u00c5', 'ik'],
      ['\u00c6', 'Oankaar'],
      ['\u00c7', ''],
      ['\u00cd', 'vY'],
      ['\u00ce', 'y'],
      ['\u00cf', 'y'],
      ['\u00d2', '||'],
      ['\u00d3', ''],
      ['\u00d4', ''],
      ['\u00d8', ''],
      ['\u00da', ':'],
      ['\u00e5', 'Oankaar'],
      ['\u00e6', ''],
      ['\u00e7', 'ch'],
      ['\u00fc', 'u'],
      ['\u0152', ''],
      ['\u0153', 't'],
      ['\u0192', 'noo(n)'],
      ['\u02c6', '(n)'],
      ['\u02dc', 'n'],
      ['\u2013', '\u2013'],
      ['\u2014', '\u2014'],
      ['\u2018', "'"],
      ['\u2019', "'"],
      ['\u201a', ''],
      ['\u201c', '"'],
      ['\u201d', '"'],
      ['\u2020', 'T'],
      ['\u2022', '\u2022'],
      ['\u2026', '\u2026'],
      ['\u2030', ''],
    ];

module.exports = gurmukhi =>
  map.reduce((_str, [gurmukhiLetter, devnagriUnicode]) => {
    let str = _str;

    str = str.replace(/<>/gi, 'ੴ');

    // Gurakhar places i before the letter it's applied to, while devnagri unicode placed it after.
    if (gurmukhiLetter === 'i') {
      str = str.replace(/i./gm, full =>
        full
          .split('')
          .reverse()
          .join(''));
    }

    while (str.includes(gurmukhiLetter)) {
      str = str.replace(gurmukhiLetter, devnagriUnicode, 'g');
    }

    return str;
  }, gurmukhi);
