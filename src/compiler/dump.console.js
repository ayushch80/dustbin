function dump_console (data) {
    data = pharseData(data);
    if (data.startsWith('string:')) {
        data = data.replace('string:', '');
        console.log(data.replace(/[\'\"\`]/g, ''));
    } else if (data.startsWith('number:')) {
        data = data.replace('number:', '');
        try {
            if (data.includes('.')) {
                if (parseFloat(data) === NaN) {
                    console.error(`Error: ${data} is not a number.`);
                }
                console.log(parseFloat(data));
            } else {
                if (isNaN(data) || parseInt(data) === NaN) {
                    console.error(`Error: ${data} is not a number OR try removing quotes.`);
                } else {
                    console.log(parseInt(data));
                }
            }
        } catch (e) {
            console.error(`Error: ${e}`);
        }
    }
}

function pharseData (input) {
    let output = '';
    let insideQuote = false;
    let quoteChar = null;
    for (let i = 0; i < input.length; i++) {
      if (input[i] === '"' || input[i] === "'") {
        if (insideQuote && input[i] === quoteChar) {
          insideQuote = false;
        } else if (!insideQuote) {
          insideQuote = true;
          quoteChar = input[i];
        }
      }
      
      if (!insideQuote && (input[i] === ' ' || input[i] === '\t')) {
        continue;
      }
      
      output += input[i];
    }
    
    return output;
}

module.exports = dump_console;