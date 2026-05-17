'use strict';

class OutputHelper {
  static printResult(outputId, value) {
    console.log(value);

    const output = document.querySelector(`#${outputId}`);

    if (output) {
      output.textContent += `${value}\n`;
    }
  }
}
