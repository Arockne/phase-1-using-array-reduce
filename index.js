const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//implement totalBatteries
  //holds the sum of all of the batter amounts in batterBatches
const totalBatteries = batteryBatches.reduce((a, b) => a + b);