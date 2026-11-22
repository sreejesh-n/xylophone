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

  const tonebars = [
    createTonebar(167.5, 140, 90, 400, r.BROWN, "C5"),
    createTonebar(262.5, 152, 90, 376, r.BROWN, "D5"),
    createTonebar(357.5, 164, 90, 352, r.BROWN, "E5"),
    createTonebar(452.5, 176, 90, 328, r.BROWN, "F5"),
    createTonebar(547.5, 188, 90, 304, r.BROWN, "G5"),
    createTonebar(642.5, 200, 90, 280, r.BROWN, "A5"),
    createTonebar(737.5, 212, 90, 256, r.BROWN, "B5"),
    createTonebar(832.5, 224, 90, 232, r.BROWN, "C6"),
    createTonebar(927.5, 236, 90, 208, r.BROWN, "D6"),
    createTonebar(1022.5, 248, 90, 184, r.BROWN, "E6"),
  ];

  return {
    tonebars,
    screen,
  };
};

const drawTonebar = function (config) {
  const { rec, color, note } = config;
  const supportPins = {
    top: {
      x: rec.x + rec.width / 2,
      y: rec.y + rec.height * 0.12,
    },
    bottom: {
      x: rec.x + rec.width / 2,
      y: rec.y + rec.height * 0.88,
    },
  };

  r.DrawRectangleRounded(rec, 0.4, 720, color);
  r.DrawCircleV(supportPins.top, 10, r.WHITE);
  r.DrawCircleV(supportPins.bottom, 10, r.WHITE);
  r.DrawText(note, rec.x + 25, rec.y + rec.height / 2 - 14, 25, r.WHITE);
};

const drawTonebars = function (tonebars) {
  for (const tonebar of tonebars) {
    drawTonebar(tonebar);
  }
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

  drawTonebars(world.tonebars);

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
