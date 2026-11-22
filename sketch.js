const r = require("raylib");

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

  return {
    screen,
  };
};

const createTonebar = function (x, y, width, height, color, note) {
  return {
    rec: { x, y, width, height },
    color,
    note,
  };
};

const update = function (world) {};

const draw = function (world) {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);

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
