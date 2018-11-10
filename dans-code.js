const SYMBOLS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 !?.`~@#$%^&*()_+-=[]{}|;:<>,/';

function caesar(message, mode, symobls, key) {
  let translated = '';

  message.split('').forEach(symbol => {
    if (SYMBOLS.includes(symbol)) {
      const symbolIndex = SYMBOLS.indexOf(symbol);
      let translatedIndex = 0;
      if (mode === 'encrypt') {
        translatedIndex = symbolIndex + key;
      } else if (mode === 'decrypt') {
        translatedIndex = symbolIndex - key;
      }
      if (translatedIndex >= SYMBOLS.length) {
        translatedIndex -= SYMBOLS.length;
      } else if (translatedIndex < 0) {
        translatedIndex += SYMBOLS.length;
      }
      translated += SYMBOLS[translatedIndex];
    } else {
      translated += symbol;
    }
  });
  return translated;
}

function bruteForce(symbols, message) {
  const nIterations = symbols.length;
  for (let i = 0; i < nIterations; i++) {
    console.log(i + ' ' + caesar(message, 'decrypt', symbols, i))
  }
}

// console.log(caesar('öœ daniel is Giving A workshop on ciphers in WeWork finsbury pavement, i think the address is 131', 'encrypt', SYMBOLS, 38))

let ciphertext = 'öœI~?_^@(I^]Is^|^_$ImI;+[*]%+-I+_I`^-%@[]I^_I9@9+[*I#^_].}[<I-?|@)@_{kI^I{%^_*I{%@I?~~[@]]I^]I,A,';

bruteForce(SYMBOLS, ciphertext);
