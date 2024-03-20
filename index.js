// Code your solution in this file!
//distanceFromHqInBlocks
function distanceFromHqInBlocks(blocks) {
  return Math.abs(42 - blocks);
}
distanceFromHqInBlocks();

//distanceFromHqInFeet
function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}
distanceFromHqInFeet();

//distanceTravelledInFeet
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}
distanceTravelledInFeet(50, 38);

//calculatesFarePrice;
function calculatesFarePrice(feet) {
  if (feet <= 400) {
    return 0;
  } else if (feet > 400 && feet <= 2000) {
    return (feet - 400) * 0.02;
  } else if (feet > 2000 && feet <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
