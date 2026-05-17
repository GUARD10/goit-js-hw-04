'use strict';

const firstTestData = [
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ];

const secondTestData = [
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ]

function calcAverageCalories(days) {
  const totalCalories = days.reduce((total, day) => total + day.calories, 0);
  return totalCalories / days.length || 0;
}

console.log('Task 2:');
OutputHelper.printResult('task-2-output', calcAverageCalories(firstTestData));
OutputHelper.printResult('task-2-output', calcAverageCalories(secondTestData));
OutputHelper.printResult('task-2-output', calcAverageCalories([]));
console.log('===================================');
