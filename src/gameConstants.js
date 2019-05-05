
export default {
  gameWidth: 1100,
  gameHeight: 700,
  pixelsToMove: 10,
  thingsThatFall: [
    'cucumber','crab','mogi','nabang',
  ],
  fallerProperties: {
    cucumber: {
      isGood: true,
      width: 50,
      height: 40,
    },
    crab: {
      isGood: true,
      width: 50,
      height: 40,
    },
    mogi: {
      isGood: false,
      width: 50,
      height: 40,
    },
    nabang: {
      isGood: false,
      width: 50,
      height: 40,
    }
  },
};
