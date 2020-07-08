// state = { char: 'a', total: 0 }

function runLengthEncode(pixels) {
  if (typeof pixels !== 'string') {
    return '';
  } else {
    // initial state
    const state = { char: pixels[0], total: 1, output: [] };

    for (let i = 1; i <= pixels.length; i++) {
      const char = pixels[i];
      if (char === state.char) {
        state.total++;
      } else {
        // state has changed, push current state to output, then reset total
        state.output.push(`${state.total}${state.char}`);
        state.total = 1;
      }

      state.char = char;
    }

    return state.output.join('');
  }
}

function decode(encodedString) {
  let result = '';

  const parser = /(\d+)(\w)/gi;
  for (const match of encodedString.matchAll(parser)) {
    const [_, numOccurences, char] = match;
    for (let i = 0; i < parseInt(numOccurences); i++) {
      result += char.toLowerCase();
    }
  }

  return result;
}

console.log(decode('2A1B2c2r2R'));

// console.log(runLengthEncode('aaaaaaaaaa'));
