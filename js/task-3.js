'use strict';

const profile = {
  username: "Jacob",
  playTime: 300,

  changeUsername(newName) {
    this.username = newName;
  },

  updatePlayTime(hours) {
    this.playTime += hours;
  },

  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  }
};

console.log('Task 3:');
OutputHelper.printResult('task-3-output', profile.getInfo());
profile.changeUsername("Marco");
OutputHelper.printResult('task-3-output', profile.getInfo());
profile.updatePlayTime(20);
OutputHelper.printResult('task-3-output', profile.getInfo());