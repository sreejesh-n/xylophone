const r = require("raylib");
const t = require("./tonebar");

const running = function () {
  return !r.WindowShouldClose();
};

const setup = function () {
  const screen = { width: 1280, height: 720 };
  const title = "Xylophone";
  const FPS = 240;

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, title);
  r.SetTargetFPS(FPS);

  const tonebars = [
    t.createTonebar(167.5, 140, 90, 400, r.BROWN, "C5"),
    t.createTonebar(262.5, 152, 90, 376, r.BROWN, "D5"),
    t.createTonebar(357.5, 164, 90, 352, r.BROWN, "E5"),
    t.createTonebar(452.5, 176, 90, 328, r.BROWN, "F5"),
    t.createTonebar(547.5, 188, 90, 304, r.BROWN, "G5"),
    t.createTonebar(642.5, 200, 90, 280, r.BROWN, "A5"),
    t.createTonebar(737.5, 212, 90, 256, r.BROWN, "B5"),
    t.createTonebar(832.5, 224, 90, 232, r.BROWN, "C6"),
    t.createTonebar(927.5, 236, 90, 208, r.BROWN, "D6"),
    t.createTonebar(1022.5, 248, 90, 184, r.BROWN, "E6"),
  ];

  return {
    tonebars,
    screen,
  };
};

const update = function (world) {};

const draw = function (world) {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);

  t.drawTonebars(world.tonebars);

  r.EndDrawing();
};

const teardown = function () {
  r.CloseWindow();
};

module.exports = {
  running,
  setup,
  update,
  draw,
  teardown,
};
