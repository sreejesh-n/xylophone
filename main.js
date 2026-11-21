const { setup, running, update, draw, teardown } = require("./sketch");

const loop = function (world) {
  while (running()) {
    update(world);
    draw(world);
  }
};

const main = function () {
  const world = setup();
  loop(world);
  teardown();
};

main();
