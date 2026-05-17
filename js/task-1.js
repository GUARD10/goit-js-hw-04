'use strict';

function isEnoughCapacity(products, containerSize) {
  const totalProductsSize = Object.values(products).reduce((total, size) => total + size, 0);
  return totalProductsSize <= containerSize;
}

console.log('Task 1:');
OutputHelper.printResult('task-1-output', isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8));
OutputHelper.printResult('task-1-output', isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12));
OutputHelper.printResult('task-1-output', isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14));
OutputHelper.printResult('task-1-output', isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7));
console.log('===================================');
