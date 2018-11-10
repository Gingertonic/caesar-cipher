const SYMBOLS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 !?.`~@#$%^&*()_+-=[]{}|;:<>,/';

function caesar(message, mode="decrypt", symbols, key){
  let translated = "";
  message.split("").forEach(ch => {
    // check if symbol is in code
    if (symbols.includes(ch)){
      // find unshifted index of ch
      const origIdx = symbols.indexOf(ch);
      if (mode === 'encrypt') {
        //encrypt
        let encryptedIdx = origIdx + key;
        // break;
        // handle case when adjusted idx is off the wheel
        encryptedIdx >= symbols.length ? encryptedIdx -= symbols.length : null;
        // add to translated message
        translated += symbols[encryptedIdx];
      } else {
        //decrypt
        let decryptedIdx = origIdx - key;
        // handle case when adjusted idx is off the wheel
        decryptedIdx < 0 ? decryptedIdx += symbols.length : null;
        // add to translated message
        translated += symbols[decryptedIdx];
      }
    } else {
      translated += ch
    }
  });
  return translated;
}

// BRUTE FORCE - using for loop
function bruteForce(symbols, message){
  // define how any times we need to try
  const nIterations = symbols.length
  // iterate over all possibilities
  for (let i = 0; i < nIterations; i++){
    console.log(i + ' ' + caesar(message, 'decrypt', symbols, i))
  }
}


console.log(caesar("Encrypt me!", 'encrypt', SYMBOLS, 34))
bruteForce(SYMBOLS, "by!y]3.]3?{]n2y]?yw!y.]23xxy8]7y??u1y{]qy'!y]38{")
